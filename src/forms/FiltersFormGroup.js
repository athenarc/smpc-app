import React from 'react'
import { Field } from 'react-final-form'

const FilterFormGroup = ({ ...props }) => {
  return (
    <div className='form-row filters'>
      <div className='form-group col-md-4'>
        <label htmlFor={`${props.name}.attribute`}>Attribute</label>
        <Field id={`${props.name}.attribute`} name={`${props.name}.attribute`} component='select' className='custom-select'>
          <option />
          <option value='age'>Age</option>
        </Field>
      </div>
      <div className='form-group col-md-4'>
        <label htmlFor={`${props.name}.operator`}>Operator</label>
        <Field id={`${props.name}.operator`} name={`${props.name}.operator`} component='select' className='custom-select'>
          <option value='='>=</option>
          <option value='<'>&lsaquo;</option>
          <option value='>'>&rsaquo;</option>
        </Field>
      </div>
      <div className='form-group col-md-4'>
        <label htmlFor={`${props.name}.value`}>Filter Value</label>
        <Field id={`${props.name}.value`} name={`${props.name}.value`} component='input' className='form-control' type='text' placeholder='Filter value' />
      </div>
    </div>
  )
}

export default FilterFormGroup
