import React, { Component } from 'react';
import './App.css';
import TimerDashboard from './js-modules/TimerDashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="title-app">
          <h1>Time tracking</h1>
        </header>

        <TimerDashboard />
      </div>
    );
  }
}

export default App;
