import React from 'react'
import ReactDOM from 'react-dom'
import 'core-js/stable'
import './index.css'
import App from './components/App'
import './assets/styles/main.css'

import { HashRouter, Route } from 'react-router-dom'

import SignIn from './pages/SignIn'

import * as Wails from '@wailsapp/runtime'

Wails.Init(() => {
  ReactDOM.render(
    <HashRouter>
      <App>
        <Route path='/' component={SignIn} exact />
      </App>
    </HashRouter>,
    document.getElementById('app')
  )
})
