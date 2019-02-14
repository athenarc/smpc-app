import React from 'react'
import { Field } from 'react-final-form'

const AttributesFormGroup = ({ name, attributes }) => {
  return (
    <div className='form-row filters'>
      <div className='form-group col-md-6'>
        <label htmlFor={`${name}.attribute`}>Attribute</label>
        <Field id={`${name}.attribute`} name={`${name}.attribute`} component='select' className='custom-select'>
          <option />
          {
            attributes.map(attr =>
              <option value={attr} key={attr}>{attr}</option>
            )
          }
        </Field>
      </div>
      <div className='form-group col-md-6'>
        <label htmlFor={`${name}.cells`}>Cells</label>
        <Field id={`${name}.cells`} name={`${name}.cells`} component='input' className='form-control' type='number' placeholder='Number of cells' />
      </div>
    </div>
  )
}

export default AttributesFormGroup
