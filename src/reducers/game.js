import victoryResolver from '../engine/victoryResolver'

const defaultState = {
  boardSize: 3,
  victory: null,
  moves: []
}

const move = (state, action) => {
  switch (action.type) {
    case 'MOVE':
      return {
        type: state && state.type === 'circle' ? 'cross' : 'circle',
        x: action.x,
        y: action.y
      }
    default:
      return state
  }
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
        const moves =  [
                        ...state.moves,
                        move(state.moves.length ? state.moves[state.moves.length - 1] : undefined, action)
                      ]
        return Object.assign({}, state, {
          moves: moves,
          victory: victoryResolver(moves, state.boardSize)
        })

      default:
        return state
    }
}

export default game