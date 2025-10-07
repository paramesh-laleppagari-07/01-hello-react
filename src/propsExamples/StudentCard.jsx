// src/propsExamples/StudentCard.jsx
import React from "react";

// Multiple props: name, age, course
function StudentCard({ name, age, course }) {
  return (
    <div style={{ border: "2px solid blue", padding: "10px", margin: "8px" }}>
      <h3>Student Name: {name}</h3>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
    </div>
  );
}

export default StudentCard;
