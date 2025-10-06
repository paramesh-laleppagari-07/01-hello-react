import React from 'react';

// Import all Function-Based Components
import Counter from './fbc/Counter';
import MyComponent from './fbc/MyComponent';
import Timer from './fbc/Timer';
import UserCard from './fbc/UserCard';
import Welcome from './fbc/Welcome';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>React FBC Practice App</h1>

      {/* MyComponent */}
      <section style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
        <h2>MyComponent Example</h2>
        <MyComponent />
      </section>

      {/* Welcome with props */}
      <section style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
        <h2>Welcome Component Example</h2>
        <Welcome name="Paramesh" age={22} />
        <Welcome name="Seenu" age={24} />
      </section>

      {/* UserCard with state */}
      <section style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
        <h2>UserCard Component Example</h2>
        <UserCard name="Paramesh" age={22} />
        <UserCard name="Seenu" age={24} />
      </section>

      {/* Counter component */}
      <section style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
        <h2>Counter Component Example</h2>
        <Counter />
      </section>

      {/* Timer component */}
      <section style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
        <h2>Timer Component Example</h2>
        <Timer />
      </section>
    </div>
  );
}

export default App;
