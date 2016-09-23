import minMax from '../ai/minMax'
import victoryResolver from './victoryResolver'
import moveExecutor from './moveExecutor'
import availableMovesResolver from './availableMovesResolver'
import possibleWinStates from '../ai/possibleWinStates'
import figureType from './figureType'

const getGameEndResolver = (boardSize, aiFigureType) => {
	return (moves) => {
		switch(victoryResolver(moves, boardSize)){
			case aiFigureType:
				return possibleWinStates.ai
			case figureType.draw:
				return possibleWinStates.draw
			case null:
				return null
			default:
				return possibleWinStates.player
		}
	}
}

const getAvailableMovesResolver = (boardSize) => {
	return (moves) => availableMovesResolver(moves, boardSize)
}

const getMoveExecutor = () => {
	return (moves, nextMove) => moveExecutor(moves, nextMove.x, nextMove.y)
}

const getAiMove = (moves, boardSize, aiFigureType) => {
	return minMax(moves, getGameEndResolver(boardSize, aiFigureType), getAvailableMovesResolver(boardSize), getMoveExecutor())
}

const ticTacToeAiMove = (moves, boardSize, aiFigureType, startingType, performMove) => {
	if((moves.length && moves[moves.length - 1].type == aiFigureType) || 
	   (!moves.length && aiFigureType != startingType) ||
	   (moves.length == boardSize*boardSize) ||
	   (victoryResolver(moves, boardSize))){
		return
	}

	performMove(getAiMove(moves, boardSize, aiFigureType))

}

export default ticTacToeAiMove