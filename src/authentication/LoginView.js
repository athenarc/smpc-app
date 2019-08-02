import React from 'react'
import { Form, Field } from 'react-final-form'

const LoginView = ({ onSubmit }) => {
  return (
    <Form
      onSubmit={onSubmit}
      render={({
          handleSubmit,
          submitting
        }) => (
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='username'>Username</label>
              <Field id='username' name='username' component='input' className='form-control' type='text' placeholder='Enter username' />
            </div>
            <div className='form-group'>
              <label htmlFor='token'>Token</label>
              <Field id='token' name='token' component='input' className='form-control' type='token' placeholder='Password' />
            </div>
            <button type='submit' className='btn btn-primary' disabled={submitting}>Submit</button>
          </form>
          )}
        />
  )
}

export default LoginView
