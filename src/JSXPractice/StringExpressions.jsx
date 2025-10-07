import React from "react";

const StringExpressions = () => {
  const buttonText = "Click Here!";
  const inputType = "text";

  return (
    <div>
      <h2>JSX String Expressions Example</h2>
      <input type={inputType} placeholder="Type something..." />
      <button>{buttonText}</button>
    </div>
  );
};

export default StringExpressions;
