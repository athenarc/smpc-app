import React from 'react'
import { Field } from 'react-final-form'

const AttributesFormGroup = ({ ...props }) => {
  return (
    <div className='form-row filters'>
      <div className='form-group col-md-6'>
        <label htmlFor='attributes'>Attribute</label>
        <Field id='attributes' name='attributes' component='select' className='custom-select'>
          <option value='age'>Age</option>
        </Field>
      </div>
      <div className='form-group col-md-6'>
        <label htmlFor='filter-value'>Cells</label>
        <Field id='cells' name='cells' component='input' className='form-control' type='number' placeholder='Number of cells' />
      </div>
    </div>
  )
}

export default AttributesFormGroup
