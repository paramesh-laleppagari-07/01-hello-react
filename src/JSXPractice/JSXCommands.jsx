import React from "react";

const JSXCommands = () => {
  const getGreeting = (name) => `Hello, ${name}!`;
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <h2>JSX Commands Example</h2>
      <p>{getGreeting("Paramesh")}</p>
      <p>Current Year: {currentYear}</p>
      <p>{10 + 20}</p>
    </div>
  );
};

export default JSXCommands;
