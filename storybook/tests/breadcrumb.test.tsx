import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Breadcrumb, { Props } from '../src/components/breadcrumb/breadcrumb'

describe('breadcrumb.tsx', () => {
  const clazz = 'breadcrumb'

  let hierarchies: Props['hierarchies']
  beforeEach(() => {
    hierarchies = [
      { title: 'Top' },
      { title: 'About'  , path: './path.html' },
      { title: 'Profile', path: './profile.html' }
    ]
  })

  test('タイトルの設定', () => {
    const { container } = render(<Breadcrumb hierarchies={hierarchies} />)
    const items = container.querySelectorAll('span')
    items.forEach((item, i) => expect(item).toHaveTextContent(hierarchies[i].title))
  })

  test('最下層以外の項目には、末尾にアイコン(>)を追加', () => {
    const { container } = render(<Breadcrumb hierarchies={hierarchies} />)
    expect(container.querySelectorAll('svg')).toHaveLength(2)
  })

  describe('pathプロパティを定義された項目には、リンク機能を追加', () => {
    test('Linkコンポーネント', () => {
      const { container } = render(
        <Router>
          <Breadcrumb hierarchies={hierarchies} isRouter={true} />
        </Router>
      )
      expect(container.querySelectorAll('a')).toHaveLength(2)
    })
    test('通常のaタグ', () => {
      const { container } = render(<Breadcrumb hierarchies={hierarchies} isRouter={false} />)
      expect(container.querySelectorAll('a')).toHaveLength(2)
    })
  })

  describe('パンくずリストの表示形式を変更', () => {
    let itemClazz: string
    beforeEach(() => itemClazz = `.${clazz}__item_direction`)

    test('水平方向', () => {
      const { container } = render(<Breadcrumb hierarchies={hierarchies} isHorizon={true} />)
      expect(container.querySelectorAll(`${itemClazz}_horizon`)).toHaveLength(3)
    })
    test('垂直方向', () => {
      const { container } = render(<Breadcrumb hierarchies={hierarchies} isHorizon={false} />)
      expect(container.querySelectorAll(`${itemClazz}_vertical`)).toHaveLength(3)
    })
  })
})
