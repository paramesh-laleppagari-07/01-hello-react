import React, { Component } from 'react';

class Initialization extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      message: "Hello, I am in Initialization phase!"
    };
    console.log("Constructor: Initialization phase");
  }

  render() {
    console.log("Render: Initialization phase");
    return (
      <div>
        <h1>{this.state.message}</h1>
        <p>Props name: {this.props.name}</p>
      </div>
    );
  }
}

export default Initialization;


//app.jsx

// import React, { useState } from 'react';

// Import lifecycle components
// import Initialization from './componentLifecycle/Initialization';
// import Mounting from './componentLifecycle/Mounting';
// import Updating from './componentLifecycle/Updating';
// import Unmounting from './componentLifecycle/Unmounting';

// function App() {
//   const [showUnmounting, setShowUnmounting] = useState(true);

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>React Component Lifecycle Demo</h1>

//       <section>
//         <h2>Initialization Phase</h2>
//         <Initialization name="Paramesh" />
//       </section>

//       <section>
//         <h2>Mounting Phase</h2>
//         <Mounting />
//       </section>

//       <section>
//         <h2>Updating Phase</h2>
//         <Updating />
//       </section>

//       <section>
//         <h2>Unmounting Phase</h2>
//         <button onClick={() => setShowUnmounting(!showUnmounting)}>
//           Toggle Unmounting Component
//         </button>
//         {showUnmounting && <Unmounting />}
//       </section>
//     </div>
//   );
// }

// export default App;
