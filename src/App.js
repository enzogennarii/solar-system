import React, { Component } from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';
import './App.css';
import trybe from './images/trybe.svg';

class App extends Component {
  render() {
    return (
      <main className="App">
        <Header />
        <SolarSystem />
        <Missions />
        <img className="trybe-logo" src={ trybe } alt="Logo da Trybe" />
      </main>
    );
  }
}

export default App;
