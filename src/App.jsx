import React from "react";
import BasicJSX from "./JSXPractice/BasicJSX";
import JSXAttributes from "./JSXPractice/JSXAttributes";
import StringLiterals from "./JSXPractice/StringLiterals";
import StringExpressions from "./JSXPractice/StringExpressions";
import JSXCommands from "./JSXPractice/JSXCommands";
import JSXListExample from "./JSXPractice/JSXListExample";
import JSXStylingInline from "./JSXPractice/JSXStylingInline";
import JSXStylingClass from "./JSXPractice/JSXStylingClass";
import JSXFragment from "./JSXPractice/JSXFragment";
import JSXComments from "./JSXPractice/JSXComments";

function App() {
  return (
    <div>
      <h1>React JSX Practice 🚀</h1>
      <BasicJSX />
      <JSXAttributes />
      <StringLiterals />
      <StringExpressions />
      <JSXCommands />
      <JSXListExample />
      <JSXStylingInline />
      <JSXStylingClass />
      <JSXFragment />
      <JSXComments />
    </div>
  );
}

export default App;



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
