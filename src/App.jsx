import React from 'react'

import NameList from './components/ListRendering/NameList'
import Person   from './components/ListRendering/Person'
import StyleSheet from './Styling/StyleSheet'
import InlineCss from './Styling/InlineCss'
import styles from './AppStyles.module.css'
import './AppStyles.css'


function App() {
  return (
    <div>
      <h1>Styles in react</h1>
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      {/* <StyleSheet primary={true}/>
      <InlineCss/> */}
      {/* <Person person={{ id: 1, name: 'Bruce', age: 30, skill: 'React' }} /> */}
    
    </div>
  )
}

export default App





// src/propsExamples/App.jsx

// import React from "react";
// import WelcomeMessage from "./propsExamples/WelcomeMessage";
// import StudentCard from "./propsExamples/StudentCard";
// import UserProfile from "./propsExamples/UserProfile";
// import ProductCard from "./propsExamples/ProductCard";
// import DefaultWelcome from "./propsExamples/DefaultWelcome";

// function App() {
//   const productInfo = {
//     name: "React Course",
//     price: 499,
//     category: "Programming",
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1> React Props Examples</h1>

//       {/* 1️ Basic Prop */}
//       <WelcomeMessage name="Paramesh" />

//       {/* 2️ Multiple Props */}
//       <StudentCard name="Seenu" age="23" course="MCA" />
//       <StudentCard name="Immadad Ali" age="40" course="Faculty" />

//       {/* 3️ Class Component Props */}
//       <UserProfile
//         name="Paramesh"
//         role="Student"
//         college="Santhi Ram Engineering College"
//       />

//       {/* 4️ Dynamic Props */}
//       <ProductCard product={productInfo} />

//       {/* 5️ Default Props */}
//       <DefaultWelcome 
//         name="Paramesh"
//         role="Student"
//         college="Santhi Ram Engineering College"
//       />
//     </div>
//   );
// }

// export default App;




// State Practice Components

// import CounterFunction from "./statePractice/CounterFunction";
// import CounterClass from "./statePractice/CounterClass";
// import ControlledForm from "./statePractice/ControlledForm";
// import UseReducerCounter from "./statePractice/UseReducerCounter";
// import ComplexState from "./statePractice/ComplexState";
// import TodoApp from "./statePractice/TodoApp";

// function App() {
//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>React State Practice 🚀</h1>
//       {/* Uncomment the component you want to test ,uncomment what you want check*/}
//       <TodoApp />
//       <ControlledForm/>
//       <ComplexState />
//       <CounterFunction />
//       <CounterClass />
//       <ControlledForm />
//       <UseReducerCounter />
//     </div>
//   );
// }
// export default App;

// JSX Practice Components

// import BasicJSX from "./JSXPractice/BasicJSX";
// import JSXAttributes from "./JSXPractice/JSXAttributes";
// import StringLiterals from "./JSXPractice/StringLiterals";
// import StringExpressions from "./JSXPractice/StringExpressions";
// import JSXCommands from "./JSXPractice/JSXCommands";
// import JSXListExample from "./JSXPractice/JSXListExample";
// import JSXStylingInline from "./JSXPractice/JSXStylingInline";
// import JSXStylingClass from "./JSXPractice/JSXStylingClass";
// import JSXFragment from "./JSXPractice/JSXFragment";
// import JSXComments from "./JSXPractice/JSXComments";

// function App() {
//   return (
//     <div>
//       <h1>React JSX Practice 🚀</h1>
//       <BasicJSX />
//       <JSXAttributes />
//       <StringLiterals />
//       <StringExpressions />
//       <JSXCommands />
//       <JSXListExample />
//       <JSXStylingInline />
//       <JSXStylingClass />
//       <JSXFragment />
//       <JSXComments />
//     </div>
//   );
// }

// export default App;





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
