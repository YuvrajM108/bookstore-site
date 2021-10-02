import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Books from './components/books';
import Categories from './components/categories';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar">
          <div className="nav-elements">
            <h1 className="site-title">Bookstore</h1>
            <Link to="/books" className="navlink">BOOKS</Link>
            <Link to="/categories" className="navlink">CATEGORIES</Link>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <Books />
          </Route>
          <Route path="/books">
            <Books />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
