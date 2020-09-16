import React from 'react'
import { Route } from 'react-router-dom'

import ArrowButton from '../molecules/arrow-button'
import NavMenu from '../molecules/nav-menu'
import useNavMenu from '../../custom/use-nav-menu'

type Props = {
  openState    : boolean
  setOpenState : React.Dispatch<React.SetStateAction<boolean>>,
  isColumn?    : boolean
}

/**
 * ヘッダー部分を構築
 * ・ナビゲーションメニューの追加
 * ・ナビゲーションメニュ－の開閉機能 ※PCサイズのみ
 * @param {Boolean} openState 開閉フラグ値
 * @param {Function} setOpenState openstateを更新する関数
 * @param {Boolean} isColumn ナビゲーションメニュ－の各項目を垂直方向にレイアウトするフラグ値
 */
const Header: React.FC<Props> = ({
  openState,
  setOpenState,
  isColumn = false
}: Props) => {
  // icon-menuコンポーネントに渡すパラメータ
  let { navInfos } = useNavMenu()
  // ヘッダーがクローズ状態であれば、titleを非表示
  if (!openState) {
    navInfos = navInfos.map(item => Object.assign(item, { title: '' }))
  }

  const clazz     = 'header'
  const openClass = openState ? `${clazz}_state_open` : `${clazz}_state_close`
  return (
    <header className={`${clazz} ${openClass}`}>
      <div className={`${clazz}__arrow-button`}>
        <ArrowButton color='#fff' clickHandler={() => setOpenState(!openState)} />
      </div>
      <Route>
        <NavMenu items={navInfos} isColumn={isColumn} />
      </Route>
    </header>
  )
}

export default Header
