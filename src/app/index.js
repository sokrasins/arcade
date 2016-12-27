import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, bindActionCreators, combineReducers } from 'redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import * as actionCreators from './actions/index.js'
import logMiddleware from './middleware/logMiddleware'

import App from './components/App'
import Game from './components/Game'

import * as reducers from './reducers'
const reducer = combineReducers(reducers)

import './components/bundle.scss'

const middlewares = [
  logMiddleware
]

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
const store = createStoreWithMiddleware(reducer)

// Bind store and actions to window for dev work
window.store = store
window.actions = bindActionCreators(actionCreators, store.dispatch)

ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Game} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('react-root'))
