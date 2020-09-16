import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Breadcrumb, { Props as BreadcrumbProps } from '../src/components/atoms/breadcrumb'
import DownLoadButton, { Props as DownLoadButtonProps } from '../src/components/atoms/download-button'
import GroupBox, { Props as GroupBoxProps } from '../src/components/atoms/group-box'
import Legend, { Props as LegendProps } from '../src/components/atoms/legend'
import ProfileSummary, { Props as ProfileSummaryProps } from '../src/components/atoms/profile-summary'
import ProgressBar, { Props as ProgressBarProps } from '../src/components/atoms/progress-bar'

// パンくずリスト
describe('breadcrumb.tsx', () => {
  it('タイトルの設定', () => {
    const list: BreadcrumbProps['hierarchies'] = [{ title: 'Top' }]
    const { container } = render(<Breadcrumb hierarchies={list} />)
    expect(container.querySelector('span')).toHaveTextContent(list[0].title)
  })
  it('2階層以下の項目には、先頭にアイコン(>)を追加', () => {
    const list = [
      { title: 'Top' },
      { title: 'About' },
      { title: 'Profile' }
    ]
    const { container } = render(<Breadcrumb hierarchies={list} />)
    expect(container.querySelectorAll('svg')).toHaveLength(2)
  })
  it('pathプロパティを定義された項目には、ハイパーリンクでラップする', () => {
    const list = [
      { title: 'Top' },
      { title: 'About'  , path: './about.html' },
      { title: 'Profile', path: './profile.html' }
    ]
    const { container } = render(
      <Router>
        <Breadcrumb hierarchies={list} />
      </Router>
    )
    expect(container.querySelectorAll('a')).toHaveLength(2)
  })
})

// ダウンロードボタンを構築
describe('download-button.tsx', () => {
  const props: DownLoadButtonProps = {
    fileName : 'sample',
    type     : 'pdf',
    resource : './sample.pdf'
  }
  it('PDFアイコンを表示', () => {
    const { container } = render(<DownLoadButton {...props} />)
    expect(container.querySelectorAll('svg')).toHaveLength(1)
  })
})

// 項目リストをグルーピングして表示するためのコンポーネントを構築
describe('group-box.tsx', () => {
  const items: GroupBoxProps['items'] = [
    { label: 'Item1', isActive: true },
    { label: 'Item2', isActive: false },
    { label: 'Item3', isActive: false }
  ]
  it('コンポーネントを構築', () => {
    const { container } = render(<GroupBox items={items} />)
    const list = container.querySelectorAll('li')
    expect(list[0]).toHaveTextContent(items[0].label)
    expect(list[1]).toHaveTextContent(items[1].label)
    expect(list[2]).toHaveTextContent(items[2].label)
  })
})

// グラフ・チャートの凡例を構築
describe('legend.tsx', () => {
  const props: LegendProps = {
    items : [
      {
        label : 'Graph1',
        text  : 'Graph1の概要',
        color : 'red'
      },
      {
        label : 'Graph2',
        text  : 'Graph2の概要',
        color : 'blue'
      },
      {
        label : 'Graph3',
        text  : 'Graph3の概要',
        color : 'green'
      }
    ]
  }
  it('各判例に対応カラーを指定', () => {
    const { container } = render(<Legend {...props} />)
    const items = container.querySelectorAll('li')
    expect(items[0].children.item(0)).toHaveStyle('background-color: red')
    expect(items[1].children.item(0)).toHaveStyle('background-color: blue')
    expect(items[2].children.item(0)).toHaveStyle('background-color: green')
  })
})

// プロフィールの簡易情報を構築
describe('profile-summary.tsx', () => {
  it('textsは最大3要素まで表示', () => {
    const props: ProfileSummaryProps = {
      texts : ['Taro', 'Man', '20', 'Taro', 'Man', '20'],
    }
    const { container } = render(<ProfileSummary {...props} />)
    expect(container.querySelectorAll('li')).toHaveLength(3)
  })
})

// 進捗度等を表すプログレスバーを構築
describe('progress-bar.tsx', () => {
  it('labels引数に指定した数だけラベルを配置', () => {
    const props: ProgressBarProps = {
      val    : 50,
      labels : ['0点', '50点', '100点']
    }
    const { container } = render(<ProgressBar {...props} />)
    expect(container.querySelectorAll('.progress-bar__label')).toHaveLength(3)
  })
})
