import React from 'react'

import Structure from '../atoms/structure'
import Profile from '../organisms/profile'
import LifeCareer from '../organisms/life-career'
import Motivation from '../organisms/motivation'
import DevCondetions from '../organisms/dev-condetions'
import About from '../organisms/about'

/*
 * Topページを構築
 */
const Top: React.FC = () => {
  const clazz = 'top'
  return (
    <div className={clazz}>
      <Structure title='プロフィール' className='profile'>
        <Profile />
      </Structure>
      <Structure title='ライフキャリア' className='life-career'>
        <LifeCareer />
      </Structure>
      <Structure title='モチベーション環境要因' className='motivation'>
        <Motivation />
      </Structure>
      <Structure title='希望開発条件' className='dev-condetions'>
        <DevCondetions />
      </Structure>
      <Structure title='当サイトについて' className='about'>
        <About />
      </Structure>
    </div>
  )
}

export default Top
