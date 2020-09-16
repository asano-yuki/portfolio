import React from 'react'

import ServiceList from '../atoms/service-list'

type Props = {
  openState : boolean
}

const MainTitle: React.FC<Props> = ({
  openState
}: Props) => {
  const clazz = 'main-title'
  // ナビゲーションメニューの開閉に応じて、レイアウトを調整
  const openClass = openState ? `${clazz}_state_open` : ''
  return (
    <div className={`${clazz} ${openClass}`}>
      <h1 className={`${clazz}__title`}>asan&apos;s portfolio</h1>
      <div className={`${clazz}__service`}>
        <ServiceList />
      </div>
    </div>
  )
}

export default MainTitle
