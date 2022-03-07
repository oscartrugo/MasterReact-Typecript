import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Instruction } from './components/Instruction';
import ReusableButton from './components/ReusableButton';

function App() {
  return (
    <div className="App">
      <Instruction />
      <ReusableButton />
    </div>
  );
}

export default App;
