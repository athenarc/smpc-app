import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import CheckStatus from './CheckStatus'
import ComputationList from './ComputationList'

import actions from '../actions'
const checkComputationStatus = actions.checkComputationStatus

class Computation extends React.Component {
  constructor () {
    super()
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (values) {
    this.props.actions.checkComputationStatus({id: values.computationID})
  }

  render () {
    return (
      <section className='home'>
        <div className='jumbotron'>
          <div className='container'>
            <h1 className='display-4'>Computation</h1>
            <p className='lead'>Check the status of your computation</p>
            <hr className='my-4' />
            <p>
               All computations
            </p>
          </div>
        </div>
        <div className='container'>
          <div className='my-3 p-3 bg-white rounded shadow-sm'>
            <h6 className='border-bottom border-gray pb-2 mb-0'>Recent computations</h6>
            <ComputationList computations={this.props.computations} />
          </div>
          <div className='my-3 p-3 bg-white rounded shadow-sm'>
            <h6 className='border-bottom border-gray pb-2 mb-0'>Check status</h6>
            <CheckStatus onSubmit={this.onSubmit} />
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({ computations: state.computations })

const mapDispatchToProps = dispatch => ({actions: bindActionCreators({ checkComputationStatus }, dispatch)})

export default connect(mapStateToProps, mapDispatchToProps)(Computation)
