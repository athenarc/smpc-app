import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import LoginView from './LoginView'
import actions from '../actions'
const login = actions.login

class Login extends React.Component {
  constructor () {
    super()
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (values) {
    this.props.actions.login({}, { username: values.username, token: values.token})
  }

  render () {
    return (
      <section className='aggregation'>
        <div className='jumbotron'>
          <div className='container'>
            <h1 className='display-4'>Login</h1>
            <p className='lead'>Login</p>
            <hr className='my-4' />
            <p>
              Login to have access
            </p>
          </div>
        </div>
        <div className='container'>
          <LoginView onSubmit={this.onSubmit} />
        </div>
      </section>
    )
  }
}

const mapDispatchToProps = dispatch => ({actions: bindActionCreators({ login }, dispatch)})

export default connect(null, mapDispatchToProps)(Login)
