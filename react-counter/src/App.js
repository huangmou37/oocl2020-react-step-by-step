import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {number: props.number};
  }
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <button onClick={() => { this.setState({number: 1}); }}>Hello world!</button>
            <p>{this.state.number}</p>
          </header>
        </div>
    );
  }
}

export default App;
