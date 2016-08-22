import React, { PropTypes } from 'react'
import Circle from './Circle'
import Cross from './Cross'

const Link = ({ type, onClick }) => {
  if (type) {
    return <li className="cell">
            {type=='circle' ? <Circle /> : <Cross />}
          </li>
  }

  return (
    <li onClick={onClick} className="cell empty">
    </li>
  )
}

Link.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

export default Link
