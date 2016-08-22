import { combineReducers } from 'redux'
import ai from './ai'
import game from './game'

const gameApp = combineReducers({
  ai,
  game
})

export default gameApp
