import React from 'react'
import { Field } from 'react-final-form'

const ClassificationFormGroup = ({ ...props }) => {
  return (
    <div className='form-row filters'>
      <div className='form-group col-md-4'>
        <label htmlFor={`classification.classifier`}>Classifier</label>
        <Field id={`classification.classifier`} name={`classification.classifier`} component='select' className='custom-select'>
          <option />
          <option value='ide' key='id3'>ID3</option>
          <option value='c45' key='c45'>C4.5</option>
        </Field>
      </div>
      <div className='form-group col-md-4'>
        <label htmlFor={`classification.attribute`}>Attribute</label>
        <Field id={`classification.attribute`} name={`classification.attribute`} component='select' className='custom-select'>
          <option />
          {
            props.attributes.map(attr =>
              <option value={attr} key={attr}>{attr}</option>
            )
          }
        </Field>
      </div>
      <div className='form-group col-md-4'>
        <label htmlFor={`classification.cells`}>Cells</label>
        <Field id={`classification.cells`} name={`classification.cells`} component='input' className='form-control' type='number' placeholder='Number of cells' />
      </div>
    </div>
  )
}

export default ClassificationFormGroup
