import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Books from "./redux/books/books";
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
          <Route path="/">
            <Books />
          </Route>
          <Route path="/books">
            <Books />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
