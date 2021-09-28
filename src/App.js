import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar">
          <h1>Bookstore</h1>
          <Link to="/books">BOOKS</Link>
          <Link to="/categories">CATEGORIES</Link>
        </nav>
        <Switch>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
