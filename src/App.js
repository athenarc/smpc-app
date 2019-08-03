import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import 'bootstrap/dist/js/bootstrap.bundle.min'

import Header from './header/Header'
import NotificationService from './notification/NotificationService'
import PrivateRoute from './routes/PrivateRoute'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/main.scss'

import appRoutes from './routes/index.js'

class App extends Component {
  render () {
    const { user } = this.props
    const isAuthenticated = user && user.isAuthenticated
    return (
      <div>
        <Header />
        <NotificationService />
        <main className='main' role='main'>
          <Switch>
            {appRoutes.map((prop, key) => {
              return prop.private
              ? <PrivateRoute path={prop.path} component={prop.component} key={key} exact isAuthenticated={isAuthenticated} />
              : <Route path={prop.path} component={prop.component} key={key} exact />
            })}
          </Switch>
        </main>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({ user: state.user })

export default withRouter(connect(mapStateToProps, null)(App))
