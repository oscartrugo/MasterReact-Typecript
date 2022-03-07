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
 * 
 *    FindDomNode API
 * ReactDOM.findDOMNode(component)
 *    - Component - a React Component
 * 
 * Si el componente ha sido montado en el DOM, este retorna el elemento DOM
 * nativo correspondiente del navegador.
 * 
 * Cuando un componente carga null o false, findDOMNode retorna null
 * 
 * Sólo trabaja en mounted components, si no arroja una excepción
 * 
 * En la mayoría de los casos, puedes adjuntar un ref al nodo del DOM y
 * evitar utilizar findDOMNode por completo (Obsoleto en Strict Mode)
 * 
 */
