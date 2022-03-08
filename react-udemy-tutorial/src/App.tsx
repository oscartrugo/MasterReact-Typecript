import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Instruction } from './components/Instruction';
import RoutingPractice from './components/RoutingPractice';

function App() {
  return (
    <div className="App">
      <Instruction />
      <RoutingPractice />
    </div>
  );
}

export default App;
