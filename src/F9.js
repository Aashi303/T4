
import React, { useState, useEffect } from 'react';
const F9 = () => {
    const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);
    
},[])
  return (
    <div> <p>Seconds: {seconds}</p> </div>
  ) }
export default F9
