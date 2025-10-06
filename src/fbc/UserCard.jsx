import React, { useState } from 'react';

// Function Component with Props and State
function UserCard(props) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => setLikes(likes + 1);

  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Likes: {likes}</p>
      <button onClick={handleLike}>Like</button>
    </div>
  );
}

export default UserCard;


//app.jsx
// import React from 'react';
// import UserCard from './UserCard';

// function App() {
//   return (
//     <div>
//       <UserCard name="Paramesh" age={22} />
//       <UserCard name="Seenu" age={24} />
//     </div>
//   );
// }

// export default App;
