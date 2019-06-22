import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import CheckStatus from './CheckStatus'
import ComputationList from './ComputationList'

import actions from '../actions'
const checkComputationStatus = actions.checkComputationStatus
const deleteComputation = actions.deleteComputation

class Dashboard extends React.Component {
  constructor () {
    super()
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      numberOfRecentComputations: 10
    }
  }

  onSubmit (values) {
    this.props.actions.checkComputationStatus({id: values.computationID})
  }

  checkStatus (id) {
    this.props.actions.checkComputationStatus({ id })
  }

  deleteComputation (id) {
    this.props.actions.deleteComputation({ id })
  }

  getRecentComputations () {
    return _.orderBy(this.props.computations, [(c) => c.timestamps.accepted], ['desc']).slice(0, this.state.numberOfRecentComputations)
  }

  render () {
    return (
      <section className='home'>
        <div className='jumbotron'>
          <div className='container'>
            <h1 className='display-4'>Dashboard</h1>
            <p className='lead'>See and manage your computations</p>
            <hr className='my-4' />
            <p>
              All information regarding your computation requests. This includes recent
              computations and their status: pending, completed, failed. A pending status
              indicates that your requested computation is still being processed. A completed
              status indicates that your computation was executed successfully and your
              results are available. Finally, a failed status indicates that something went
              wrong with your computation and it was terminated before completion.
            </p>
          </div>
        </div>
        <div className='container'>
          <div className='my-3 p-3 bg-white rounded shadow-sm'>
            <h6 className='border-bottom border-gray pb-2 mb-0'>Recent computations</h6>
            <ComputationList computations={this.getRecentComputations()} checkStatus={(id) => this.checkStatus(id)} deleteComputation={(id) => this.deleteComputation(id)} />
            <small className='d-block text-right mt-3'>
              <Link to={'/computations'}>All computations</Link>
            </small>
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

const mapDispatchToProps = dispatch => ({actions: bindActionCreators({ checkComputationStatus, deleteComputation }, dispatch)})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
