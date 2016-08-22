import React, { PropTypes } from 'react'

const Reset = ({ onClick }) => {
    return <div onClick={onClick} className="reset">Reset</div>
}

Reset.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Reset
