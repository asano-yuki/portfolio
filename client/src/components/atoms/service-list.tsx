import React from 'react'
import gitHubImg from '../../assets/img/github.svg'

const ServiceList: React.FC = () => {
  const clazz = 'service-list'
  return (
    <ul className={clazz}>
      <li className={`${clazz}__item`}>
        <a href='https://github.com/asano-yuki/portfolio' className={`${clazz}__link`} target='_blank' rel="noreferrer">
          <img src={gitHubImg} className={`${clazz}__img`} alt='GitHub' />
        </a>
      </li>
    </ul>
  )
}

export default ServiceList
