import React from "react";

const JSXStylingInline = () => {
  const styleObj = {
    color: "blue",
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <div>
      <h2>Inline Styling Example</h2>
      <p style={{ color: "red" }}>This text is red using inline style.</p>
      <p style={styleObj}>This text uses style object.</p>
    </div>
  );
};

export default JSXStylingInline;
