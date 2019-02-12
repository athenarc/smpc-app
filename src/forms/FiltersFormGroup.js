import React from 'react'
import { Field } from 'react-final-form'

const FilterFormGroup = ({ ...props }) => {
  return (
    <div className='form-row filters'>
      <div className='form-group col-md-4'>
        <label htmlFor='attributes'>Attribute</label>
        <Field id='attributes' name='attributes' component='select' className='custom-select'>
          <option value='age'>Age</option>
        </Field>
      </div>
      <div className='form-group col-md-4'>
        <label htmlFor='operators'>Operator</label>
        <Field id='operators' name='operators' component='select' className='custom-select'>
          <option value='='>=</option>
          <option value='<'>&lsaquo;</option>
          <option value='>'>&rsaquo;</option>
        </Field>
      </div>
      <div className='form-group col-md-4'>
        <label htmlFor='filter-value'>Filter Value</label>
        <Field id='filter-value' name='filter-value' component='input' className='form-control' type='text' placeholder='Filter value' />
      </div>
    </div>
  )
}

export default FilterFormGroup
