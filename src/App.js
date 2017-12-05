import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Search from './Search.js';
import Favorites from './Favorites';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Blue Star Sports</h1>
          <NavLink 
            to="/search">Search</NavLink>
          <NavLink
            to="/favorites">| Favorites</NavLink>
        </header>

       <Route path='/search' component={Search} />
       <Route path='/favorites' component={Favorites} />

      </div>
      </Router>
    );
  }
}

export default App;
