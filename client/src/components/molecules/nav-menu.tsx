import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

import IconTitle from '../atoms/icon-title'

export type Props = {
  items : {
    path     : string
    iconName : IconDefinition
    title    : string
  }[],
  isColumn? : boolean
}

/**
 * ナビゲーションメニューを構築
 * @param items メニューリスト項目
 * @param style スタイル属性
 */
const NavMenu: React.FC<Props> = ({
  items,
  isColumn = false
}: Props) => {
  const clazz = 'nav-menu'
  // ルートパスを取得
  // ex. path.split('/') = ['', ルートパス]
  const rootPath = `/${location.pathname.split('/')[1]}`
  // 活性化中のナビメニュー項目を管理
  const [activePath, setActivePath] = useState(rootPath)
  // 各メニュー項目を構築
  const _items = items.map((item, i) => {
    const { path, iconName, title } = item
    const linkClass = (path === activePath) ? `${clazz}__link_state_on` : ''
    return (
      <li key={i} className={`${clazz}__item`}>
        <Link to={path} className={`${clazz}__link ${linkClass}`} onClick={() => setActivePath(path)}>
          <IconTitle {...item} title={title} icon={iconName} isColumn={isColumn} />
        </Link>
      </li>
    )
  })
  const navClass = isColumn ? `${clazz}_state_column` : ''
  return <ul className={`${clazz} ${navClass}`}>{_items}</ul>
}

export default NavMenu
