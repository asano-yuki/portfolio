import React from 'react'
import 'tippy.js/dist/tippy.css'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

export type Props = {
  items : {
    id      : string | number
    icon    : IconDefinition
    label   : string
    click?  : (arg: any) => void
  }[]
}

/**
 * アイコン(Fontawesome)リストを構築
 * @param {Array} icons Fontawesomeの各アイコン
 */
const IconLink: React.FC<Props> = (props: Props) => {
  const clazz  = 'icon-list'
  // アイコンコンポーネントの構築
  const _icons = props.items.map((item, i) => {
    const { id, icon, label, click } = item
    return (
      <li key={i} className={`${clazz}__icon`}>
        <button className={`${clazz}__btn`} value={id} onClick={click}>
          <Icon icon={icon} />
          <span className={`${clazz}__label`}>{label}</span>
        </button>
      </li>
    )
  })

  return (
    <ul className={clazz}>
      {_icons}
    </ul>
  )
}

export default IconLink
