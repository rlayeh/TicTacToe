import { connect } from 'react-redux'
import React from 'react'
import Board from './Board'
import WinnerNotification from '../components/WinnerNotification'
import { reset } from '../actions'
import Reset from '../components/Reset'
import Controls from './Controls'

const mapStateToProps = (state, ownProps) => {
  return {
    winner: state.game.victory
  }
}

let Game = ({winner, dispatch}) => (
  <div>
  	<Controls onReset={()=>dispatch(reset())}/>
    <Board />
    <WinnerNotification winner={winner}
    					onReset={()=>dispatch(reset())} />
  </div>
)

Game = connect(
  mapStateToProps
)(Game)

export default Game
