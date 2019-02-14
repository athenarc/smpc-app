import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Form, Field } from 'react-final-form'

import {
  checkComputationStatus
} from '../actions'

class CheckStatus extends React.Component {
  constructor () {
    super()
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (values) {
    this.props.actions.checkComputationStatus({id: values.computationID})
  }

  render () {
    return (
      <Form
        onSubmit={this.onSubmit}
        render={({
            handleSubmit,
            submitting
          }) => (
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <label className='invisible' htmlFor='computation-id'>Computation ID</label>
                <Field id='computation-id' name='computationID' component='input' className='form-control' type='text' placeholder='bca9cbff-45ef-4ae5-be35-58585b2fe1d4' />
                <small id='email-id-help' className='form-text text-muted'>Check the status of your computation</small>
              </div>
              <button type='submit' className='btn btn-primary' disabled={submitting}>Submit</button>
            </form>
            )}
          />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({ computations: state.computations })

const mapDispatchToProps = dispatch => ({actions: bindActionCreators({ checkComputationStatus }, dispatch)})

export default connect(mapStateToProps, mapDispatchToProps)(CheckStatus)
