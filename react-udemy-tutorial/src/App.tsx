import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Instruction } from './components/Instruction';
import MessageEveryday from './components/MessageEveryday';

function App() {
  return (
    <div className="App">
      <Instruction />
      <MessageEveryday />
    </div>
  );
}

export default App;
