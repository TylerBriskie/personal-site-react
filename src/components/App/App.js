import React, { Component } from 'react';
import Header from '../Header/header';
import Nav from '../Nav/nav';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav destinations = {['GitHub', 'SoundCloud', 'Portfolio', 'Arcade', 'Contact']} />
      </div>
    );
  }
}

export default App;
