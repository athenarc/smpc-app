import React from 'react'
import { Field } from 'react-final-form'

const AttributesFormGroup = ({ ...props }) => {
  return (
    <div className='form-row filters'>
      <div className='form-group col-md-6'>
        <label htmlFor={`${props.name}.attribute`}>Attribute</label>
        <Field id={`${props.name}.attribute`} name={`${props.name}.attribute`} component='select' className='custom-select'>
          <option />
          <option value='age'>Age</option>
        </Field>
      </div>
      <div className='form-group col-md-6'>
        <label htmlFor={`${props.name}.cells`}>Cells</label>
        <Field id={`${props.name}.cells`} name={`${props.name}.cells`} component='input' className='form-control' type='number' placeholder='Number of cells' />
      </div>
    </div>
  )
}

export default AttributesFormGroup
