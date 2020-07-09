import React from 'react';

class Line extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: props.index
    };
  }

  render() {
    return (
        <p>line {this.state.index} ----------------------------</p>
    );
  }
}

export default Line;
