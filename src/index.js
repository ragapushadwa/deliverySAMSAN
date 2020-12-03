import React from 'react'
import ReactDOM from 'react-dom'
import App from './komponen/App'

import { HashRouter } from 'react-router-dom'

ReactDOM.render(
<HashRouter>
    <App />
  </HashRouter>,document.querySelector('#root')
)