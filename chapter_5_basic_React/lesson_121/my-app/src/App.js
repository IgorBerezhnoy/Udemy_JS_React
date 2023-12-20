import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

const Header = () => <h2>Hello world</h2>;
const Btn = () => <button>Hello world</button>;

class Field extends Component {
  render() {
    return <input/>;
  }
}

function App() {

  return (
    <div className="App">
      <Header/>
      <Field/>
      <Btn/>
    </div>
  );
}

export default App;
