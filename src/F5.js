function Example()
{const arr=["a","java","Full Stack","567","Python"];
return (<div><h1>map function</h1>
{ arr.map((value)=>
{return <p>array values= {value.toUpperCase()}</p>
})}</div>)}
export default Example