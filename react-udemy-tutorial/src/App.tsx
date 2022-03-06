import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FormElements } from './components/FormElements';

function App() {
  return (
    <div className="App">
      <FormElements />
    </div>
  );
}

export default App;


/**
 *    FORMS
 * Son lo mismo, pero en React puedes anular el valor 
 * predeterminado de ir a una nueva página si hace clic en enviar/botones
 * 
 * Para lograr eso, podemos utilizar onSubmit prop y pasar una función
 * hacia este. Dentro de la función usamos event.preventDefault()
 * 
 *  INPUT
 * onChange - Diferente en React. Cuando introduces un valorr, una función 
 * será llamada.
 * 
 * value - Si utilizas this, entonces no puedes modificar el valor del input
 * a menos que cambies el prop del value. Por ejemplo, si ingresas value="123",
 * aunque ingreses otros caracteres, no cambiará el valor.
 * De esa forma, value será utilizado junto al onChange y utilizando un state
 * 
 * defaultValue - Igual que value en HTML. Este será un defaultValue cuando el componente
 * moonte el que puedas editar.
 * 
 *  TEXTAREA
 * value - No puedes modificar el valor a menos que modifiques su prop
 * defaultValue - Será el valor default cuando el component monte el que puedas editar
 * onChange - La prop será llamada en cada input
 *
 *  SELECT
 *  - value
 *  - defaultValue
 *  - onChange
 */