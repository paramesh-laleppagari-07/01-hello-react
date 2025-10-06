import React from 'react';
import Welcome from './components/Welcome1';
import ClassBased from './components/ClassBased';
import Timer from './components/Timer';
import Counter from './components/Counter';


function App() {
  return (
    <div>
      <ClassBased />
      <Welcome name="Paramesh" age={22} />
      <Welcome name="Seenu" age={24} />
      <Timer />
      <Counter />
    </div>
  );
}

export default App;
