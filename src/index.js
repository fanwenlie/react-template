import 'es6-promise/auto'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import FastClick from 'fastclick'
import App from './App'
import store from './store'

// import 'antd-mobile/dist/antd-mobile.css'
import './styles/index.less'

import * as serviceWorker from './serviceWorker'

FastClick.attach(document.body)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
