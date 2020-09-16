import performance from './performance/index'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app'

// パフォーマンスの計測
window.addEventListener('load', performance)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
