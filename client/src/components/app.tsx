import React, { useState, useReducer, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { subscribeAll } from '../modules/actions/all'
import { reducer as allReducer } from '../modules/reducers/all'
import { Contexts, NavContexts } from '../modules/contexts'
import Header from './organisms/header'
import MainTitle from './organisms/main-title'
import Top from './pages/top'
import Skill from './pages/skill'
import Experience from './pages/experience'
import Contact from './pages/contact'
import Copyright from './atoms/copyright'

import '../scss/style.scss'

const App: React.FC = () => {
  // ヘッダーの開閉を管理
  const [openState, setOpenState] = useState<boolean>(true)

  // API経由で取得したデータを管理
  const [allState, allDispatch] = useReducer(allReducer, null)

  // コンポーネントのマウント後、API経由でコンテンツに表示する情報を取得
  useEffect(() => {
    const f = async () => {
      // API経由でプロフィール、スキル、実務経験情報を取得
      const allDataAction = await subscribeAll()
      allDispatch(allDataAction)
    }
    f()
  }, [])

  const clazz         = 'contents'
  const titleModifier = openState ? `${clazz}__title_state_open` : `${clazz}__title_state_close`
  const bodyModifier  = openState ? `${clazz}__body_state_open`  : `${clazz}__body_state_close`
  return (
    <NavContexts.Provider value={{ isOpen: openState }}>
      <div className={clazz}>
        <Router>
          <div className={`${clazz}__header`}>
            <Header openState={openState} setOpenState={setOpenState} />
          </div>
          <div className={`${clazz}__title ${titleModifier}`}>
            <MainTitle openState={openState} />
          </div>
          <Contexts.Provider value={allState}>
            <div className={`${clazz}__body ${bodyModifier}`}>
              <Switch>
                <Route exact path='/' component={Top} />
                <Route path='/skill' component={Skill} />
                <Route path='/experience' component={Experience} />
                <Route path='/contact' component={Contact} />
              </Switch>
              <footer className={`${clazz}__footer`}>
                <Copyright />
              </footer>
            </div>
          </Contexts.Provider>
          <div className={`${clazz}__header-bottom`}>
            <Header openState={true} setOpenState={setOpenState} isColumn={true} />
          </div>
        </Router>
      </div>
    </NavContexts.Provider>
  )
}

export default App
