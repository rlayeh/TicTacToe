import victoryResolver from '../engine/victoryResolver'
import moveExecutor from '../engine/moveExecutor'
import figureType from '../engine/figureType'

const defaultState = {
  boardSize: 3,
  victory: null,
  moves: [],
  startingType: figureType.circle
}

const game = (state = defaultState, action) => {
    switch (action.type) {
      case 'RESET':
        return defaultState
      case 'VICTORY':
        return Object.assign({}, state, {
          victory: action.winner
        })
     case 'MOVE':
        const moves = moveExecutor(state.moves, action.x, action.y)
        return Object.assign({}, state, {
          moves: moves,
          victory: victoryResolver(moves, state.boardSize)
        })

      default:
        return state
    }
}

export default game