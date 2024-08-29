import React, { createContext } from "react"
import F13 from "./F13"

function Comp(){
const Num1 = createContext();
const Num2 = createContext();
 return (
 <>
 <Num1.Provider value="red">
 <Num2.Provider value="5">
 <F13/>
 </Num2.Provider>
 </Num1.Provider>
 </>
 )
}
export default Comp
export {Num1,Num2}
