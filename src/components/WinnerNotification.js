import React, { PropTypes } from 'react'
import Reset from './Reset'

const WinnerNotification = ({ winner, onReset }) => {
  return <div className={ winner ? 'winner-notification' : 'hidden'}>
            <div className="mask-panel" />
            <div className="info">
	            <div className="label">{winner && winner==='circle' ? 'O Won' : 'X Won'}</div>
	            <Reset onClick={onReset} />
            </div>
          </div>
}

WinnerNotification.propTypes = {
  winner: PropTypes.string,
  onReset: PropTypes.func.isRequired
}

export default WinnerNotification
