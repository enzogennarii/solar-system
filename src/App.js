import React, { Component } from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <SolarSystem />
        <Missions />
      </main>
    );
  }
}

export default App;
