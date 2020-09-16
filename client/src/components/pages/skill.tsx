import React from 'react'
import { useMediaQuery } from 'react-responsive'

import Structure from '../atoms/structure'
import SkillOverview from '../molecules/skill-overview'
import CapacityList from '../atoms/capacity-list'
import SkillTable from '../organisms/skill-table'
import SkillGroup from '../organisms/skill-group'

const Skill: React.FC = () => {
  const isSmartPhone = useMediaQuery({ query: '(max-width: 480px)' })
  const clazz = 'skill'
  return (
    <div className={clazz}>
      <Structure title='スキル概要'>
        <SkillOverview />
      </Structure>
      <Structure title='資格一覧' className='capacity'>
        <CapacityList />
      </Structure>
      <Structure title='スキル一覧' className='skill-table'>
        { isSmartPhone ? <SkillGroup /> : <SkillTable /> }
      </Structure>
    </div>
  )
}

export default Skill
