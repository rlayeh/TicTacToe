import { connect } from 'react-redux'
import { move } from '../actions'
import React from 'react'
import FieldsRow from '../components/FieldsRow'

const getFieldsForRow = (rowIndex, boardSize, moves) => {
  const rowMoves = moves.filter(move => {
    return move.y == rowIndex
  })

  let resultArray = [...Array(boardSize)]

  rowMoves.forEach((move)=>{
    resultArray[move.x] = move.type
  })

  return resultArray
}

const getRows = (boardSize, moves) => {
  let rows = []
  for (let i = 0; i < boardSize; i++) {
    rows.push(getFieldsForRow(i, boardSize, moves))
  }

  return rows
}

const mapStateToProps = (state, ownProps) => {
  return {
    fieldRows: getRows(state.game.boardSize, state.game.moves)
  }
}

let Board = ({ fieldRows, dispatch }) => (
  <ul className="board">
    {fieldRows.map((row, index) =>
      <li key={index}>
        <FieldsRow
          fields={row}
          onFieldClick={x => dispatch(move(x, index))}
        />
      </li>
    )}
  </ul>
)

Board = connect(
  mapStateToProps
)(Board)

export default Board
