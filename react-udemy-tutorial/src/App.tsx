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
