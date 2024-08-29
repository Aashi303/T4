import React from 'react';
import h from './1.png'
function Avatar() {
    const pic =h;
    const description = 'test image';
    return (
    <img
    className="pic"
    src={h}
    alt={description}
    />
    );
   }
   export default Avatar;