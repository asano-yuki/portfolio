import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

export type Props = {
  isRouter?   : boolean
  isHorizon?  : boolean
  hierarchies : {
    title : string
    path? : string
  }[],
  linkColor? : string
}

/**
 * パンくずリストを構築
 * pathプロパティが指定   → リンクテキスト表示
 * pathプロパティが未指定 → テキスト表示
 * ex. Top > About > Profile > ...
 * @param {Boolean} isRouter react-router-domモジュールの使用有無
 * @param {Boolean} isHorizon パンくずリストを水平方向に表示するためのフラグ値
 * @param {Array} hierarchies 各階層の名前とパスを保持するリスト
 * @param {String} linkColor リンクテキストの文字色
 */
const Breadcrumb: React.FC<Props> = ({
  isRouter = false,
  isHorizon = true,
  hierarchies,
  linkColor
}: Props) => {
  const clazz = 'breadcrumb'
  // リンク要素で加工するための関数を取得
  const makeLinkFunc = isRouter ? makeRouterLink : makeAnkerLink
  // パンくずリストの表示形式を水平、垂直方向のいずれかに決定する値
  const direction = isHorizon ? 'horizon' : 'vertical'
  // リストの各項目を構築
  const len = hierarchies.length - 1
  const items: JSX.Element[] = hierarchies.map((hierarchy, i) => {
    const { title = '', path } = hierarchy
    let icon: JSX.Element | null = null
    // 末尾要素以外にはアイコン(>)を追加
    if (i !== len) icon = <Icon icon={faAngleRight} className={`${clazz}__icon`} />
    // pathプロパティが存在すれば、リンク機能を追加
    let item: JSX.Element
    if (path) item = makeLinkFunc({ path, title, linkColor })
    else item = <span>{title}</span>
    return (
      <li key={i} className={`${clazz}__item ${clazz}__item_direction_${direction}`} data-testid='item'>
        {item}
        {icon}
      </li>
    )
  })
  return <ul className={`${clazz} ${clazz}_direction_${direction}`}>{items}</ul>
}

export default Breadcrumb

// リンク要素を生成する関数の型宣言
type MakeLinkType = {
  path       : string
  title      : string
  linkColor? : string
}

// react-router-domモジュールを使用したリンク要素で加工
function makeRouterLink ({
  path,
  title,
  linkColor = '#8197e0'
}: MakeLinkType): JSX.Element {
  return <Link to={path} style={{ color: linkColor }}>{title}</Link>
}

// 通常のaタグ要素で加工
function makeAnkerLink ({
  path,
  title,
  linkColor = '#8197e0'
}: MakeLinkType): JSX.Element {
  return <a href={path} style={{ color: linkColor }}>{title}</a>
}
