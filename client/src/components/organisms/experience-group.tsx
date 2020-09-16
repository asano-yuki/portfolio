import React, { useContext } from 'react'
import { History } from 'history'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

import { Contexts } from '../../modules/contexts'
import Structure from '../atoms/structure'
import GroupItem from '../atoms/group-item'
import GroupList from '../molecules/group-list'
import IconLink from '../atoms/icon-list'
import getDatePeriod from '../../custom/use-date-period'

export type Props = {
  history : History
}

const ExperienceGroup: React.FC<Props> = ({
  history
}: Props) => {
  const data = useContext(Contexts)
  if (!data?.experience) return <></>

  // extend-grid.tsxのdataプロパティを構築
  const experience = data.experience.map((item, i) => {
    const { _id, title, startDate, endDate } = item
    // 年月表記による所属期間の表示
    const period = getDatePeriod(startDate, endDate)

    const clazz = 'experience-group'
    return (
      <ul key={i} className={clazz}>
        <GroupItem item={period} />
        <GroupItem item={title} />
        <GroupItem item={
          <IconLink items={[
            {
              id    : _id,
              icon  : faChevronCircleRight,
              label : '詳細',
              click : () => { history.push(`/experience/${_id}`) }
            }
          ]} />}
        />
      </ul>
    )
  })

  return (
    <Structure title='実務経験一覧'>
      <GroupList isHead={true}>
        <GroupItem item='期 間' />
        <GroupItem item='概 要' />
      </GroupList>
      <GroupList>{experience}</GroupList>
    </Structure>
  )
}

export default ExperienceGroup
