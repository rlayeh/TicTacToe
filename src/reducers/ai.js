const defaultState = {
  players: 2,
  aiType: 'circle'
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