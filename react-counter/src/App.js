import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={onClickHelloWorld}>Hello world!</button>
        <label>number: 0</label>
      </header>
    </div>
  );
}

function onClickHelloWorld() {
  alert('now you know how to handle onclick event');
}

export default App;
