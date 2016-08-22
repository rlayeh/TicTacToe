const getExtendedEntry = (existingResult, newValue) => {
	return {
		type: existingResult.type,
		count: newValue.type === existingResult.type ? existingResult.count + 1 : existingResult.count
	}
}

const getNewEntry = (newMove) => {
	return {
		type: newMove.type,
		count: 1
	}
}

const getEntryValue = (existingResult, newValue) =>{
	return existingResult && existingResult.type ? getExtendedEntry(existingResult, newValue) : getNewEntry(newValue)
}

const getDiagTopToBottomEntryValue = (existingResult, newValue) => {
	return newValue.x === newValue.y ? getEntryValue(existingResult, newValue) : Object.assign({}, existingResult)
}

const getDiagBottomToTopEntryValue = (existingResult, newValue, boardSize) => {
	return newValue.x === ((boardSize - 1) - newValue.y) ? getEntryValue(existingResult, newValue) : Object.assign({}, existingResult)
}

const extendResult = (previousState, move, boardSize) =>{
	return Object.assign({}, previousState, {
		['row' + move.y]: getEntryValue(previousState['row' + move.y], move),
		['col' + move.x]: getEntryValue(previousState['col' + move.x], move),
		['diagTopBottom']: getDiagTopToBottomEntryValue(previousState['diagTopBottom'], move),
		['diagBottomTop']: getDiagBottomToTopEntryValue(previousState['diagBottomTop'], move, boardSize)
	})
}

const didWon = (state, property, boardSize) => {
	return state[property].count === boardSize ? state[property].type : null
}

const extendWithWinner = (state, move, boardSize) => {
	return Object.assign({}, state, {
		winner: state.winner  || 
				didWon(state, 'row' + move.y, boardSize) || 
				didWon(state, 'col' + move.x, boardSize) || 
				didWon(state, 'diagTopBottom', boardSize) || 
				didWon(state, 'diagBottomTop', boardSize) 
	})
}

const movesReducer = (previous, current, boardSize) =>{
	return extendWithWinner(extendResult(previous, current, boardSize), current, boardSize)
}

const reduceMoves = (moves, boardSize) =>{
	return moves.reduce((previous, current) => movesReducer(previous, current, boardSize),{winner: null})
}
const resolver = (moves, boardSize) => {
	if(moves.length < (boardSize * 2 - 1)){
		return null
	}
	
	return reduceMoves(moves, boardSize).winner
}

export default resolver