const getEmptyArray = (boardSize) => {
	return [...Array(boardSize*boardSize)]
}

const getAllMoves = (emptyArray, boardSize) => {
	return emptyArray.map((item, index) =>{
		return {
			x: index % boardSize,
			y: Math.floor(index/boardSize)
		}
	})
}

const getAlreadyUsedIndexes = (moves, boardSize) =>{
	return moves.map(move => {
		return move.y * boardSize + move.x
	})
}

const indexUsed = (index, alreadyUsedIndexes) => {
	return alreadyUsedIndexes.indexOf(index) > -1
}

const getAvailableMoves = (allMoves, alreadyUsedIndexes) =>{
	return allMoves.filter((move, index) => !indexUsed(index, alreadyUsedIndexes))
}

const resolver = (moves, boardSize) =>{
	return getAvailableMoves(getAllMoves(getEmptyArray(boardSize), boardSize), getAlreadyUsedIndexes(moves, boardSize))
}

export default resolver