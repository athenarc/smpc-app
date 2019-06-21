import React from 'react'
import { Field } from 'react-final-form'

const AttributesFormGroup = ({ algorithms, listener }) => {
  return (
    <div className='form-row filters'>
      <div className='form-group col-md-12'>
        <label htmlFor='algorithm'>Algorithm</label>
        <Field
          id='algorithm'
          name='algorithm'
          >
          {({input, meta}) => {
            return (
              <select {...input}
                onChange={e => {
                  input.onChange(e)
                  listener && listener(e)
                }}
                className='custom-select'
                id='algorithm'
                name='algorithm'
              >
                <option />
                {
                    algorithms.map(algo =>
                      <option value={algo.name} key={algo.name}>{algo.title}</option>
                    )
                  }
              </select>
            )
          }}

        </Field>
      </div>
    </div>
  )
}

export default AttributesFormGroup
