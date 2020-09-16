import React, { useContext } from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'

import { Contexts } from '../../modules/contexts'

/**
 * 資格一覧を表示
 */
const CapacityList: React.FC = () => {
  const data = useContext(Contexts)
  if (!data?.profile) return <></>

  const { capacity } = data.profile
  const clazz = 'capacity-list'
  const list  = capacity.map((item, i) => {
    return (
      <li key={i} className={`${clazz}__item`}>
        <div className={`${clazz}__outer`}>
          <Icon icon={faCheckSquare} className={`${clazz}__icon`} />
          <span className={`${clazz}__label`}>{item}</span>
        </div>
      </li>
    )
  })
  return <ul className={clazz}>{list}</ul>
}

export default CapacityList
