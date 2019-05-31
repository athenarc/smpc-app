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
              <label for='username'>Username</label>
              <Field id='username' name='username' component='input' className='form-control' type='text' placeholder='Enter username' />
            </div>
            <div className='form-group'>
              <label for='password'>Password</label>
              <Field id='password' name='password' component='input' className='form-control' type='password' placeholder='Password' />
            </div>
            <button type='submit' className='btn btn-primary' disabled={submitting}>Submit</button>
          </form>
          )}
        />
  )
}

export default LoginView
