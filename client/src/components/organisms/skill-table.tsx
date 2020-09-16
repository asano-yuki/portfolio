import React, { useContext } from 'react'
import { _ } from 'gridjs-react'
import 'gridjs/dist/theme/mermaid.min.css'

import { Contexts } from '../../modules/contexts'
import ProgressBar from '../atoms/progress-bar'
import StatusRadio from '../atoms/status-radio'
import ExtendGrid from '../atoms/extend-grid'
import { makeExperienceYear } from '../../custom/use-make-experience-year'

/**
 * スキル一覧テーブル
 */
const SkillTable: React.FC = () => {
  const data  = useContext(Contexts)
  if (!data?.skill) return <></>

  const skill = data.skill.map(item => {
    const { name, category, subCategory, years, status } = item
    // 実務経験年数の合計値を算出
    const year = makeExperienceYear(years)
    // 1レコードに表示する各セル項目を構築
    return [
      name,
      category,
      subCategory,
      _(<ProgressBar  {...{
        max           : 4,
        val           : year,
        correctionVal : 0.1,
        labels        : ['', '1年', '2年', '3年', '']
      }} />),
      _(<StatusRadio {...status} />)
    ]
  })

  return (
    <ExtendGrid
      isFixedHeader={true}
      height='800px'
      data={skill}
      columns={[
        'スキル名',
        'カテゴリー',
        'サブカテゴリー',
        {
          name : '実務経験年数',
          sort : {
            compare : (a: JSX.Element, b: JSX.Element) => {
              const aVal = a.props.element.props.val
              const bVal = b.props.element.props.val
              if (aVal > bVal) return 1
              else if (aVal < bVal) return -1
              else 0
            }
          }
        },
        {
          name : '稼働ステータス',
          sort : {
            enabled : false
          }
        }
      ]}
    />
  )
}

export default SkillTable
