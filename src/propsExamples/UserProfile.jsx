// src/propsExamples/UserProfile.jsx
import React, { Component } from "react";

class UserProfile extends Component {
  render() {
    return (
      <div style={{ border: "2px solid green", padding: "10px", margin: "8px" }}>
        <h3>User Profile</h3>
        <p>Name: {this.props.name}</p>
        <p>Role: {this.props.role}</p>
        <p>College: {this.props.college}</p>
      </div>
    );
  }
}

export default UserProfile;
