import React, { useState, useEffect } from 'react';

export default function TodoApp() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });

  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = (e) => {
    e.preventDefault();
    const text = newTask.trim();
    if (!text) return;
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
    setNewTask('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div style={{ maxWidth: 500, margin: '2rem auto', padding: '1rem', backgroundColor: '#f3f4f6', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1rem', color: '#1f2937' }}>To‑Do List</h2>

      <form onSubmit={addTask} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        <input
          type="text"
          value={newTask}
          placeholder="Add task..."
          onChange={e => setNewTask(e.target.value)}
          style={{ flexGrow: 1, padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px' }}>Add</button>
      </form>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <button onClick={() => setFilter('all')} style={{ padding: '0.4rem 0.8rem', backgroundColor: filter === 'all' ? '#2563eb' : '#e5e7eb', color: filter === 'all' ? 'white' : '#111827', border: 'none', borderRadius: '4px' }}>All</button>
        <button onClick={() => setFilter('active')} style={{ padding: '0.4rem 0.8rem', backgroundColor: filter === 'active' ? '#2563eb' : '#e5e7eb', color: filter === 'active' ? 'white' : '#111827', border: 'none', borderRadius: '4px' }}>Active</button>
        <button onClick={() => setFilter('completed')} style={{ padding: '0.4rem 0.8rem', backgroundColor: filter === 'completed' ? '#2563eb' : '#e5e7eb', color: filter === 'completed' ? 'white' : '#111827', border: 'none', borderRadius: '4px' }}>Completed</button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredTasks.map(task => (
          <li key={task.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem', borderBottom: '1px solid #d1d5db' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <span style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                color: task.completed ? '#9ca3af' : '#111827'
              }}>
                {task.text}
              </span>
            </div>
            <button onClick={() => removeTask(task.id)} style={{ backgroundColor: 'transparent', color: '#ef4444', border: 'none', fontSize: '1.2rem' }}>×</button>
          </li>
        ))}
      </ul>
    </div>
  );
}