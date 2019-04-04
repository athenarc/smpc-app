import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Toast from './Toast'

import actions from '../actions'
const closeNotification = actions.closeNotification

class NotificationService extends Component {
  closeNotification (id) {
    this.props.actions.closeNotification({ id })
  }

  render () {
    return (
      <div className='toasts-wrapper' aria-live='polite' aria-atomic='true'>
        {
          this.props.notifications.map((notification) =>
            <Toast {...notification} key={notification.id} onClose={() => this.closeNotification(notification.id)} />
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
