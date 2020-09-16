import fs from 'fs'
import path from 'path'
import express, { Request, Response } from 'express'
import history from 'connect-history-api-fallback'
import https from 'https'
import { body, validationResult } from 'express-validator'
import Database from 'nedb'
import nodemailer from 'nodemailer'

import { Profile, Experience, Skill, Contact } from './types'


// config.jsonの型定義
type ConfigType = {
  origin : string[],
  port   : number,
  protocol : {
    isSSL     : boolean,
    keyPath?  : string,
    certPath? : string
  },
  mail : {
    user : string,
    pass : string
  }
}
// config.jsonより設定情報を取得
const configPath = path.join(__dirname, 'config.json')
const {
  origin,
  port,
  protocol,
  mail
}: ConfigType = JSON.parse(fs.readFileSync(configPath, 'utf8'))

// 秘密鍵、公開鍵証明書の定義
const keyPath  = protocol.keyPath  || ''
const certPath = protocol.certPath || ''
let key, cert
if (protocol.isSSL) {
  key  = fs.readFileSync(keyPath)
  cert = fs.readFileSync(certPath)
}

/**
 * Webサーバーの設定
 */
const web = express()
// フォールバックの指定
web.use(history())
// 静的リソースの提供
web.use(express.static(`${__dirname}/../client`))
// Webサーバーを起動
const webServer = protocol.isSSL ? https.createServer({ key, cert }, web) : web
webServer.listen(port, () => console.log('During startup web server...'))

/**
 * Webアプリケーションサーバーの設定
 */
const webApp = express()
// レスポンスヘッダの設定
webApp.use(express.urlencoded({ extended: true}))
webApp.use(express.json())
webApp.use((req: Request, res: Response, next: () => void) => {
  // CORSの設定
  origin.forEach(url => res.setHeader('Access-Control-Allow-Origin', url))
  // res.setHeader('Access-Control-Allow-Origin' , origin)
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  next()
})
// NeDBよりデータ取得時のエラーハンドリング
webApp.use(/\/api\/(all|profile|skill|experience)/, (err: Error, req: Request, res: Response, next: () => void) => {
  if (err) console.error(err)
  next()
})
// Webアプリケーションサーバーを起動
const webAppServer = protocol.isSSL ? https.createServer({ key, cert }, webApp) : webApp
webAppServer.listen(3000, () => console.log('During startup web application server...'))

/**
 * データベースより各リソースを取得
 */
const profileDB = new Database({
  filename : path.join(__dirname, 'data', 'profile.db'),
  autoload : true
})
const skillDB = new Database({
  filename : path.join(__dirname, 'data', 'skill.db'),
  autoload : true
})
const experienceDB = new Database({
  filename : path.join(__dirname, 'data', 'experience.db'),
  autoload : true
})

/**
 * プロフィール情報を取得
 * @return Promiseオブジェクト
 */
const getProfile = (): Promise<Profile | undefined> => {
  return new Promise((
    resolve : (docs: Profile) => void,
    reject  : (err: string) => void
  ) => {
    profileDB.find({}, (err: Error, docs: Profile) => {
      if (err) reject(err.message)
      resolve(docs)
    })
  })
}

/**
 * スキル情報を取得
 * @return Promiseオブジェクト
 */
const getSkill = (): Promise<Skill[] | undefined> => {
  return new Promise((
    resolve : (docs: Skill[]) => void,
    reject  : (err: string) => void
  ) => {
    skillDB.find({}, (err: Error, docs: Skill[]) => {
      if (err) reject(err.message)
      resolve(docs)
    })
  })
}

/**
 * 実務経験情報を取得
 * @return Promiseオブジェクト
 */
const getExperience = (): Promise<Experience[] | undefined> => {
  return new Promise((
    resolve : (docs: Experience[]) => void,
    reject  : (err: string) => void
  ) => {
    experienceDB
      .find({})
      .sort({ startDate : -1 })
      .exec((err: Error, docs: Experience[]) => {
        if (err) reject(err.message)
        resolve(docs)
      })
  })
}

/**
 *【API】全リソース取得 ※初回アクセス時に使用
 */
webApp.get('/api/all', async (req: Request, res: Response) => {
  const [profile, skill, experience] = await Promise.all([
    getProfile(),
    getSkill(),
    getExperience()
  ])
  res.json({ profile, skill, experience })
})

/**
 *【API】プロフィール情報を取得
 */
webApp.get('/api/profile', async (req: Request, res: Response) => {
  const data = await getProfile()
  res.json(data)
})


/**
 *【API】スキルセットを取得
 */
webApp.get('/api/skill', async (req: Request, res: Response) => {
  const data = await getSkill()
  res.json(data)
})

/**
 *【API】実務経験情報を取得
 */
webApp.get('/api/experience', async (req: Request, res: Response) => {
  const data = await getExperience()
  res.json(data)
})

/**
 * お問い合わせメール送信(SMTP)
 * statusコード一覧
 * ・400 / バリデーションエラー
 * ・500 / メール送信エラー
 * ・200 / 成功
 */
webApp.post('/api/contact', [
  body('name')
    .trim()
    .isLength({ min: 1, max: 50 })
    .escape()
    .withMessage('名前は1文字以上、50文字以内で入力して下さい。'),
  body('email')
    .trim()
    .isEmail()
    .withMessage('メールアドレスの形式に誤りがあります。'),
  // 送信種類(タイトル)は固定値
  body('summary')
    .custom(value => ['サイトについて', '仕事依頼', 'その他'].includes(value))
    .withMessage('送信種類に不正な値が指定されています。'),
  // 内容は500文字以内
  body('contents')
    .trim()
    .isLength({ min: 1, max: 500 })
    .withMessage('内容は1文字以上、500文字以内で入力して下さい。')
], async (req: Request, res: Response) => {
  // バリデーションチェック
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    // エラー判定された最初の値をレスポンスボディに設定
    // ex. errors = [{ location: 'body', msg: 'Invalid value', param: 'name' }]
    return res.status(400).json({ errors: errors.array() })
  }

  // トランスポートオブジェクトの定義
  const transporter = nodemailer.createTransport({
    host   : 'smtp.gmail.com',
    port   : 465,
    secure : true,
    auth   : {
      user : mail.user,
      pass : mail.pass
    }
  })

  // メール送信
  const { name, email, summary, contents }: Contact = req.body
  await transporter.sendMail({
    from    : email,
    to      : mail.user,
    subject : `【${summary} | ${email}】 ${name}`,
    text    : contents
  }).catch(e => {
    console.error(e)
    res.status(500).json({ errors: ['Server Error'] })
  })
  res.json({ errors: null })
})
