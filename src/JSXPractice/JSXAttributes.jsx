import React from "react";

const JSXAttributes = () => {
  const imageURL = "https://via.placeholder.com/150";
  const handleClick = () => alert("Button Clicked!");

  return (
    <div>
      <h2>JSX Attributes Example</h2>

      {/* className replaces 'class' in HTML */}
      <p className="text-info">This is styled using className attribute.</p>

      {/* htmlFor replaces 'for' in HTML */}
      <label htmlFor="username">Enter your name: </label>
      <input type="text" id="username" />

      {/* Event handler attribute */}
      <button onClick={handleClick}>Click Me</button>

      {/* src attribute for image */}
      <img src={imageURL} alt="Placeholder" />
    </div>
  );
};

export default JSXAttributes;
