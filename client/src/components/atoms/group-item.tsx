import React from 'react'

export type Props = {
  item       : string | React.ReactNode
  width?     : string | number
  className? : string
}

/**
 * GroupListコンポーネントの各項目(スマホ対応)
 * @param {Mix} item ラベル名、Jsx要素
 * @param {Mix} width 表示幅
 * @param {String} className クラス名
 */
const GroupItem: React.FC<Props> = ({
  item,
  width = '100%',
}: Props) => {
  return <li className='group-item' style={{ width }}>{item}</li>
}

export default GroupItem
