import React, { Component } from 'react';

class Mounting extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "Mounting Phase!" };
    console.log("Constructor called");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps called");
    return null; // no state update here
  }

  componentDidMount() {
    console.log("componentDidMount called");
  }

  render() {
    console.log("Render called");
    return (
      <div>
        <h1>{this.state.message}</h1>
        <p>Mounting example component</p>
      </div>
    );
  }
}

export default Mounting;
