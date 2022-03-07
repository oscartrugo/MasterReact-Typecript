import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { Router, Route, Switch, Redirect } from 'react-router';
import AboutPage from './components/AboutPage';
import { BrowserRouter, Link } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={AboutPage} path="/about" />
        <Route component={HomePage} path="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
