import React from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { faSquare } from '@fortawesome/free-regular-svg-icons'
import './checkitem.scss'

export type Props = {
  label       : string
  isChecked?  : boolean
  iconColor?  : string | null
  labelColor? : string | null
}

/**
 * チェックリストの項目
 * @param label ラベル
 * @param isChecked 活性・非活性フラグ
 * @param iconColor アイコンの色
 * @param labelColor ラベルの色
 */
const CheckItem: React.FC<Props> = ({
  label,
  isChecked = true,
  iconColor,
  labelColor
}: Props) => {
  // チェックボックスの活性・非活性時に表示するアイコンを取得
  const icon  = isChecked ? faCheckSquare : faSquare
  const clazz = 'checkitem'
  return (
    <div className={`${clazz}`}>
      <Icon
        icon={icon}
        className={`${clazz}__icon`}
        style={iconColor ? { color: iconColor } : {}}
      />
      <span
        className={`${clazz}__label`}
        style={labelColor ? { color: labelColor } : {}}
      >
        {label}
      </span>
    </div>
  )
}

export default CheckItem
