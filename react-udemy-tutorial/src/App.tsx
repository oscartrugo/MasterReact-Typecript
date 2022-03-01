import React from 'react';
import logo from './logo.svg';
import './App.css';
import SuperComponent from './components/SuperComponent';
import { Input } from './components/Input';

class App extends React.Component {
  // inputRef: HTMLInputElement | null;
  inputRef: React.RefObject<HTMLInputElement>

  constructor(props: {}) {
    super(props);

    // callbackRef initialize
    // this.inputRef = null;

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    // callbackRef
    // console.log(this.inputRef);
    // this.inputRef && this.inputRef.focus();

    this.inputRef.current && this.inputRef.current.focus();
  }

  // callback ref
  // getInputRef = (element: HTMLInputElement) => {
  //   this.inputRef = element;
  // }

  render() {
    return (
      <React.Fragment>
        <h1>My App</h1>
        <input ref={this.inputRef} />
        <SuperComponent />
        <Input />
      </React.Fragment>
    );
  }
}

export default App;
/**
 * En algunos casos querrás acceder al nodo de tu elemento para hacer
 * algo(por ejemplo, hacer focus u obtener una posición)
 * 
 * Puedes utilizar Vanilla(eje: querySelector), pero hay una forma en React
 * para hacer esto.
 * 
 */

/**
 *    REFS
 * Refs provee una forma de acceder a los nodos del DOM o elementos React creados
 * en el render method.
 * 
 * Los refs objects son actualizados dentro del componentDidMount y componentDidUpdate.
 * 
 * Algunos buenos casos de uso:
 * - Manejando enfoque, text selection o media playback
 * - Obteniendo la posición de un elemento
 * - Activando animaciones imperativas.
 * - Integrando con librerías DOM de terceros
 */