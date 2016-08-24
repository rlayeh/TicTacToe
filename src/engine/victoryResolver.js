import figureType from './figureType'

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
	return newValue.x === newValue.y ? getEntryValue(existingResult, newValue) : existingResult
}

const getDiagBottomToTopEntryValue = (existingResult, newValue, boardSize) => {
	return newValue.x === ((boardSize - 1) - newValue.y) ? getEntryValue(existingResult, newValue) : existingResult
}

const didWon = (possibleWinningState, boardSize) => {
	return possibleWinningState && possibleWinningState.count === boardSize
}

const getPossibleWins = (moves, boardSize) =>{
	const possibleWinningStatesLength = boardSize*2+2 //small optimization 
	
	return moves.reduce((possibleWinningStates, current) => {
		possibleWinningStates[current.y] = getEntryValue(possibleWinningStates[current.y], current)
		possibleWinningStates[boardSize + current.x] = getEntryValue(possibleWinningStates[boardSize + current.x], current)
		possibleWinningStates[possibleWinningStatesLength-2] = getDiagTopToBottomEntryValue(possibleWinningStates[possibleWinningStatesLength-2], current)
		possibleWinningStates[possibleWinningStatesLength-1] = getDiagBottomToTopEntryValue(possibleWinningStates[possibleWinningStatesLength-1], current, boardSize)
		return possibleWinningStates
	}, [])
}

const getWinner = (possibleWinningStates, boardSize) =>{
	return possibleWinningStates.find(possibleWinningState => didWon(possibleWinningState, boardSize))
}

const getWinnerOrDraw = (moves, boardSize, winner) => {
	if(!winner){
		return moves.length == (boardSize * boardSize) ? figureType.draw : null
	}
	return winner.type
}

const resolver = (moves, boardSize) => {
	if(!boardSize){
		return null
	}

	if(moves.length < (boardSize * 2 - 1)){
		return null
	}

	return getWinnerOrDraw(moves, boardSize, getWinner(getPossibleWins(moves, boardSize), boardSize))
}

export default resolver