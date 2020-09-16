import React from 'react'
import { History } from 'history'

import Structure from '../atoms/structure'
import ExperienceTable from '../molecules/experience-table'

export type Props = {
  history : History
}

const ExperienceList: React.FC<Props> = ({
  history
}: Props) => {
  return (
    <Structure title='実務経験一覧'>
      <ExperienceTable history={history} />
    </Structure>
  )
}

export default ExperienceList
