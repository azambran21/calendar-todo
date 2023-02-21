import React from 'react';
import { useState } from 'react';

function Task({task}) {
    return (
      <div className='task'>
        {task.text}
      </div>
    )
  }
  
  function TaskForm ({addTask}) {
    const [userInput, setUserInput] = useState('');
    const handleChange = (e) =>{
      setUserInput(e.target.value)
    }
    const handleSubmit = (e) =>{
      e.preventDefault();
      if (!userInput) return;
      addTask(userInput);
      setUserInput('');
    }
    return(
    <div id = 'task-form-container'>
    <form id= 'task-form' onSubmit = {handleSubmit} >
        <input id = 'task-form-input' value = {userInput} type = 'text' onChange={handleChange} placeholder='New Task' name = 'task'>
        </input>
        <button id = 'add-task' type = 'submit' class = 'btn' onSubmit = {handleSubmit}>
        +
        </button>
    </form>
  </div>
    )
  }
 
function Form() {
    const [tasks, setTasks] = useState([]);
    const addTask = (text) =>{
    const newTasks = [...tasks, {text}];
    setTasks(newTasks);
  }
    return(
        <div>
            <TaskForm addTask={addTask}/>
            <div id='task-list'>
            {tasks.map((task, index) =>(
            <Task key = {index} index = {index} task = {task}/>
            ))}
          </div>
        </div>
    )
}
    
export default Form;