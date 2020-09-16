import React from 'react'
import { Grid } from 'gridjs-react'
import 'gridjs/dist/theme/mermaid.min.css'

export type Props = {
  data           : (string | JSX.Element)[][]
  columns        : any[]
  isFixedHeader? : boolean
  height?        : string
}

/**
 * Grid.jsを拡張したコンポーネント
 * @param {Array} data Grid.jsのdataプロパティの値
 * @param {Array} columns Grid.jsのcolumnsプロパティの値
 * @param {Boolean} isFixedHeader Grid.jsのheader固定フラグ
 * @param {String} height Grid.jsの高さ
 */
const ExtendGrid: React.FC<Props> = ({
  data,
  columns,
  isFixedHeader = false,
  height
}: Props) => {
  const clazz = 'extend-table'
  return (
    <Grid
      data={data}
      language={{
        search : {
          placeholder : '検索 ...',
        }
      }}
      sort={true}
      fixedHeader={isFixedHeader}
      height={height}
      search={{
        enabled: true
      }}
      columns={columns}
      className={{
        container : `${clazz}__container`,
        header    : `${clazz}__header`,
        table     : `${clazz}__table`,
        th        : `${clazz}__th`,
        td        : `${clazz}__td`
      }}
    />
  )
}

export default ExtendGrid
