import { createContext } from 'react';
import React, { useState } from 'react';
//import { ColorContext } from '../context/ColorContext';
import Child from './child3';
export const ColorContext = createContext('red');
const Parent = () => {
    const [color, setColor] = useState('red');
  
    return (
      <div>
        <h2>Parent Component</h2>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <ColorContext.Provider value={color}>
          <Child />
        </ColorContext.Provider>
      </div>
    );
  };
  
  export default Parent
  