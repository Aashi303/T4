import React from 'react';

const UserCard1 = ({ name, age, email }) => {
  return (
    <div>
      <h2>User Card 1</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserCard1;