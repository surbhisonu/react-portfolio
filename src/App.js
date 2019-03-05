import React, { Component } from 'react';
import Navigation from './Component/Navigation';
import Header from './Component/Header';
import Services from './Component/Services';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation LogoTitle="React Portfolio"/>
        <Header title="Stylish Portfolio"/>
        <Services/>
      </div>
    );
  }
}

export default App;
