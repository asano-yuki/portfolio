import React, { useContext } from 'react'

import { Contexts } from '../../modules/contexts'
import GroupList from '../molecules/group-list'
import GroupItem from '../atoms/group-item'
import ProgressBar from '../atoms/progress-bar'
import { makeExperienceYear } from '../../custom/use-make-experience-year'

const SkillGroup: React.FC = () => {
  const data = useContext(Contexts)
  if (!data?.skill) return <></>

  const skillItems = data.skill.map((item, i) => {
    const { name, years } = item
    // 実務経験年数の合計値を算出
    const year = makeExperienceYear(years)
    // 1レコードに表示する各セル項目を構築
    return (
      <GroupList key={i}>
        <GroupItem item={name} />
        <GroupItem item={
          <ProgressBar key={i} {...{
            max           : 4,
            height        : 10,
            val           : year,
            correctionVal : 0.1,
            labels        : ['', '1年', '2年', '3年', '']
          }} />}
        />
      </GroupList>
    )
  })
  return (
    <>
      <GroupList isHead={true}>
        <GroupItem item='使用言語' />
        <GroupItem item='実務経験年数' />
      </GroupList>
      {skillItems}
    </>
  )
}

export default SkillGroup
