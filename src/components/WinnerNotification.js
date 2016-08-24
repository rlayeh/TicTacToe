import React, { PropTypes } from 'react'
import Reset from './Reset'
import figureType from '../engine/figureType'

const WinnerNotification = ({ winner, onReset }) => {
	let winnerLabel = "Its a draw!"

	if(winner && winner !== figureType.draw){
		winnerLabel = winner===figureType.circle ? 'O Won' : 'X Won'
	}

  	return <div className={ winner ? 'winner-notification' : 'hidden'}>
            <div className="mask-panel" />
            <div className="info">
	            <div className="label">{winnerLabel}</div>
	            <Reset onClick={onReset} />
            </div>
          </div>
}

WinnerNotification.propTypes = {
  winner: PropTypes.number,
  onReset: PropTypes.func.isRequired
}

export default WinnerNotification
