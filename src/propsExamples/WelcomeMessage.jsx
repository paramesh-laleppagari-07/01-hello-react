// src/propsExamples/WelcomeMessage.jsx
import React from "react";

// Function component receiving props
function WelcomeMessage({ name }) {
  return <h2>Hello, {name}! Welcome to React Props 😊</h2>;
}

export default WelcomeMessage;
