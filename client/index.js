import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from '../common/store/configureStore'
import '../common/stubs/COURSES'

import App from '../common/containers/App'
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
      require('../common/routes/Profile')
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