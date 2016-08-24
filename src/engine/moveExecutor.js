import figureType from './figureType'

const getNextMoveType = (moves) =>{
	if(!moves.length){
		return figureType.circle
	}

	return moves[moves.length - 1].type === figureType.circle ? figureType.cross : figureType.circle
}

const createNewMove = (type, x, y) =>{
	return {
		x: x,
		y: y,
		type: type
	}
}

const executor = (moves, x, y) => {
	return [...moves, createNewMove(getNextMoveType(moves), x, y)]
}

export default executor