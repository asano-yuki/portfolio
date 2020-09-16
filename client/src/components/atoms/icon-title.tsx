import React from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

export type Props = {
  icon      : IconDefinition
  title     : string,
  isColumn? : boolean
}

/**
 * アイコン付きタイトルを構築
 * 参照先：https://fontawesome.com/icons?d=gallery
 * @param {String} icon fontawesomeのアイコン
 * @param {String} title タイトル
 */
const IconTitle: React.FC<Props> = ({
  icon,
  title,
  isColumn = false
}: Props) => {
  const clazz = 'icon-title'
  return (
    <h3 className={`${clazz} ${isColumn ? `${clazz}_state_column` : ''}`}>
      <Icon icon={icon} className={`${clazz}__icon`} />
      <span className={`${clazz}__title`}>{title}</span>
    </h3>
  )
}

export default IconTitle
