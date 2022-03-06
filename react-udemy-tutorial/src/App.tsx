import React from 'react';
import logo from './logo.svg';
import './App.css';
import StudentGrade from './components/StudentGrade';
import { Instruction } from './components/Instruction';

function App() {
  return (
    <div className="App">
      <Instruction />
      <StudentGrade />
    </div>
  );
}

export default App;
