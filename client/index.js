import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from '../common/store/configureStore'
import '../common/stubs/COURSES'

import getRoutes from '../common/routes/routes'

import { Route, Router, browserHistory, Redirect } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'


const preloadedState = window.__initialState__
// console.log(preloadedState)
const store = configureStore(browserHistory, preloadedState)
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store} key="provider">
    <Router history={history}>
      {getRoutes(store)}
    </Router>
  </Provider>, 
  document.getElementById('wrapper'))