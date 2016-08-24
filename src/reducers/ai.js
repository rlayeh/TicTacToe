import figureType from '../engine/figureType'

const defaultState = {
  players: 1,
  aiType: figureType.cross
}

const ai = (state = defaultState, action) => {
    switch (action.type) {
      case 'SET_NUMBER_OF_PLAYERS':
        return Object.assign({}, state, {
        	players: action.numberOfPlayers
        })
      default:
        return state
    }
}

export default ai