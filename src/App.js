import React, { Component } from 'react'

import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Header from './header/Header'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/main.scss'

class App extends Component {
  render() {
    return (
      <main className="App">
        <Header />
      </main>
    );
  }
}

export default App;
