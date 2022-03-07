import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';

function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;

/**
 * La agrupación (bundling) es excelente, pero a medida que crece su aplicación, 
 * su paquete (bundle) también crecerá. Especialmente si incluye grandes bibliotecas de terceros
 * 
 *    CODE SPLITTING
 * Puede ayudarte en las cargas lentas únicamente en las cosas que son necesarias para el usuario
 * Reduce la cantidad de código necesitado ruante la carga inicial y mejora el performance de tu app.
 *  
 *    DYNAMIC IMPORT
 * Es una forma de code splitting en nuestra aplicación utilizando sintaxis de importación dinámica
 * 
 * Cuando webpack se encuentra con esta sintaxis, automáticamente empieza el a divivdir el código
 * (code-splitting) en nuestra app y esta es configurada en Create React App
 * 
 *
 */
