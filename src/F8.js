import React from "react";
//import ReactDOM from "react-dom";

const ChildComponent = ({ name, age, gender = "male" }) => {
    return (
      <div>
        <p>{name}</p>
        <p>{age}</p>
        <p>{gender}</p>
      </div>
    );
  };

const F8 = () => {
  return (
    <div>
      <ChildComponent name="John" age="30" gender="male" />
      <ChildComponent name="Mary" age="25" geneder="female" />
    </div>
  );
};
export default F8