import React, { Component } from 'react';

class Unmounting extends Component {
  componentWillUnmount() {
    console.log("componentWillUnmount called");
    alert("Component is being removed from DOM!");
  }

  render() {
    return <h1>Unmounting Phase Example</h1>;
  }
}

export default Unmounting;
