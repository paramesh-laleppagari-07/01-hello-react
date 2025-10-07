// src/propsExamples/DefaultWelcome.jsx
import React from "react";

function DefaultWelcome({ name }) {
  return <h2>Welcome, {name}!</h2>;
}

// Default prop value
DefaultWelcome.defaultProps = {
  name: "Guest User",
};

export default DefaultWelcome;
