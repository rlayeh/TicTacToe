export const move = (x, y) => {
  return {
    type: 'MOVE',
    x,
    y
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}

export const victory = (type) => {
  return {
    type: 'VICTORY', 
    winner: type
  }
}

export const setNumberOfPlayers = (numberOfPlayers) => {
  return {
    type: 'SET_NUMBER_OF_PLAYERS', 
    numberOfPlayers
  }
}

