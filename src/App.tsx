import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Practice from './components/Practice';

function App() {
  
  return (
    <div className="form-container">
      <Login />
      <Practice name="pedro"/>
    </div>
  );
}

export default App;
