import React, { PropTypes } from 'react'

const Reset = ({ numberOfPlayers, onChange }) => {
    return <span className="number-of-players">
    			Number of players:
    			<select onChange={(e)=>onChange(parseInt(e.target.value))} 
				   defaultValue={numberOfPlayers} 
				   value={numberOfPlayers} 
				   className={'number-of-players'} >
			   			<option key={1} value={1}>1</option>
			   			<option  key={2} value={2}>2</option>
		   		</select>
		   </span>
}

Reset.propTypes = {
  onChange: PropTypes.func.isRequired,
  numberOfPlayers: PropTypes.number.isRequired
}

export default Reset
