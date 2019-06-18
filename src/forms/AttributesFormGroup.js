import React from 'react'
import { Field } from 'react-final-form'
import className from 'classnames'

const AttributesFormGroup = ({ name, attributes, showCells }) => {
  const cellClass = className('form-group', 'col-md-6', {
    'd-none': !showCells
  })

  const attributeClass = className('form-group', {
    'col-md-12': !showCells,
    'col-md-6': showCells
  })

  return (
    <div className='form-row filters'>
      <div className={attributeClass}>
        <label htmlFor={`${name}.attribute`}>Attribute</label>
        <Field id={`${name}.name`} name={`${name}.name`} component='select' className='custom-select'>
          <option />
          {
            attributes.map((attr, index) =>
              <option value={attr.id} key={`${index}-${attr.id}`}>{attr.name}</option>
            )
          }
        </Field>
      </div>
      <div className={cellClass}>
        <label htmlFor={`${name}.cells`}>Cells</label>
        <Field id={`${name}.cells`} name={`${name}.cells`} component='input' className='form-control' type='number' placeholder='Number of cells' />
      </div>
    </div>
  )
}

export default AttributesFormGroup
