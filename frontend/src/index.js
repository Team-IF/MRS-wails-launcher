import React from 'react'
import ReactDOM from 'react-dom'
import 'core-js/stable'
import './index.css'
import App from './components/App'
import './assets/styles/main.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './redux/index'
import * as Wails from '@wailsapp/runtime'

import { HashRouter, Route } from 'react-router-dom'

import Home from './pages/Home'
import SignIn from './pages/SignIn'
import AuthGuard from './components/AuthGuard'

Wails.Init(() => {
  ReactDOM.render(
    <Provider store={createStore(rootReducer)}>
      <HashRouter>
        <App>
          <AuthGuard exact path='/' component={Home} />
          <Route path='/auth' component={SignIn} />
        </App>
      </HashRouter>
    </Provider>,
    document.getElementById('app')
  )
})
