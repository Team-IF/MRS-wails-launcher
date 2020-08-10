import React from 'react'
import ReactDOM from 'react-dom'
import 'core-js/stable'
import './index.css'
import App from './components/App'
import './assets/styles/main.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './redux/index'

import { HashRouter, Route } from 'react-router-dom'

import SignIn from './pages/SignIn'

import * as Wails from '@wailsapp/runtime'

Wails.Init(() => {
  ReactDOM.render(
    <Provider store={createStore(rootReducer)}>
      <HashRouter>
        <App>
          <Route path='/' component={SignIn} exact />
        </App>
      </HashRouter>
    </Provider>,
    document.getElementById('app')
  )
})
