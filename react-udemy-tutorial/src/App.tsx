import React from 'react';
import logo from './logo.svg';
import './App.css';
import Fruits from './components/Fruits';

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <h1>My App</h1>
      <Fruits />
    </React.Fragment>
  );
}

export default App;

/**
 *          KEYS
 * Las Keys ayudan a React a identificar qué items han sido cambiados, agregados
 * o eliminados.
 * 
 * Deben ser dados a los elementos dentro del arreglo para dar a los elementos
 * una identidad estable.
 * 
 * Sólo tienen que ser únicas entre sus hermanos.
 * 
 * Solo son necesarias en el elemento top en el array
 * 
 * Las Keys a veces son un boost de performance, por ejemplo
 * 
 * 
 * 
 * 
 */
