import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from '../common/store/configureStore'
import '../common/stubs/COURSES'

import App from '../common/containers/App'
import Dashboard from '../common/components/Dashboard'
import { Router, browserHistory } from 'react-router'

const rootRoute = {
  childRoutes: [ {
    path: '/',
    component: require('../common/components/App'),
    childRoutes: [
      require('../common/routes/Calendar'),
      require('../common/routes/Course'),
      require('../common/routes/Grades'),
      require('../common/routes/Messages'),
      require('../common/routes/Profile'),
      require('../common/routes/Dashboard'),
      require('../common/routes/Memory'),
      require('../common/routes/Network'),
      require('../common/routes/Summary'),
      require('../common/routes/TPS'),
      require('../common/routes/Upload'),
      require('../common/routes/About')
    ]
  } ]
}

/*
const preloadedState = window.__PRELOADED_STATE__
const store = configureStore(preloadedState)
const rootElement = document.getElementById('wrapper')

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  rootElement
)
*/


render((
  <Router
    history={browserHistory}
    routes={rootRoute}
  />
), document.getElementById('wrapper'))


/*render((
  <Dashboard/>
), document.getElementById('page-content'))
*/