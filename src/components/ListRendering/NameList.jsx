// src/components/ListRendaring/NameList.jsx
import React from 'react';
import Person from './Person';

function NameList() {
  const persons = [
    { id: 1, name: 'Bruce', age: 30, skill: 'React' },
    { id: 2, name: 'Clark',  age: 35, skill: 'Angular' },
    { id: 3, name: 'Diana',  age: 28, skill: 'Vue' },
  ];

  const personList = persons.map((p) => (
    <Person key={p.id} person={p} />
  ));

  return <div>{personList}</div>;
}

export default NameList;



// import React from 'react';
// import Person from './Person';

// function NameList() {
//   const persons = [
//     { id: 1, name: 'Bruce', age: 30, skill: 'React' },
//     { id: 2, name: 'Clark', age: 35, skill: 'Angular' },
//     { id: 3, name: 'Diana', age: 28, skill: 'Vue' },
//   ];

//   const personList = persons.map(person => (
//     <Person key={person.id} person={person} />
//   ));

//   return <div>{personList}</div>;
// }

// export default NameList;

