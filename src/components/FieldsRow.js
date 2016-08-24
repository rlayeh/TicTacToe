import React, { PropTypes } from 'react'
import Field from './Field'

const FieldsRow = ({ fields, onFieldClick }) => (
  <ul className="row">
    {fields.map((field, index) =>
      <Field
        key={index}
        type={field}
        onClick={() => onFieldClick(index)}
      />
    )}
  </ul>
)

FieldsRow.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.number).isRequired,
  onFieldClick: PropTypes.func.isRequired
}

export default FieldsRow
