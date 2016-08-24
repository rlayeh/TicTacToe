import possibleWinStates from './possibleWinStates'

const calculateNewValue = (previousValue, newValue, maximize) => {
	if(maximize){
		return newValue > previousValue ? newValue : previousValue
	}

	return newValue < previousValue ? newValue : previousValue
}

const reduceAvailableMoves = (state, availableMovesResolver, maximize, continueFunc) => {
	return availableMovesResolver(state).reduce(continueFunc, maximize ? -1 : 1)
}

const minMax = (state, maximize, gameStateResolver, availableMovesResolver, moveExecutor) => {

	switch(gameStateResolver(state)){
		case possibleWinStates.draw:
			return 0
		case possibleWinStates.ai:
			return 1000
		case possibleWinStates.player:
			return -1000
	}

	return reduceAvailableMoves(state, availableMovesResolver, maximize, (previousValue, availableMove) => {
		return calculateNewValue(previousValue, minMax(moveExecutor(state, availableMove), !maximize, gameStateResolver, availableMovesResolver, moveExecutor), maximize)
	})
}

const sortByWinPossibility = (calculatedAvailableMoves) => {
	return calculatedAvailableMoves.sort((move1, move2) => {
		return move2.value > move1.value
	})
}

const getAvailableMovesWithValues = (state, gameStateResolver, availableMovesResolver, moveExecutor) => {
	return availableMovesResolver(state).map(availableMove => {
		return {
			move: availableMove,
			value: minMax(moveExecutor(state, availableMove), true, gameStateResolver, availableMovesResolver, moveExecutor)
		}
	})
}

const minMaxResolver = (gameState, gameStateResolver, availableMovesResolver, moveExecutor) =>{
	return sortByWinPossibility(getAvailableMovesWithValues(gameState, gameStateResolver, availableMovesResolver, moveExecutor))[0].move

}
export default minMaxResolver


