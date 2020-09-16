import React, { useContext } from 'react'

import { Contexts } from '../../modules/contexts'
import RoundThumbnail from '../atoms/round-thumbnail'
import ProfileSummary from '../atoms/profile-summary'
import imgPath from '../../assets/img/thumbnail.jpg'

/**
 * プロフィールを構築
 */
const Profile: React.FC = () => {
  const data = useContext(Contexts)
  if (!data?.profile) return <></>

  // RoundThumbnail、ProfileSummaryコンポーネントのPropsを取得
  const { name, job, birthday } = data.profile
  // 誕生日をもとに、現在の年齢を取得
  let age = new Date().getTime() - new Date(birthday).getTime()
  age = Math.floor(age / (1000 * 60 * 60 * 24 * 365))
  const thumbProps = {
    imgPath,
    alt   : 'プロフィール画像',
    style : { width: 110, height: 110 }
  }
  const summaryProps = {
    texts : [name, job, `満${age}歳`],
    style : {
      ul : { marginTop: 16 }
    }
  }
  const clazz = 'profile'
  return (
    <div className={clazz}>
      <div className={`${clazz}__item`}>
        <RoundThumbnail {...thumbProps} />
      </div>
      <div className={`${clazz}__item`}>
        <ProfileSummary {...summaryProps} />
      </div>
    </div>
  )
}

export default Profile
