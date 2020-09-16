import React from 'react'

export type Props = {
  isHead?  : boolean
  children : React.ReactNode
}

/**
 * グループ化した繰り返し項目を構築(スマホ対応)
 * @param {Array} items GroupItemコンポーネントのプロパティ
 */
const GroupList: React.FC<Props> = ({
  isHead = false,
  children
}: Props) => {
  const clazz = 'group-list'
  return (
    <ul className={`${clazz} ${isHead ? `${clazz}__head` : ''}`}>
      {children}
    </ul>
  )
}

export default GroupList
