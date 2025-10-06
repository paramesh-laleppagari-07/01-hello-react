import React from 'react';

function MyComponent() {
  return (
    <div>
      <h1>Hello, I am a Function Component!</h1>
    </div>
  );
}

export default MyComponent;


// Explanation line by line:

    // import React from 'react';
    // Import React library (required for JSX).
    // function MyComponent() { ... }
    // Defines the component as a JavaScript function.
    // return (<div>...</div>)
    // The function returns JSX, which defines what will be rendered.
    // export default MyComponent;
    // Makes this component importable in other files.