import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import * as reducers from '../reducers'
import { routerReducer, routerMiddleware } from 'react-router-redux'


export default function configureStore(history, preloadedState) {
  // console.log(preloadedState)
  const store = createStore(combineReducers({
      ...reducers,
      routing: routerReducer
    }),
    preloadedState,
    compose(
      applyMiddleware(
        thunk,
        routerMiddleware(history)
      ),
      typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
