import { useEffect, useState } from 'react';
import axios from '../api/axios';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    axios.get('/api/todos/')
      .then(res => setTasks(res.data))
      .catch(err => console.error(err));
  }, []);

  const createTask = () => {
    if (!title.trim()) return;

    axios.post('/api/todos/', { title, completed: false })
      .then(res => {
        setTasks(prev => [...prev, res.data]);
        setTitle('');
      })
      .catch(err => console.error(err));
  };

  const toggleTask = (id, completed) => {
    axios.patch(`/api/todos/${id}/`, { completed: !completed })
      .then(res => {
        setTasks(tasks.map(task =>
          task.id === id ? res.data : task
        ));
      })
      .catch(err => console.error(err));
  };

  const deleteTask = (id) => {
    axios.delete(`/api/todos/${id}/`)
      .then(() => setTasks(tasks.filter(task => task.id !== id)))
      .catch(err => console.error(err));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-6">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">📝 My To-Do List</h1>

        <div className="flex gap-2 mb-6">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter a new task..."
          />
          <button
            onClick={createTask}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow"
          >
            Add
          </button>
        </div>

        <ul className="space-y-3">
          {tasks.map(task => (
            <li
              key={task.id}
              className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded-lg shadow-sm border hover:bg-gray-100 transition"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id, task.completed)}
                  className="w-5 h-5 accent-blue-500"
                />
                <span className={`text-lg ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                  {task.title}
                </span>
              </div>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-500 hover:text-red-700 text-lg"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskList;
