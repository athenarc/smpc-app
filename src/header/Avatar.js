import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NavLink } from 'react-router-dom'

import actions from '../actions'

class Avatar extends React.Component {
  constructor () {
    super()
    this.logout = this.logout.bind(this)
  }

  logout () {
    this.props.actions.logout()
  }

  render () {
    const { user } = this.props
    const isAuthenticated = user && user.isAuthenticated
    return (
      <ul className='navbar-nav flex-fill justify-content-end'>
        {!isAuthenticated
        ? (<NavLink to='/login' className='btn btn-primary'>Login</NavLink>
        ) : (
          <li className='nav-item rounded-circle dropdown dropleft'>
            <span className='avatar dropdown-toggle caret-off' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' id='avatar-dropdown'>
              {user.username[0].toUpperCase()}
            </span>
            <div className='dropdown-menu' aria-labelledby='avatar-dropdown'>
              <button className='dropdown-item' onClick={this.logout}>Logout</button>
            </div>
          </li>
      )}
      </ul>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({ user: state.user })
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ logout: actions.logout }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Avatar)
