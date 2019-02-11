import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Header from './header/Header'

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
  render() {
    return (
      <div>
        <Header />
        <main className="container main">
          {switchRoutes}
        </main>
      </div>
    );
  }
}

export default App;
