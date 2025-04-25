import React, { useEffect, useState } from 'react';

const API_BASE = 'http://192.168.1.116:8000/api/todos/';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  // Fetch all tasks
  useEffect(() => {
    fetch(API_BASE)
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  // Create new task
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(API_BASE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, completed: false }),
    })
      .then(res => res.json())
      .then(newTask => {
        setTasks(prev => [...prev, newTask]);
        setTitle('');
      });
  };

  // Delete task
  const handleDelete = (id) => {
    fetch(`${API_BASE}${id}/`, {
      method: 'DELETE',
    }).then(() => {
      setTasks(prev => prev.filter(task => task.id !== id));
    });
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Add task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => handleDelete(task.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
