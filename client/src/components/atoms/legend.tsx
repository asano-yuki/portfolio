import React from 'react'

export type Props = {
  items : {
    label : string
    text  : string
    color : string
  }[]
}

/**
 * グラフ・チャートの凡例を構築
 * @param {Array} items ラベル、テキスト、対応カラーを格納した配列
 */
const Legend: React.FC<Props> = ({
  items
}: Props) => {
  const clazz = 'legend'
  // 各ラベル、背景色、テキストの表示順は配列で確保
  const _items: JSX.Element[] = items.map((item, i) => {
    const { label, text, color } = item
    return (
      <li key={i} className={`${clazz}__item`}>
        <div className={`${clazz}__color`} style={{ backgroundColor: color }}></div>
        <span className={`${clazz}__title`}>{label}</span>
        <span className={`${clazz}__text`}>{text}</span>
      </li>
    )
  })
  return <ul className={clazz}>{_items}</ul>
}

export default Legend
