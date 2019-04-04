import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import actions from '../actions'

export default function withForm (FormComponent, options = {}) {
  class Form extends React.Component {
    constructor () {
      super()
      this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit (request) {
      console.log('submit', request)
      this.props.actions[options.action]({}, request).then((res) => {
        this.props.actions.addNotification(res)
      })
    }

    render () {
      return (
        <div className='my-3 p-3 bg-white rounded shadow-sm'>
          <FormComponent onSubmit={this.onSubmit} />
        </div>
      )
    }
  }

  const mapDispatchToProps = dispatch => ({ actions: bindActionCreators({ [options.action]: actions[options.action], addComputation: actions.addComputation, addNotification: actions.addNotification }, dispatch) })

  return connect(null, mapDispatchToProps)(Form)
}
