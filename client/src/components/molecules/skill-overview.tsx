import React, { useContext } from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faFolderOpen, faKeyboard, faGlobe } from '@fortawesome/free-solid-svg-icons'

import { Contexts } from '../../modules/contexts'
import TitledText from '../atoms/titled-text'

/**
 * スキル概要を構築
 */
const SkillOverview: React.FC = () => {
  const data = useContext(Contexts)
  if (!data?.profile) return <></>

  // TitledTextコンポーネントのプロパティを定義
  const { specialtyField, specialtyTechnology, specialtyWork } = data.profile
  // 得意分野、得意技術、得意業務の配列データを文字列に変換
  const field      = specialtyField.join('、')
  const technology = specialtyTechnology.join('、')
  const work       = specialtyWork.join('、')

  const clazz = 'skill-overview'
  const items = [
    { icon: faFolderOpen, title: '得意分野', text: field     , color: '#ffd6e0', iconClass: `${clazz}__icon_type_field` },
    { icon: faKeyboard  , title: '得意技術', text: technology, color: '#fffcd6', iconClass: `${clazz}__icon_type_tech` },
    { icon: faGlobe     , title: '得意業務', text: work      , color: '#d6f2ff', iconClass: `${clazz}__icon_type_work` }
  ]

  return (
    <ul className={clazz}>
      {
        items.map((item, i) => {
          const { icon, title, text, iconClass } = item
          return (
            <li key={i} className={`${clazz}__item`}>
              <div className={`${clazz}__outer`}>
                <Icon icon={icon} className={`${clazz}__icon ${iconClass}`} />
                <div className={`${clazz}__body`}>
                  <TitledText title={title} text={text} />
                </div>
              </div>
            </li>
          )
        })
      }
    </ul>
  )
}

export default SkillOverview
