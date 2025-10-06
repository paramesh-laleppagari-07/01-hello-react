import React from 'react';

function Welcome(props) {
  return (
    <div>
      <h1>Welcome, {props.name}!</h1>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default Welcome;

//app.jsx
// import React from 'react';
// import Welcome from './Welcome';

// function App() {
//   return (
//     <div>
//       <Welcome name="Paramesh" age={22} />
//       <Welcome name="Seenu" age={24} />
//     </div>
//   );
// }

// export default App;
