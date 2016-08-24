const getNotUsed = ( boardSize, indexInUse) => {
	//it is possible to use other methods like [...Array(size)].map/reduce
	//but in this case 'for' function was around 50% faster

	let allMovesArray = []
	for (let i = 0; i < boardSize*boardSize; i++) {
		if(!indexInUse(i)){
			allMovesArray.push({
				x: i % boardSize,
				y: Math.floor(i/boardSize)
			})
		}
	}

	return allMovesArray
}

const getAlreadyUsedIndexes = (moves, boardSize) =>{
	return moves.map(move => move.y * boardSize + move.x)
}

const indexUsed = (index, alreadyUsedIndexes) => {
	return alreadyUsedIndexes.indexOf(index) > -1
}

const getAvailableMoves = (boardSize, alreadyUsedIndexes) => {
	return getNotUsed(boardSize, index => indexUsed(index, alreadyUsedIndexes))
}

const resolver = (moves, boardSize) =>{
	return getAvailableMoves(boardSize, getAlreadyUsedIndexes(moves, boardSize))
}

export default resolver