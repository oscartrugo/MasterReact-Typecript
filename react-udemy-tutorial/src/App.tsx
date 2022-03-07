import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router';
import AboutPage from './components/AboutPage';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route component={AboutPage} path="/:username/about" />
        <Route component={HomePage} path="/" />
      </Switch>
    </Router>
  );
}

export default App;
