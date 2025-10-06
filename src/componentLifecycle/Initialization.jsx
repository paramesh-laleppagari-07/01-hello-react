import React, { Component } from 'react';

class Initialization extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      message: "Hello, I am in Initialization phase!"
    };
    console.log("Constructor: Initialization phase");
  }

  render() {
    console.log("Render: Initialization phase");
    return (
      <div>
        <h1>{this.state.message}</h1>
        <p>Props name: {this.props.name}</p>
      </div>
    );
  }
}

export default Initialization;
