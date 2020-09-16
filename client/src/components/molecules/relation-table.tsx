import React from 'react'

export type Props = {
  children : React.ReactChild[]
}

/**
 * ラベルと内容を関連付けたテーブルを構築
 * @param {Array} rows relation-table-rowコンポーネントの配列
 */
const RelationTable: React.FC<Props> = ({
  children
}: Props) => {
  const clazz = 'relation-table'
  return (
    <table className={`${clazz}`}>
      <tbody className={`${clazz}__tbody`}>
        {children}
      </tbody>
    </table>
  )
}

export default RelationTable
