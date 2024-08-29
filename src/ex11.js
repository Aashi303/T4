import axios from "axios";
import React,{useState,useEffect} from "react";
const baseURL = "https://dog.ceo/api/breeds/image/random";
export default function Ex11() {
 const [post, setPost] = useState("");
 useEffect(() => {
 axios
 .get(baseURL)
 .then((response) => {
 console.log(response.data) // to check received api data. 
 setPost(response.data);
 })
 .catch((error)=>{
 console.error(error);
 });
 });
 return (
 <div>
 <img src={post.message} width="500px" height="500px"/>
 </div>
 );
}
