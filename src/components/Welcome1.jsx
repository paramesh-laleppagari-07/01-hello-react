import React, { Component } from 'react';

// Class Component with Props
// Props are data passed from parent to child component.
class Welcome1 extends Component {
  render() {
    return (
      <div>
        <h1>Welcome, {this.props.name}!</h1>
        <p>Age: {this.props.age}</p>
      </div>
    );
  }
}

export default Welcome1;
