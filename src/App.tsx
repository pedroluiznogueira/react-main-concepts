import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import LoginControl from './components/LoginControl';
import Greeting from './components/Greeting';
import Clock from './components/Clock';

function App(props: any) {

  const numbers = props.numbers;
  const listItems = numbers.map((number: any) =>
    <li key={number.toString()}>
      {number}
    </li>
  );

  return (
    <div className="form-container">
      <ul>{listItems}</ul>
      <Login />
      <LoginControl />
    </div>
  );
}

export default App;


