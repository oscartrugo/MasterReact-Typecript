import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/**
 * PURE COMPONENT
 * Is similar to React.Component 
 * 
 * Difference is it implements shouldComponentUpdate() with a shallow prop and a state comparison
 * 
 * If you have a nested data structure and it didn't rerenders, 
 * use this.forceUpdate() to trigger a force update
 * 
 * Better to use deep cloning before you update your state to prevent issues
 * as this only do shallow comparison
 * 
 * Performance boost in some cases.
 */

/**
 *  React.Memo
 * Is a higher order component for functional component
 * 
 * If component renders same result given the same props, 
 * you can wrap it with this so it will not rerender
 * 
 * Performance boost with some cases by memoizing the result
 * 
 * This only do shallow checks for prop changes
 * 
 * React.Memo(Component, compareFunction)
 *  - Component: component to memoize result
 *  - compareFunction(prevProps, nextProps) - used if you want to do your own comparison
 *  - Return true if will not rerender, false if will reremder. 
 *    Opposite of shouldComponentUpdate
 */

/**
 * Tip.
 * This might cause your component not to rerender when you expect it to rerender,
 * make sure you understand how to use it
 * 
 * Shallow comparison is NOT that CHEAP, so DO NOT USE THEM EVERYWHERE
 * 
 * Check how big the object is and how often does your component rerenders
 * 
 * As a developer it will be our job to use it the right way because instead of improving
 * performance, we might degrade it
 */