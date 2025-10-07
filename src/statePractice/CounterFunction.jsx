import React, { useState } from "react";

export default function CounterFunction() {
  // declare state: count and setter setCount, initial value 0
  const [count, setCount] = useState(0);

  const increment = () => {
    // functional update recommended when new state depends on old
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <h2>Function Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
}
