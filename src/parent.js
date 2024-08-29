import React from 'react';
import UserCard1 from './child1';
import UserCard2 from './child2';

const ParentComponent = () => {
  const user1 = {
    name: 'Alice',
    age: 25,
    email: 'alice@example.com',
  };

  const user2 = {
    name: 'Bob',
    age: 30,
    email: 'bob@example.com',
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <UserCard1 name={user1.name} age={user1.age} email={user1.email} />
      <UserCard2 name={user2.name} age={user2.age} email={user2.email} />
    </div>
  );
};

export default ParentComponent;