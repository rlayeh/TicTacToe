import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import gameApp from './reducers'
import Game from './containers/Game'
import { move } from './actions'
import ticTacToeAiMove from './engine/ticTacToeAiMove'

let store = createStore(gameApp)

const executeAiMove = () => {
	const state = store.getState()
	if(state.ai.players == 1){
		ticTacToeAiMove(state.game.moves, 
						state.game.boardSize, 
						state.ai.aiType, 
						state.game.startingType, 
						aiMove => store.dispatch(move(aiMove.x, aiMove.y)))
	}
}

store.subscribe(executeAiMove)

render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('main')
)

executeAiMove()