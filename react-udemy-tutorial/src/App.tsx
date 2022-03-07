import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { Router, Route, Switch, Redirect } from 'react-router';
import AboutPage from './components/AboutPage';
import { BrowserRouter, Link } from 'react-router-dom';
import ProfilePage from './components/ProfilePage';
import { SpecialLink } from './components/SpecialLink';

function App() {
  return (
    <BrowserRouter>
      <Link component={SpecialLink} to="/home">Home</Link>
      <br/>
      <Link component={SpecialLink} to="/about">About</Link>
      <br/>
      <Link component={SpecialLink} to="/profile">Profile</Link>
      <Switch>
        <Route component={AboutPage} path="/about" />
        <Route component={HomePage} path="/home" />
        <Route component={ProfilePage} path="/profile" />
        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
