import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

import ExperienceList from '../organisms/experience-list'
import ExperienceGroup from '../organisms/experience-group'
import ExperienceDetail from '../organisms/experience-detail'

const Experience: React.FC = () => {
  const isSmartPhone = useMediaQuery({ query: '(max-width: 480px)' })
  const clazz = 'experience-list'
  return (
    <div className={clazz}>
      <Switch>
        <Route
          exact path='/experience'
          render={e => isSmartPhone ?
            <ExperienceGroup history={e.history} /> :
            <ExperienceList history={e.history} />
          }
        />
        <Route path='/experience/:id' component={ExperienceDetail} />
      </Switch>
    </div>
  )
}

export default Experience
