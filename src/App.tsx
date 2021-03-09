import React from 'react';
import './App.css';
import Beer from './Components/Beer'
import Food from './Components/Food'

function App() {
  return (
    <div className="App">
      <Food />
      <Beer />
    </div>
  );
}

export default App;