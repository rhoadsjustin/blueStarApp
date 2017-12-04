import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Search from './Search.js';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Blue Star Sports</h1>
          <NavLink 
            to="/search"
            activeStyle
            activeClassName>Search</NavLink>
          <NavLink
            to="/favorites"
            activeStyle
            activeClassName>| Favorites</NavLink>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
       <Route path='/search' component={Search} />
       
      </div>
      </Router>
    );
  }
}

export default App;
