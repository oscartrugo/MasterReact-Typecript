import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { Router, Route, Switch } from 'react-router';
import AboutPage from './components/AboutPage';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Route component={AboutPage} path="/about" />
        <Route render={(routeProps) =>  <HomePage {...routeProps} />} path="/home" />
        <Route children={(routeProps) => routeProps.match ? <HomePage {...routeProps} /> : <div>Does not match</div>} path="/children" />
    </BrowserRouter>
  );
}

export default App;
