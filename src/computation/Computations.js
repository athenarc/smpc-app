import React from 'react'
import * as moment from 'moment'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import algorithms from '../smpc-global/algorithms.json'

import actions from '../actions'
const checkComputationStatus = actions.checkComputationStatus
const deleteComputation = actions.deleteComputation

class Computations extends React.Component {
  constructor () {
    super()
    this.onSubmit = this.onSubmit.bind(this)
    this.deleteComputation = this.deleteComputation.bind(this)
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

  getAlgorithm (key) {
    const algo = algorithms.find(item => item.name === key)

    if (!algo) {
      return null
    }

    return algo.title
  }

  getAcceptedTime (timestamps) {
    return timestamps && timestamps.accepted ? moment(timestamps.accepted).format('DD/MM/YYYY') : ''
  }

  getStatusBadge (status) {
    switch (status) {
      case 'completed':
        return <span className='badge badge-success'>Successed</span>
      case 'failed':
        return <span className='badge badge-danger'>Failed</span>
      case 'processing':
        return <span className='badge badge-info'>Processing</span>
      case 'pending':
        return <span className='badge badge-info'>Pending</span>
      default:
        return null
    }
  }

  getAttributes (attributes) {
    return attributes.map((item) => item.name).join(', ')
  }

  render () {
    return (
      <section className='computations'>
        <div className='container'>
          <div className='card-columns'>
            {
              this.props.computations.map((c, index) => (
                <div className='card computation' key={index}>
                    <div className='computation-menu' id='computation-menu' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                      <div className='dots text-muted' />
                      <div className='dropdown-menu dropdown-menu-right' aria-labelledby='computation-menu' onClick={() => {console.log('yo')}}>
                        <button type='button' className='dropdown-item' onClick={(e) => { console.log('mesa'); this.checkStatus(c.id)}}>Check status</button>
                        <button type='button' className='dropdown-item' onClick={(e) => this.deleteComputation(c.id)}>Delete</button>
                      </div>
                    </div>
                  <Link to={`/computation/${c.id}`}>
                    <div className='card-body'>
                      <h5 className='card-title'>{this.getAlgorithm(c.algorithm)}</h5>
                      <p className='card-text id'>ID: {c.id}</p>
                      <p className='card-text attributes'>Attributes: {this.getAttributes(c.attributes)}</p>
                      <p className='card-text'><small className='text-muted'>Accepted at: {this.getAcceptedTime(c.timestamps)}</small></p>
                    </div>
                    <div className='card-body status'>
                      {this.getStatusBadge(c.status)}
                    </div>
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({ computations: state.computations })

const mapDispatchToProps = dispatch => ({actions: bindActionCreators({ checkComputationStatus, deleteComputation }, dispatch)})

export default connect(mapStateToProps, mapDispatchToProps)(Computations)
