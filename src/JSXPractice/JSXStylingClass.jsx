import React from "react";
import "./JSXStylingClass.css"; // make sure this file exists

const JSXStylingClass = () => {
  return (
    <div>
      <h2 className="main-heading">Class-based Styling Example</h2>
      <p className="paragraph">This paragraph is styled using external CSS.</p>
    </div>
  );
};

export default JSXStylingClass;
