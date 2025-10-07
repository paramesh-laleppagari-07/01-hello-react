import React from "react";

const JSXListExample = () => {
  const skills = ["HTML", "CSS", "JavaScript", "ReactJS"];

  return (
    <div>
      <h2>JSX List Rendering</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default JSXListExample;
