import React, { Component } from 'react';
import NavBar from './components/NavBar';

import HomePage from './pages/HomePage';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {/* <Introduction /> */}
      </div>
    )
  }
}

