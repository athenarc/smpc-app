import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/js/bootstrap.bundle.min'

import Header from './header/Header'
import NotificationService from './notification/NotificationService'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/main.scss'

import appRoutes from './routes/index.js'

const switchRoutes = (
  <Switch>
    {appRoutes.map((prop, key) => {
      return <Route path={prop.path} component={prop.component} key={key} exact />
    })}
  </Switch>
)

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <NotificationService />
        <main className='main' role='main'>
          {switchRoutes}
        </main>
      </div>
    )
  }
}

export default App
