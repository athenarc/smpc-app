import React from 'react'
import { Form, Field } from 'react-final-form'

const CheckStatus = ({ onSubmit }) => {
  return (
    <Form
      onSubmit={onSubmit}
      render={({
          handleSubmit,
          submitting
        }) => (
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label className='invisible' htmlFor='computation-id'>Computation ID</label>
              <Field id='computation-id' name='computationID' component='input' className='form-control' type='text' />
              <small id='email-id-help' className='form-text text-muted'>Enter your computation's ID</small>
            </div>
            <button type='submit' className='btn btn-primary' disabled={submitting}>Submit</button>
          </form>
          )}
        />
  )
}

export default CheckStatus
