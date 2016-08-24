import React, { PropTypes } from 'react'
import Circle from './Circle'
import Cross from './Cross'
import figureType from '../engine/figureType'

const Link = ({ type, onClick }) => {
  if (type) {
    return <li className="cell">
            {type==figureType.circle ? <Circle /> : <Cross />}
          </li>
  }

  return (
    <li onClick={onClick} className="cell empty">
    </li>
  )
}

Link.propTypes = {
  type: PropTypes.number,
  onClick: PropTypes.func.isRequired
}

export default Link
