import React, { useState } from 'react';
import "./ToDo.css"


function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <div className="todo-container">
        <h2>To-Do List</h2>
        <div className="add-task">
          <input
            type="text"
            placeholder="Enter a task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => removeTask(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDo;
