import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { MyContext, MyContextProvider } from './context/MyContext';

function App() {
  return (
      <MyContextProvider>
        <HomePage />
      </MyContextProvider>
  );
}

export default App;


/**
 * Supongamo que quieres pasar algunos props o data a varios componentes.
 * ¿Qué harías? 
 * 
 * Por ejemplo, tienes un componente padre que obtiene datos de una API,
 * y esos datos deberían ser pasados a varios componentes.
 * 
 * En base a lo aprendido, debería temrinar añadiéndolo al componente del
 * nivel top y pasarlo a cada componente hasta que se alcance los componentes
 * objetivos.
 * 
 * Eso es demasiado trabajo y refactoring por hacer.
 * 
 * Dado que crearemos una interface y vamos a acceder al prop y depsués pasar
 * la información del prop a otro componente y crear otra interface, 
 * y así de manera cíclica.
 * 
 * Para resolver ese problema, utilizamos Context.
 * 
 */

/**
 *    CONTEXT
 * Es una forma de pasar data a través del árbol de componentes
 * sin tener que pasar props manualmente en todos los niveles.
 * 
 * Para un árbol de componentes React, debido a que solo aquellos bajo
 * el contexto de component serán capaces de acceder a la información dentro del context.
 * 
 * Este contexto se utiliza principalmente para el usuario autenticado actual, 
 * el tema o el idioma preferido, etc.
 * 
 * Recuerda, aplícalo moderadamente puesto que hace la reutilización del componente
 * más difícil. 
 */

/**
 *        CONTEXT API
 * Entonces, ¿cuáles son las APIs disponibles para Context?
 * 
 * createContext - Para utilizar esto en el código solo vamos a 
 * hacer React.createContext y podremos pasar un valor default.
 * Ese valor default es el valor o la data que vamos a compartir
 * a otros componentes.
 * 
 * Context.Provider - Create context va a retornar un objeto y ese
 * objeto contendrá Provider. Este provider es en realidad un componente
 * que puede ser usado por los consumidores o los components. De esta 
 * forma ellos pueden obtener la información en tu Context.
 * Para utilizar esto, solo haremos MyContext.Provider, y puedes pasar un
 * prop, el cual es value, y este value será compartido a través
 * de los componentes. 
 * 
 * Context.Consumer - Este es utilizado para consumir la data en nuestro 
 * provider. Para usar esto, solo utilizamos MyContext.Consumer, de nuevo, 
 * es de hecho un componente y este componende debe tener un children que es
 * una función. 
 * 
 * Context.displayName - React DevTools utiliza este string para determinar
 * qué mostrar para el context. Se utiliza para hacer override al nombre de 
 * nuestro Context para poder ver facilmente en el React DevTools.
 * Para utilizar esto, vamos a usar MyContext.displayName.
 * 
 * Class.contextType - Este tipo de Context es otra forma de 
 * suscribir a nuestro Context. Para utilizar esto dentro de nuestro component,
 * tendremos que usar MyClass o MyComponent.contextType
 * 
 * this.context - Si vamos a estar utilizando Class.contextType, entonces para 
 * acceder al value de nuestro provider o context, utilizaremos this.context. 
 * Entonces, para utilizar esto en nuestro código, solo usaremos this.context. 
 * Puesto que estaremos utilizando TypeScript, en el create context tiene 
 * un generic.
 * 
 * Por ejemplo, el siguiente código: 
 * 
 * export interface UserContextType{
 *    users: string[];
 *    updateUsers(users: string[]): void;
 * }
 * 
 * export const UserContext = React.createContext<UserContextType>({
 *    users: [], updateUsers: (users: string[]) => ()
 * });
 * 
 * En este ejemplo tenemos UserContextType, el cual será el tipo de nuestro value.
 * 
 * 
 * Y en el siguiente, para el context type y context, vamos a usar React.ContexType
 * Y después para el value, vamos a utilizar el <typeof UsersContext>
 * 
 * Y para el Consumer, no necesitamos hacer nada dado que el consumer
 * automáticamente detecta el type que necesita utilizar.
 * 
 * Por ejemplo:
 * <UserContext.Consumer>
 *    { value => value.users}
 * </UserContext.Consumer>
 * 
 */