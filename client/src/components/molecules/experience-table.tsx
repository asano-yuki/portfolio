import React, { useContext } from 'react'
import { _ } from 'gridjs-react'
import { History } from 'history'
import 'gridjs/dist/theme/mermaid.min.css'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

import { Contexts } from '../../modules/contexts'
import ExtendGrid from '../atoms/extend-grid'
import IconLink from '../atoms/icon-list'
import getDatePeriod from '../../custom/use-date-period'

export type Props = {
  history : History
}

/**
 * 実務経験一覧テーブル
 */
const ExperienceTable: React.FC<Props> = ({
  history
}: Props) => {
  const data = useContext(Contexts)
  if (!data?.experience) return <></>

  // extend-grid.tsxのdataプロパティを構築
  const experience = data.experience.map(item => {
    const { _id, title, startDate, endDate, keySkill } = item
    // 年月表記による所属期間の表示
    const period = getDatePeriod(startDate, endDate)
    // 詳細ボタンのアイコンコンポーネントを構築
    const iconLink = _(<IconLink items={[
      {
        id    : _id,
        icon  : faChevronCircleRight,
        label : '詳細',
        click : () => { history.push(`/experience/${_id}`) }
      }
    ]} />)
    return [
      title,
      period,
      keySkill,
      iconLink
    ]
  })

  return (
    <ExtendGrid
      data={experience}
      columns={[
        '概要',
        {
          name : '期間',
          sort : {
            compare : (a: number, b: number) => {
              if (a === b) return 0
              return a > b ? 1 : -1
            }
          }
        },
        '主要スキル',
        {
          name : '',
          sort : {
            enabled : false
          }
        }
      ]}
    />
  )
}

export default ExperienceTable
