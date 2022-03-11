import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducer/rootReducer';

const store = createStore(rootReducer, { users: ['Rysh', 'May'], fruits: ['apple', 'avocado'] });

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Switch>
            <Route component={AboutPage} path="/about" />
            <Route component={HomePage} path="/" />
          </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
