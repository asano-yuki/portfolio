import React from 'react'

export type Props = {
  thText : string
  tdText : string | JSX.Element
  width? : string
}

/**
 * ラベル(th要素)と内容(td要素)を関連付けたテーブル行を構築
 * @param {String} thText ラベル名
 * @param {String} tdText 内容
 */
const RelationTableRow: React.FC<Props> = ({
  thText,
  tdText,
  width = '100%'
}: Props) => {
  const clazz = 'relation-table-row'
  return (
    <tr className={clazz} style={{ width }}>
      <th className={`${clazz}__head`}>{thText}</th>
      <td className={`${clazz}__body`}>{tdText}</td>
    </tr>
  )
}

export default RelationTableRow
