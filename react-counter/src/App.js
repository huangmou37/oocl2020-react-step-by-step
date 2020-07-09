import React from 'react';
import './App.css';
import Number from './components/Number';
import Line from './components/Line';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onChangeNumber: props.onChangeNumber,
      number: props.number,
      lines: []
    };
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <button onClick={() => {
              let newNumber = this.state.onChangeNumber(this.state.number);
              let newLines = [];
              for (let i = 0; i < newNumber; i++) {
                newLines.push(<Line index = {i + 1} />);
              }
              this.setState({number: newNumber, lines: newLines});
            }}>Hello world!
            </button>
            <p><Number />{this.state.number}</p>
            <div className="box-container">
              {this.state.lines}
            </div>
          </header>
        </div>
    );
  }
}

export default App;
