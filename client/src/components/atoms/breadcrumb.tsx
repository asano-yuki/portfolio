import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

export type Props = {
  hierarchies : {
    title : string
    path? : string
  }[]
}

/**
 * パンくずリストを構築
 * pathプロパティが指定   → リンクテキスト表示
 * pathプロパティが未指定 → テキスト表示
 * ex. Top > About > Profile > ...
 * @param {Array} props.hierarchies 各階層の名前とパスを保持するリスト
 */
const Breadcrumb: React.FC<Props> = ({
  hierarchies
}: Props) => {
  const clazz = 'breadcrumb'
  // リストの各項目を構築
  const items: JSX.Element[] = hierarchies.map((hierarchy, i) => {
    const { title = '', path } = hierarchy
    let icon: JSX.Element | null = null
    // 先頭要素以外にはアイコン(>)を追加
    if (i !== 0) icon = <Icon icon={faAngleRight} className={`${clazz}__icon`} />
    let item: JSX.Element = <span>{title}</span>
    if (path) item = <Link to={path} className={`${clazz}__link`}>{item}</Link>
    return (
      <li key={i} className={`${clazz}__item`} data-testid='item'>
        {icon}
        {item}
      </li>
    )
  })
  return <ul className={clazz}>{items}</ul>
}

export default Breadcrumb
