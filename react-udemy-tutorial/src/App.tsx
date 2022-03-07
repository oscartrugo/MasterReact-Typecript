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

/**
 * 
 *    SUMMARY
 * Component - Te permite dividir la UI en independientes, reutilizables piezas, y pensar acerca
 * de cada piesa en aislamiento.
 * 
 * Props - input/parameters - Puedes utilizarlos para dinámicamente cargar la UI.
 * 
 * State - Data dentro de tu componente que va a activa una recarga cuando la actualizas.
 * 
 * Lifecycle 
 *    - Mounting
 *        - getDeriveredStateFromProps
 *        - render
 *        - componentDidMount
 *
 *    - Unmounting
 *        - componentWillUnmount
 * 
 *    - Updating
 *        - getDerivedStateFromProps
 *        - shouldComponentUpdate
 *        - render
 *        - getSnapshotBeforeUpdate
 *        - componentDidUpdate
 *      
 *    - Lifecycle
 *        - Error Handling
 *            - getDerivedStateFromError
 *            - componentDidCatch
 * 
 *    - Lifecycle - deprecated & unsafe
 *         - componentWillMount
 *         - componentWillReceiveProps
 *         - componentWillUpdate
 * 
 *    - Functional Component - without lifecycle
 *    
 *    - Class Component - with state and lifecycle
 * 
 *    - React.PureComponent - impplements shouldComponentUpdate with shallow checks for props and state
 *    
 *    - React.Memo - shallow check for props in functional component
 *      
 *    - Higher Order Component - a pattern to reuse component logic using function that will return a component
 * 
 *    - RenderProps - patter to reuse component logic by passing component as a prop
 * 
 *    - List - mostly use in array of components/elements so React know which to add/update quickly
 * 
 *    - Refs - use to reference an element
 *        - createRef
 *        - callbackRef
 *        - Forwarding Ref
 * 
 *    - Context - to share data/props in multiple components
 *  
 *    - Lazy & Suspense - use for code splitting with fallback feature while waiting for the code
 * 
 *    - React.Children - to easily manage this.props.children
 * 
 *    - React.cloneElement - to clone an element/componet
 * 
 *    - React.isValidElement - to verify that an obect is an element
 * 
 */