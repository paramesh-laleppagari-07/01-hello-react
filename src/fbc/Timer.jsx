import React, { useState, useEffect } from 'react';

// 6️⃣ Lifecycle Methods in Function Components (useEffect)
// Function components don’t have componentDidMount or componentDidUpdate, 
// but we can achieve the same with the useEffect hook.
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // Cleanup function (similar to componentWillUnmount)
    return () => clearInterval(interval);
  }, []); // empty dependency array = runs only once after mount

  return <h1>Seconds: {seconds}</h1>;
}

export default Timer;
