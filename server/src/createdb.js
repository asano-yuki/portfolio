const path      = require('path')
const fs        = require('fs')
const DataSrore = require('nedb')

// 新規DBの作成
const insertData = (name, data) => {
  const filename = path.join(__dirname, '../public', 'data', name)
  const isExists = fs.existsSync(filename)
  if (isExists) fs.unlinkSync(filename)
  const db = new DataSrore({ filename, autoload: true })
  db.insert(data, (err) => {
    if (err) console.error(err)
    console.log(`create ${filename}`)
  })
}

// プロフィール情報を定義
const profile = [
  {
    _id         : 1,
    name        : 'Y.A',
    sex         : '男性',
    birthday    : new Date(1990, 5, 23),
    address     : '大阪府',
    educational : '私立大学 文系 卒業',
    job         : 'フロンエンドエンジニア',
    experience  : [
      {
        name  : 'フロンエンドエンジニア',
        start : new Date(2019, 4, 1),
        end   : null
      },
      {
        name  : 'Webエンジニア',
        start : new Date(2017, 8, 1),
        end   : new Date(2019, 3, 31)
      },
      {
        name  : 'グラフィックデザイナー(illustrator)',
        start : new Date(2015, 9, 1),
        end   : new Date(2017, 7, 31)
      }
    ],
    capacity : [
      '基本情報技術者',
      '応用情報技術者',
      'Java Silver SE8',
      'ORACRE MASTER Bronze 12C',
      'Cisco CECENT',
      'Webクリエイター能力認定試験'
    ],
    specialtyField : [
      'フロントエンド全般',
      'UI・UXデザイン'
    ],
    specialtyTechnology : [
      'HTML',
      'CSS',
      'JavaScript',
      'Typescript',
      'React'
    ],
    specialtyWork : [
      'Webアプリケーションの設計、構築'
    ],
    pr : '要件定義から設計、実装、試験までの工程を全て経験しております。\nフロントエンド技術を中心とした情報取集、ReactやNode.jsといった注目技術の習得など、日々の努力は決して惜しみません。\n今後はReactを使った開発案件に携わり、フロントエンドエンジニアとしての価値を高めていきたいと考えております。'
  }
]
// スキルを定義
let skillId = 1
const skill = [
  {
    _id         : skillId++,
    name        : 'HTML',
    category    : 'フロントエンド',
    subCategory : '',
    years       : [
      { start : new Date(2017, 8, 1), end : new Date(2019, 3, 31) },
      { start : new Date(2019, 4, 1), end : null }
    ],
    status : {
      practice : true,
      use      : true,
      unused   : false
    }
  },
  {
    _id         : skillId++,
    name        : 'CSS',
    category    : 'フロントエンド',
    subCategory : '',
    years       : [
      { start : new Date(2017, 8, 1), end : new Date(2019, 3, 31) },
      { start : new Date(2019, 4, 1), end : null }
    ],
    status : {
      practice : true,
      use      : true,
      unused   : false
    }
  },
  {
    _id         : skillId++,
    name        : 'JavaScript',
    category    : 'フロントエンド',
    subCategory : '',
    years       : [
      { start : new Date(2017, 8, 1), end : new Date(2019, 3, 31) },
      { start : new Date(2019, 4, 1), end : null }
    ],
    status : {
      practice : true,
      use      : true,
      unused   : false
    }
  },
  {
    _id         : skillId++,
    name        : 'Pug',
    category    : 'フロントエンド',
    subCategory : 'ライブラリ',
    years       : [
      { start : new Date(2020, 4, 1), end : null }
    ],
    status : {
      practice : true,
      use      : true,
      unused   : false
    }
  },
  {
    _id         : skillId++,
    name        : 'EJS',
    category    : 'フロントエンド',
    subCategory : 'ライブラリ',
    years       : [
      { start : new Date(2020, 4, 1), end : null }
    ],
    status : {
      practice : false,
      use      : true,
      unused   : false
    }
  },
  {
    _id         : skillId++,
    name        : 'SCSS',
    category    : 'フロントエンド',
    subCategory : 'ライブラリ',
    years       : [
      { start : new Date(2020, 4, 1), end : null }
    ],
    status : {
      practice : false,
      use      : true,
      unused   : false
    }
  },
  {
    _id         : skillId++,
    name        : 'Bootstrap',
    category    : 'フロントエンド',
    subCategory : 'ライブラリ',
    years       : [
      { start : new Date(2017, 8, 1), end : new Date(2019, 3, 31) },
    ],
    status : {
      practice : true,
      use      : false,
      unused   : true
    }
  },
  {
    _id         : skillId++,
    name        : 'Material-UI',
    category    : 'フロントエンド',
    subCategory : 'ライブラリ',
    years       : [
      { start : null, end : null },
    ],
    status : {
      practice : false,
      use      : true,
      unused   : false
    }
  },
  {
    _id         : skillId++,
    name        : 'jQuery',
    category    : 'フロントエンド',
    subCategory : 'ライブラリ',
    years       : [
      { start : new Date(2017, 8, 1), end : new Date(2019, 3, 31) },
      { start : new Date(2019, 4, 1), end : null }
    ],
    status : {
      practice : true,
      use      : true,
      unused   : false
    }
  },
  {
    _id         : skillId++,
    name        : 'React',
    category    : 'フロントエンド',
    subCategory : 'ライブラリ',
    years       : [
      { start : new Date(2020, 4, 1), end : new Date(2020, 6, 30) },
      { start : new Date(2020, 9, 1), end : new Date(2020, 9, 7) }
    ],
    status : {
      practice : false,
      use      : true,
      unused   : false
    }
  },
  {
    _id         : skillId++,
    name        : 'Redux',
    category    : 'フロントエンド',
    subCategory : 'ライブラリ',
    years       : [
      { start : null, end : null }
    ],
    status : {
      practice : false,
      use      : true,
      unused   : false
    }
  },
  {
    _id         : skillId++,
    name        : 'TypeScript',
    category    : 'フロントエンド',
    subCategory : 'ライブラリ',
    years       : [
      { start : new Date(2020, 9, 1), end : new Date(2020, 9, 7) }
    ],
    status : {
      practice : false,
      use      : true,
      unused   : false
    }
  },
  {
    _id         : skillId++,
    name        : 'Raphael',
    category    : 'フロントエンド',
    subCategory : 'ライブラリ',
    years       : [
      { start : new Date(2019, 4, 1), end : null }
    ],
    status : {
      practice : true,
      use      : false,
      unused   : true
    }
  },
  {
    _id         : skillId++,
    name        : 'Snap',
    category    : 'フロントエンド',
    subCategory : 'ライブラリ',
    years       : [
      { start : null, end : null }
    ],
    status : {
      practice : false,
      use      : true,
      unused   : false
    }
  },
  {
    _id         : skillId++,
    name        : 'styled-components',
    category    : 'フロントエンド',
    subCategory : 'ライブラリ',
    years       : [
      { start : null, end : null }
    ],
    status : {
      practice : false,
      use      : true,
      unused   : false
    }
  },
  {
    _id         : skillId++,
    name        : 'jest',
    category    : 'フロントエンド',
    subCategory : 'ライブラリ',
    years       : [
      { start : new Date(2020, 4, 1), end : null }
    ],
    status : {
      practice : true,
      use      : true,
      unused   : false
    }
  },
  {
    _id         : skillId++,
    name        : 'Testing Library',
    category    : 'フロントエンド',
    subCategory : 'ライブラリ',
    years       : [
      { start : null, end : null }
    ],
    status : {
      practice : false,
      use      : true,
      unused   : false
    }
  },
  {
    _id         : skillId++,
    name        : 'Mocha',
    category    : 'フロントエンド',
    subCategory : 'ライブラリ',
    years       : [
      { start : new Date(2020, 4, 1), end : null }
    ],
    status : {
      practice : false,
      use      : true,
      unused   : false
    }
  },
  {
    _id         : skillId++,
    name        : 'Sinon',
    category    : 'フロントエンド',
    subCategory : 'ライブラリ',
    years       : [
      { start : null, end : null }
    ],
    status : {
      practice : false,
      use      : true,
      unused   : false
    }
  },
  {
    _id         : skillId++,
    name        : 'Storybook',
    category    : 'フロントエンド',
    subCategory : 'ライブラリ',
    years       : [
      { start : null, end : null }
    ],
    status : {
      practice : false,
      use      : true,
      unused   : false
    }
  },
  {
    _id         : skillId++,
    name        : 'Webpack',
    category    : 'フロントエンド',
    subCategory : 'ライブラリ',
    years       : [
      { start : new Date(2020, 4, 1), end : null },
      { start : new Date(2020, 9, 1), end : new Date(2020, 9, 7) }
    ],
    status : {
      practice : true,
      use      : true,
      unused   : false
    }
  },
  {
    _id         : skillId++,
    name        : 'BEM',
    category    : 'フロントエンド',
    subCategory : '設計',
    years       : [
      { start : new Date(2020, 4, 1), end : null }
    ],
    status : {
      practice : true,
      use      : true,
      unused   : false
    }
  },
  {
    _id         : skillId++,
    name        : 'Flow',
    category    : 'フロントエンド',
    subCategory : '設計',
    years       : [
      { start : null, end : null }
    ],
    status : {
      practice : false,
      use      : true,
      unused   : false
    }
  },
  {
    _id         : skillId++,
    name        : 'AtomicDesign',
    category    : 'フロントエンド',
    subCategory : '設計',
    years       : [
      { start : null, end : null }
    ],
    status : {
      practice : false,
      use      : true,
      unused   : false
    }
  },
  {
    _id         : skillId++,
    name        : 'Node.js',
    category    : 'バックエンド',
    subCategory : '',
    years       : [
      { start : new Date(2020, 4, 1), end : null }
    ],
    status : {
      practice : true,
      use      : true,
      unused   : false
    }
  },
  {
    _id         : skillId++,
    name        : 'Express',
    category    : 'バックエンド',
    subCategory : 'フレームワーク',
    years       : [
      { start : new Date(2020, 4, 1), end : null }
    ],
    status : {
      practice : false,
      use      : true,
      unused   : false
    }
  },
  {
    _id         : skillId++,
    name        : 'Electron',
    category    : 'バックエンド',
    subCategory : 'フレームワーク',
    years       : [
      { start : new Date(2020, 4, 1), end : null }
    ],
    status : {
      practice : true,
      use      : false,
      unused   : true
    }
  },
  {
    _id         : skillId++,
    name        : 'PHP',
    category    : 'バックエンド',
    subCategory : '',
    years       : [
      { start : null, end : null }
    ],
    status : {
      practice : false,
      use      : false,
      unused   : true
    }
  },
  {
    _id         : skillId++,
    name        : 'VB.NET',
    category    : 'バックエンド',
    subCategory : '',
    years       : [
      { start : new Date(2017, 8, 1), end : new Date(2019, 3, 31) },
    ],
    status : {
      practice : true,
      use      : false,
      unused   : true
    }
  },
  {
    _id         : skillId++,
    name        : 'C#',
    category    : 'バックエンド',
    subCategory : '',
    years       : [
      { start : new Date(2017, 8, 1), end : new Date(2019, 3, 31) },
    ],
    status : {
      practice : true,
      use      : false,
      unused   : true
    }
  },
  {
    _id         : skillId++,
    name        : 'ASP.NET',
    category    : 'バックエンド',
    subCategory : 'フレームワーク',
    years       : [
      { start : new Date(2017, 8, 1), end : new Date(2019, 3, 31) },
    ],
    status : {
      practice : true,
      use      : false,
      unused   : true
    }
  },
  {
    _id         : skillId++,
    name        : 'java',
    category    : 'バックエンド',
    subCategory : 'ライブラリ',
    years       : [
      { start : new Date(2019, 4, 1), end : null },
    ],
    status : {
      practice : true,
      use      : true,
      unused   : false
    }
  },
  {
    _id         : skillId++,
    name        : 'Maven',
    category    : 'バックエンド',
    subCategory : 'ライブラリ',
    years       : [
      { start : new Date(2019, 4, 1), end : null },
    ],
    status : {
      practice : true,
      use      : false,
      unused   : false
    }
  },
  {
    _id         : skillId++,
    name        : 'SQLServer',
    category    : 'データベース',
    subCategory : '',
    years       : [
      { start : new Date(2017, 8, 1), end : new Date(2019, 3, 31) },
    ],
    status : {
      practice : true,
      use      : false,
      unused   : true
    }
  },
  {
    _id         : skillId++,
    name        : 'MySQL',
    category    : 'データベース',
    subCategory : '',
    years       : [
      { start : new Date(2017, 8, 1), end : new Date(2019, 3, 31) },
    ],
    status : {
      practice : true,
      use      : false,
      unused   : true
    }
  },
  {
    _id         : skillId++,
    name        : 'MongoDB',
    category    : 'データベース',
    subCategory : '',
    years       : [
      { start : null, end : null },
    ],
    status : {
      practice : false,
      use      : true,
      unused   : false
    }
  },
  {
    _id         : skillId++,
    name        : 'Atom',
    category    : 'ツール',
    subCategory : '',
    years       : [
      { start : null, end : null },
    ],
    status : {
      practice : false,
      use      : false,
      unused   : true
    }
  },
  {
    _id         : skillId++,
    name        : 'Visual Studio',
    category    : 'ツール',
    subCategory : '',
    years       : [
      { start : new Date(2017, 8, 1), end : new Date(2019, 3, 31) },
    ],
    status : {
      practice : true,
      use      : false,
      unused   : true
    }
  },
  {
    _id         : skillId++,
    name        : 'Visual Studio Code',
    category    : 'ツール',
    subCategory : '',
    years       : [
      { start : new Date(2019, 4, 1), end : null },
    ],
    status : {
      practice : true,
      use      : true,
      unused   : false
    }
  },
  {
    _id         : skillId++,
    name        : 'Redmine',
    category    : 'ツール',
    subCategory : '',
    years       : [
      { start : new Date(2017, 8, 1), end : new Date(2019, 3, 31) },
    ],
    status : {
      practice : true,
      use      : false,
      unused   : true
    }
  },
  {
    _id         : skillId++,
    name        : 'Backlog',
    category    : 'ツール',
    subCategory : '',
    years       : [
      { start : new Date(2019, 4, 1), end : null },
    ],
    status : {
      practice : true,
      use      : false,
      unused   : true
    }
  },
  {
    _id         : skillId++,
    name        : 'Git',
    category    : 'ツール',
    subCategory : '',
    years       : [
      { start : new Date(2020, 9, 1), end : new Date(2020, 9, 7) }
    ],
    status : {
      practice : false,
      use      : true,
      unused   : false
    }
  },
  {
    _id         : skillId++,
    name        : 'Subversion',
    category    : 'ツール',
    subCategory : '',
    years       : [
      { start : new Date(2017, 8, 1), end : new Date(2019, 3, 31) },
      { start : new Date(2019, 4, 1), end : null }
    ],
    status : {
      practice : true,
      use      : false,
      unused   : true
    }
  },
]
// 実務経験を定義
let experienceId = 1
const experience = [
  {
    _id : experienceId++,
    startDate : new Date(2015, 9, 1),
    endDate   : new Date(2017, 7, 31),
    title     : '広告代理店でDTPオペレーター',
    content   : [
      'illustrator(CS6)を使った求人広告の制作',
      '近接、整列、反復、コントラストを意識したデザインを構築',
      '社内ツールアプリの更新作業'
    ],
    scale    : '35(内制作メンバー20名)',
    contract : '派遣社員',
    style    : '-',
    role     : '制作メンバー',
    keySkill : 'illustrator',
    language : [
      'HTML',
      'CSS',
      'JavaScript(ES5)'
    ],
    db : [],
    os : [
      'Windows10'
    ],
    mw : [
      'Apache'
    ],
    fw   : [],
    tool : [
      'illustrator(CS6)'
    ],
    charge : []
  },
  {
    _id       : experienceId++,
    startDate : new Date(2017, 9, 1),
    endDate   : new Date(2019, 3, 1),
    title     : '官公庁でWebシステムの開発・保守・運用',
    content   : [
      'インシデントWeb管理ステムの新規開発',
      'アクティビティ図の作成による業務分析',
      '基本設計書の作成',
      'テーブル定義書、画面設計書の作成による外部設計',
      'インシデント検索・入力画面、ユーザ管理(DB)、帳票出力(PDF)などの各種機能を実装',
      'ExcelデータをDBにインポートするためのコンソールアプリケーションの開発'
    ],
    scale    : '2名(内開発メンバー2名)',
    contract : '正社員',
    style    : '客先常駐',
    role     : '開発メンバー',
    keySkill : 'ASP.NET',
    language : [
      'HTML',
      'CSS',
      'Bootstrap 3.4.1',
      'JavaScript(ES5)',
      'jQuery(2.2.4)',
      'VB.NET',
      'C#',
      'SQL'
    ],
    db : [
      'SQLServer 2012',
      'MySQL 5.6'
    ],
    os : [
      'Windows10'
    ],
    mw : [
      'Windows Server 2012 R2',
      'IIS'
    ],
    fw : [
      'ASP.NET Webフォーム 4.5'
    ],
    tool : [
      'Visual Studio 2015',
      'Subversion',
      'Redmine'
    ],
    charge : [
      '要件定義',
      '基本設計',
      '実装',
      '単体テスト',
      '結合テスト',
      '総合テスト'
    ]
  },
  {
    _id       : experienceId++,
    startDate : new Date(2019, 4, 1),
    endDate   : null,
    title     : '電子部品会社でWebアプリケーションの開発・保守・運用',
    content   : [
      'UIデザインも含めたフロントエンドを担当',
      '電子部品の性能をシミュレーションするための新規アプリケーションの開発',
      '既存アプリケーションの改修・機能追加',
      'フロントエンド開発環境の構築にWebpackを導入',
      'JavaScript、jQueryによる複雑な非同期処理の実装',
      'XYグラフ、スミスチャートをSVGで描画',
      'プロトタイプの作成など、提案型の開発スタイル(アジャイル)'
    ],
    scale    : '7名(内開発メンバー3名)',
    contract : '正社員',
    style    : '客先常駐',
    role     : '開発メンバー',
    keySkill : 'JavaScript',
    language : [
      'HTML',
      'CSS',
      'Pug',
      'Ejs',
      'JavaScript(ES2015以降)',
      'jQuery(3.1.0)',
      'Java 11'
    ],
    db : [],
    os : [
      'Windows10'
    ],
    mw : [
      'Windows Server 2012 R2',
      'Node.js 12.18.0(LTS)',
      'Tomcat 8.5'
    ],
    fw   : [],
    tool : [
      'Visual Studio Code 2017',
      'Webpack 4',
      'Babel 7',
      'Jest',
      'Mocha',
      'Maven 3.6',
      'Subversion',
      'Backlog'
    ],
    charge : [
      '基本設計',
      '実装',
      '単体テスト',
      '結合テスト',
      '総合テスト',
      '保守・運用'
    ]
  },
  {
    _id       : experienceId++,
    startDate : new Date(2020, 9, 6),
    endDate   : new Date(2020, 9, 12),
    title     : 'express + react.jsの開発環境構築',
    content   : [
      'Webpackをフルスクラッチで導入',
      'TypeScriptの導入',
      'フロントエンド、サーバーサイドの開発環境を構築'
    ],
    scale    : '1名',
    contract : '-',
    style    : '単発 / リモート',
    role     : '開発メンバー',
    keySkill : 'Webpack',
    language : [
      'HTML',
      'JavaScript(ES2015以降)',
      'TypeScript'
    ],
    db : [],
    os : [
      'Windows10'
    ],
    mw : [
      'Node.js 12.18.0(LTS)'
    ],
    fw : [
      'React',
      'Express'
    ],
    tool : [
      'Visual Studio Code',
      'Webpack',
      'GitHub'
    ],
    charge : [
      '開発環境構築'
    ]
  }
]

insertData('profile.db', profile)
insertData('skill.db', skill)
insertData('experience.db', experience)

