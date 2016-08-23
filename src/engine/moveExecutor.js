const getNxtMoveType = (moves) =>{
	if(!moves.length){
		return 'circle'
	}

	return moves[moves.length - 1].type === 'circle' ? 'cross' : 'circle'
}

const createNewMove = (type, x, y) =>{
	return {
		x: x,
		y: y,
		type: type
	}
}

const executor = (moves, x, y) => {
	return [...moves, createNewMove(getNxtMoveType(moves), x, y)]
}

export default executor