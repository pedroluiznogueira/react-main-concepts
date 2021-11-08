import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Practice from './components/Clock';
import Clock from './components/Clock';

function App() {

  return (
    <div className="form-container">
      <Login />
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}

export default App;
