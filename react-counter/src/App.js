import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onChangeNumber: props.onChangeNumber,
      number: props.number
    };
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <button onClick={() => {
              let newNumber = this.state.onChangeNumber(this.state.number);
              this.setState({number: newNumber});
            }}>Hello world!
            </button>
            <p>{this.state.number}</p>
          </header>
        </div>
    );
  }
}

export default App;
