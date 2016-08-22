import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import gameApp from './reducers'
import Game from './containers/Game'
import { victory } from './actions'

let store = createStore(gameApp)

render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('main')
)