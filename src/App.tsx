import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import LoginControl from './components/LoginControl';
import Greeting from './components/Greeting';
import Practice from './components/Clock';
import Clock from './components/Clock';

function App() {

  return (
    <div className="form-container">
      <Login />
      <LoginControl />
    </div>
  );
}

export default App;
