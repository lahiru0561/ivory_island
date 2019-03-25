import React, { Component } from 'react';
import Landing from './components/Landing';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Router>
          <Landing />
        </Router>
      </div>
    );
  }
}

export default App;
