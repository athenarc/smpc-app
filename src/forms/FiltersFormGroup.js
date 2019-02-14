import React from 'react'
import { Field } from 'react-final-form'

const FilterFormGroup = ({ name, attributes }) => {
  return (
    <div className='form-row filters'>
      <div className='form-group col-md-4'>
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
      <div className='form-group col-md-4'>
        <label htmlFor={`${name}.operator`}>Operator</label>
        <Field id={`${name}.operator`} name={`${name}.operator`} component='select' className='custom-select'>
          <option value='='>=</option>
          <option value='<'>&lsaquo;</option>
          <option value='>'>&rsaquo;</option>
        </Field>
      </div>
      <div className='form-group col-md-4'>
        <label htmlFor={`${name}.value`}>Filter Value</label>
        <Field id={`${name}.value`} name={`${name}.value`} component='input' className='form-control' type='text' placeholder='Filter value' />
      </div>
    </div>
  )
}

export default FilterFormGroup
