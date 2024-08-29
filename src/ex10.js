import React, {useState,useEffect } from 'react'
const UE1 = () => {
 const[count,setcount]=useState(0);
 const[calculation,setcal]=useState(0);
// when the page is rendered for first time and also when Button A(count) clicked.
 useEffect(()=>
 {
 alert("Clicked") 
 },[count]);
// only once when the page is rendered 
// useEffect(()=>
//  {
//  alert("Clicked") 
//  },[]);
// when the page is rendered for first time and also on every update/event triggered
//  useEffect(()=>
//  {
//  alert("Clicked") 
//  });
 const changeCount=()=>{
 setcount(count+1);
 }
 const changeCalc=()=>{
 setcal(calculation+1);
 }
 return (
 <div>
 <button onClick={changeCount}>Button A {count}</button><br/>
 <button onClick={changeCalc}>Button B {calculation}</button>
 </div>
 ) }
export default UE1