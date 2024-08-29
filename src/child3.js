import React, { useContext } from 'react';
import { ColorContext } from './Parent2';

const Child = () => {
  const color = useContext(ColorContext);

  return (
    <div style={{ backgroundColor: color, width: '200px', height: '200px' }}>
      <h2>Child Component</h2>
      <p>Received Color: {color}</p>
    </div>
  );
};

export default Child;