// src/components/ListRendaring/Person.jsx
import React from 'react';

function Person({ person }) {
  if (!person) {
    // Safe fallback — helps with debugging
    return <div>Person data not provided</div>;
  }

  return (
    <div>
      <h2>
        I am {person.name}. I am {person.age} years old. I know {person.skill}.
      </h2>
    </div>
  );
}

export default Person;


// import React from 'react';

// function Persons({ person }) {
//   return (
//     <div>
//       <h2>
//         I am {person.name}. I am {person.age} years old. I know {person.skill}.
//       </h2>
//     </div>
//   );
// }

// export default Persons;
