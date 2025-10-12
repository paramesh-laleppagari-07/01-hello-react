import React, { Component } from 'react'

class EventBindConstructor extends Component {
  constructor() {
    super()
    this.state = {
      message: 'Hello'
    }
    // Binding clickHandler in constructor
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler() {
    this.setState({ message: 'Goodbye' })
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}

export default EventBindConstructor
