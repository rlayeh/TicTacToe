import possibleWinStates from './possibleWinStates'

const calculateNewValue = (previousValue, newValue, maximize) => {
	if(previousValue == null){
		return newValue
	}

	if(maximize){
		return newValue > previousValue ? newValue : previousValue
	}

	return newValue < previousValue ? newValue : previousValue
}

const minMax = (state, depth, maximize, gameStateResolver, availableMovesResolver, moveExecutor) => {
	switch(gameStateResolver(state)){
		case possibleWinStates.draw:
			return 0
		case possibleWinStates.ai:
			return 10000 - depth
		case possibleWinStates.player:
			return -10000 + depth
	}

	return availableMovesResolver(state).reduce((previousValue, availableMove) => {
		return calculateNewValue(previousValue, 
								 minMax(moveExecutor(state, availableMove), depth + 1, !maximize, gameStateResolver, availableMovesResolver, moveExecutor), 
								 maximize)
	}, null)
}

// const minMax = (state, depth, maximize, gameStateResolver, availableMovesResolver, moveExecutor) => {
// 	switch(gameStateResolver(state)){
// 		case possibleWinStates.draw:
// 			return 0
// 		case possibleWinStates.ai:
// 			return 10000 - depth
// 		case possibleWinStates.player:
// 			return -10000 + depth
// 	}

// 	const possibleMoves = availableMovesResolver(state).map(move=>{
// 		return minMax(moveExecutor(state, move), depth + 1, !maximize, gameStateResolver, availableMovesResolver, moveExecutor)
// 	})

// 	if(maximize){
// 		return Math.max.apply(null, possibleMoves)
// 	}
// 	return Math.min.apply(null, possibleMoves)
// }


const sortByWinPossibility = (calculatedAvailableMoves) => {
	return calculatedAvailableMoves.sort((move1, move2) => {
		return move2.value > move1.value
	})
}

const getAvailableMovesWithValues = (state, gameStateResolver, availableMovesResolver, moveExecutor) => {
	return availableMovesResolver(state).map(availableMove => {
		return {
			move: availableMove,
			value: minMax(moveExecutor(state, availableMove), 0, false, gameStateResolver, availableMovesResolver, moveExecutor)
		}
	})
}

const minMaxResolver = (gameState, gameStateResolver, availableMovesResolver, moveExecutor) =>{
	const t = sortByWinPossibility(getAvailableMovesWithValues(gameState, gameStateResolver, availableMovesResolver, moveExecutor))
	console.log(t)
	return t[0].move
}
export default minMaxResolver


