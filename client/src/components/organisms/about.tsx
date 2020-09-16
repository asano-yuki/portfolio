import React from 'react'
import { faPencilAlt, faToolbox } from '@fortawesome/free-solid-svg-icons'

import LangExplanation from '../atoms/lang-explanation'
import IconTitle from '../atoms/icon-title'
import LangExplanationWithThumbnails from '../molecules/lang-explanation-with-thumbnails'
import scssImg from '../../assets/img/scss.svg'
import reactImg from '../../assets/img/react.svg'
import typescriptImg from '../../assets/img/typescript.svg'
import jestImg from '../../assets/img/jest.svg'
import nodeImg from '../../assets/img/nodejs.svg'
import mongoImg from '../../assets/img/mongodb.svg'

/**
 * 使用スキル・ツールを構築
 */
const About: React.FC = () => {
  // 画像要素、LangExplanationコンポーネントのパラメータ定義
  const params = [
    {
      Image : <img src={scssImg} width='100%' alt='Scssの画像' />,
      title : 'Scss',
      text  : 'BEMの設計手法と組み合わせることで、セレクタやプロパティのネスト記述量を減らし、煩雑になりやすいソースコードの保守性を向上。',
    },
    {
      Image : <img src={reactImg} width='100%' alt='Reactの画像' />,
      title : 'React',
      text  : '関数コンポーネントのHooksAPIを導入。デザインシステムにAtomicDesignを取り入れて、疎結合で再利用性の高いコンポーネントを構築。',
    },
    {
      Image : <img src={typescriptImg} width='70%' alt='TypeScriptの画像' />,
      title : 'TypeScript',
      text  : '型システムを導入して、潜在的なバグの早期発見やアプリケーションの品質を向上。',
    },
    {
      Image : <img src={jestImg} width='70%' alt='Jestの画像' />,
      title : 'Jest',
      text  : 'テストランナー、アサーション、モックやスタブなどの機能をオールインワンで提供されており、使い勝手が良いフレームワークのため採用。',
    },
    {
      Image : <img src={nodeImg} width='100%' alt='Nodeの画像' />,
      title : 'Node',
      text  : 'ExpressによるWebサーバーの構築。プロフィール・スキル情報の取得やメール送信などのAPIを開発。',
    },
    {
      Image : <img src={mongoImg} width='100%' alt='MongoDBの画像' />,
      title : 'MongoDB',
      text  : 'メタデータの保存・管理にMongoDBと互換性のあるNeDBを使用。',
    }
  ]

  // LangExplanationWithThumbnailsの子コンポーネントを構築
  const items = params.map((item, i) => {
    const { Image, title, text } = item
    // LangExplanationコンポーネントのパラメータ
    const langParams = { title, text }
    // LangExplanationコンポーネントのli要素1、2番目以外に区切り線を設定
    const borderTop: string = i > 1 ? '1px solid #e0e0e0' : 'none'
    return {
      Image,
      LangExplanation : <LangExplanation {...langParams} />,
      style           : { padding: '40px 0', borderTop }
    }
  })

  // IconTitleコンポーネントのパラメータ
  const iconTitleParams = [
    {
      title : 'はじめに',
      icon  : faPencilAlt
    },
    {
      title : '当サイトで使用したスキル・ツール一覧',
      icon  : faToolbox
    },
  ]

  const clazz = 'about'
  return (
    <div className={clazz}>
      <section className={`${clazz}__intro`}>
        <IconTitle {...iconTitleParams[0]} />
        <p className={`${clazz}__overview`}>
          自身のスキル証明や、フロントエンドエンジニアとして新しい活躍の場を広げるために、「スキル管理システム」というWebアプリケーションを想定して、当ポートフォリオサイトを構築しました。
        </p>
      </section>
      <section className={`${clazz}__site`}>
        <IconTitle {...iconTitleParams[1]} />
        <LangExplanationWithThumbnails items={items} />
      </section>
    </div>
  )
}

export default About
