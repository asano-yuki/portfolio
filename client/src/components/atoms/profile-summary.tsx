import React from 'react'

export type Props = {
  texts  : string[]
}

/**
 * プロフィールの簡易情報を構築
 * 最大で3要素まで表示するリストを構築
 * @param {Array} texts 項目名を格納したリスト
 */
const ProfileSummary: React.FC<Props> = ({
  texts
}: Props) => {
  const clazz  = 'profile-summary'
  const _texts = texts.slice(0, 3)
  const items  = _texts.map((text, i) => <li key={i} className={`${clazz}__item`}>{text}</li>)
  return <ul className={clazz}>{items}</ul>
}

export default ProfileSummary
