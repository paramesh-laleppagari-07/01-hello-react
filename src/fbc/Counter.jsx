import React, { useState } from 'react';

// Function Component with State (Using useState Hook)
// Function components can use state with the useState hook.

function Counter() {
  const [count, setCount] = useState(0); // useState hook

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
