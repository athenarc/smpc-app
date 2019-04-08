import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Toast from './Toast'

import actions from '../actions'
const closeNotification = actions.closeNotification

const types = {
  'error': 'text-danger',
  'success': 'text-success',
  'warning': 'text-warning',
}

class NotificationService extends Component {
  closeNotification (id) {
    this.props.actions.closeNotification({ id })
  }

  render () {
    return (
      <div className='toasts-wrapper' aria-live='polite' aria-atomic='true'>
        {
          this.props.notifications.map((notification, index) =>
            <Toast {...notification} key={index} onClose={() => this.closeNotification(notification.id)} type={types[notification.type]} />
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    notifications: state.notifications
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ closeNotification }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationService)
