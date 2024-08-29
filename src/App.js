import logo from './logo.svg';
import './App.css';
import Ex from "./ex1";
import './1.png'
import Ex1 from "./ex2";
import Ex2 from "./ex3";
import Ex3 from "./ex4";
import Ex4 from "./ex5";
import Ex5 from "./avatar";
import E from "./ex6"
import US1 from './ex7';
import Main from "./Routing/Main.js";
import Ex8 from './ex8'
import Ex9 from './ex9.js'
import Ex10 from './parent.js'
import Ex11 from './Parent2.js'
import Ex12 from './ex10.js'
import Ex13 from './ex11.js'
import Ex14 from './F1.js'
import F1 from './F1.js'
import F4 from './F4'
import F5 from './F5'
import F6 from './F6'
import F7 from './FormEx';
import F9 from './F9.js'
import F10 from './F10'
import Signup from './Signup.js'

import Login from './Login'
var n = "ABC";


function App() {
 return (
  <div>
    {/* <Ex/>
  <Ex1 name={n} rollnum="101" marks="20" />
  <Ex1 name="DEF" rollnum="102" marks="16" />
  <Ex1 name="GHI" rollnum="103" marks="22.5" />
  <Ex2/>
  <Ex3/>
  <Ex4/>
  <Ex5/>
  <US1/>
  <E/> 
  <Ex8/> */}
  {/* <Main/> */}
  {/* <Ex9/> */}
  {/* <Ex10/> */}
  {/* <Ex12/> */}
  {/* <Ex14/> */}
  {/* <F5  /> */}
  {/* <F4/> */}
  {/* <F6/> */}
  {/* <F7/> */}
  {/* <F9/>
  <F10/> */}

<Signup/>
  <Login/>
 
  {/* <Signup/> */}
  </div>
 );
}
export default App;
// import F8 from './F8'
// import F9 from './F9'
// function App(){
// const arr=["apple", "banana", "kiwi", "orange"];
//     const result = arr.filter((fruit) => {
//     if(fruit.length > 5)
//         { return true;}        
//         else { return false;  }
// } );
// //     var arr1=result.join(",")
//     return (<div>
//   <F9/>
//     </div>
//     )}
// export default App
// import React, { useState } from 'react';
// const App = () => {
//     const [val,setval]=useState("red");
//     function TextChange(){
//       setval("green")
//     }
//   return (
//     <div>
//     <button onClick={TextChange}>Change Image</button>
//     <h1 style={{backgroundColor:val}}>Text</h1>
//     </div>
//   )
// }
// export default App
// import { useEffect } from 'react';
// import React, { useState } from 'react';
// const App = () => {
  
//     const [txt, setTxt] = useState(false);
//     useEffect(() => { setTxt(true); }, []);
//   return <h1>Done: {txt}</h1>; 
// }


// export default App
// import React, { useState, useEffect } from 'react';
// const App = () => {
//     const [seconds, setSeconds] = useState(0);
//   useEffect(() => {
//     setInterval(() => {
//       setSeconds(prevSeconds => prevSeconds + 1);
//     }, 1000);
// },[ ])
//   return (
//     <div> <p>Seconds: {seconds}</p> </div>
//   ) }
// export default App
// import React from 'react';
// const numbers = [1, 2, 3, 4, 5, 6];
// const modifiedNumbers = numbers
//   .filter(number => number % 2 === 0)
//   .map(filteredNumber => filteredNumber * 2);
// function App( ){
//   return (
//     <ul>
//       {modifiedNumbers.map((number) => (
//         <li>{number}</li>
//       ))}
//     </ul>
//   );
// }
// export default App;

// import React, { useReducer } from 'react'
// const App = () => {
//  const [sum,dispatch]=useReducer((state,action)=>{
//  return state+action;
// } ,20);
//  return (
//  <div align="center">
//  <h1 align="center">{sum}</h1>
//  <button onDoubleClick={()=>dispatch(5)}>Add</button>
//  </div>
//  )}
// export default App