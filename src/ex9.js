import { useState } from "react"; 
function ToDo() { 
    const [tasks, setTasks] = useState([]); 
    const [newTask, setNewTask] = useState(''); 
    function deleteTask(index) 
    { let temp = tasks.filter((ele, i) => i != index);
         setTasks(temp); 
        } 
    function handleClick() 
    { setNewTask(''); 
      setTasks(prev => [...prev, newTask]); } 
      return ( 
      <> <ol> 
        { tasks.map((ele, i) => { return ( <li> {ele} <button key={i} onClick={handleClick} >Delete</button> </li> ) }) } 
        {/* // onClick={() => setTasks(prev => prev.filter((_, index) => i != index))}  */}
        
        </ol> 
        <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
         <button onClick={handleClick}>Add Task</button> </> ) 
         } 
         
        export default ToDo