import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={onClickHelloWorld}>Hello world!</button>
        <label id="label">number: 0</label>
      </header>
    </div>
  );
}

function onClickHelloWorld() {
  document.getElementById("label").innerText = 'number: 1';
}

export default App;
