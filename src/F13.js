import React, { useContext } from "react"
import { Num1,Num2 } from "./F12"
function F13(){
 const num1 = useContext(Num1)
 const num2 = useContext(Num2)
 return (
 <h1 style={{color:num1,fontSize:num2}}>Multiplication of numbers in component-3:</h1>
 )
}
export default F13