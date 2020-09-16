import React from 'react'

export type Props = {
  items : {
    label    : string
    isActive : boolean
  }[]
}

/**
 * 項目リストをグルーピングして表示するためのコンポーネントを構築
 * @param {String} props.items.label 項目名
 * @param {Boolean} props.items.isActive 活性・非活性フラグ
 */
const GroupBox: React.FC<Props> = ({
  items
}: Props) => {
  const clazz = '.group-box'
  // 各項目名をグルーピングして表示するコンポーネントを構築
  const boxList: JSX.Element[] = items.map((item, i) => {
    const { label, isActive } = item
    // 項目の活性、非活性クラスを構築
    let itemClass = `${clazz}__item_`
    itemClass += isActive ? 'active' : 'inactive'
    return <li key={i} className={itemClass} >{label}</li>
  })
  return <ul className={clazz}>{boxList}</ul>
}

export default GroupBox
