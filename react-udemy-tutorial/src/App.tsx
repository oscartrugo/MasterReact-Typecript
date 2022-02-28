import React from 'react';
import logo from './logo.svg';
import './App.css';
import UsersManagement from './components/UsersManagement';
import { Instruction } from './components/Instruction';

function App() {
  return (
    <div className="App">
      <Instruction />
      <UsersManagement />
    </div>
  );
}

export default App;
