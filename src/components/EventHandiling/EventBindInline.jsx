import React, { Component } from 'react'

// Inline Arrow Function in Render
class EventBindInline extends Component {
  constructor() {
    super()
    this.state = {
      message: 'Hello'
    }
  }

  clickHandler() {
    this.setState({ message: 'Goodbye' })
  }

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        {/* Inline arrow function */}
        <button onClick={() => this.clickHandler()}>Click Me</button>
      </div>
    )
  }
}

export default EventBindInline
