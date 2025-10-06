import React, { Component } from 'react';

class Updating extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("Constructor called");
  }

  componentDidMount() {
    console.log("componentDidMount called");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate called");
    return true; // return false to prevent re-render
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate called");
    return null; // can return value to componentDidUpdate
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate called");
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    console.log("Render called");
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Updating;
