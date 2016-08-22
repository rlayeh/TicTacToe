import { connect } from 'react-redux'
import React from 'react'
import Reset from '../components/Reset'
import NumberOfPlayers from '../components/NumberOfPlayers'
import { reset, setNumberOfPlayers } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    numberOfPlayers: state.ai.players
  }
}

let Controls = ({numberOfPlayers, dispatch}) => (
  <div className="controls">
      <NumberOfPlayers numberOfPlayers={numberOfPlayers} onChange={newNumberOfPlayers =>dispatch(setNumberOfPlayers(newNumberOfPlayers))} />
  		<Reset onClick={()=>dispatch(reset())}/>
  </div>
)

Controls = connect(
  mapStateToProps
)(Controls)

export default Controls
