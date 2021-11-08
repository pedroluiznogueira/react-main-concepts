import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Practice from './components/Practice';

function App() {

  let element = {
    "age": "10"
  }

  return (
    <div className="form-container">
      <Login />
      <Practice element={element} />
    </div>
  );
}

export default App;
