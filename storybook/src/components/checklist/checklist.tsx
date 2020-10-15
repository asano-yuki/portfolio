import React from 'react'

import CheckItem, { Props as CheckItemProps } from '../checkitem/checkitem'
import './checklist.scss'

export type Props = {
  items  : {
    label      : string
    isChecked? : boolean
  }[]
  column     : number,
  iconColor  : CheckItemProps['iconColor'],
  labelColor : CheckItemProps['labelColor']
}

/**
 * レスポンシブ対応のチェックリスト
 * @param items.label 項目名
 * @param items.isChecked 活性・非活性フラグ
 * @param column 1行に表示するカラム数
 * @param iconColor 各アイコンの色
 * @param labelColor 各ラベルの色
 */
const CheckList: React.FC<Props> = ({
  items,
  column = 1,
  iconColor,
  labelColor
}: Props) => {
  // 1行に表示するカラム数(幅)を算出
  const width = (100 / column) + '%'
  // 各項目を構築
  const _items = items.map((item, i) => {
    const { label, isChecked } = item
    return (
      <li key={i} style={{ width }}>
        <CheckItem
          key={i}
          label={label}
          isChecked={isChecked}
          iconColor={iconColor || null}
          labelColor={labelColor || null}
        />
      </li>
    )
  })
  return <ul className='checklist'>{_items}</ul>
}

export default CheckList
