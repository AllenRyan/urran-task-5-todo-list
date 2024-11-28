import React from 'react'
import { useState } from 'react';
import { IoIosClose } from "react-icons/io";


const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  function handleInput(event){
    setNewTask(event.target.value);
  }

  function addTasks(){
    if(newTask?.trim("")){
        setTasks((t) => [...tasks, newTask]);
        setNewTask("")
    }
  }
  function removeTask(index){
     setTasks(tasks.filter((_, i) => i !== index))
  };

  return (
    <div className='container'>
   <h1 className='h1'>Todo-List</h1>

   <div className='flex'>
    <input className='input' value={newTask} placeholder='Add New Task' type="text" onChange={handleInput} required />
    <button className='btn' onClick={addTasks} >Add</button>
   </div>
  
  <div>
    <ol>
       {tasks.map((task, index) => (
        <li className='text' key={Math.random()}>
            {task}
            <button className='btn-2' onClick={() => removeTask(index)}><IoIosClose className='remove-btn' /></button>
        </li>
       ))}
    </ol>

  </div>

    </div>
  );
}

export default Todo