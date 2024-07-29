// src/App.js
import { useState } from 'react';
import TaskList from './components/TaskList';
import Search from './components/Search';
import AddTask from './components/AddTask';
import { tasksData } from './tasks';

const App = () => {
  const [tasks, setTasks] = useState(tasksData);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAdd = (newTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1, completed: false, updatedAt: new Date().toISOString() }]);
  };

  const handleUpdate = (id) => {
    const updatedTitle = prompt('Enter new title:');
    const updatedDescription = prompt('Enter new description:');
    if (updatedTitle && updatedDescription) {
      setTasks(tasks.map(task => task.id === id ? { ...task, title: updatedTitle, description: updatedDescription, updatedAt: new Date().toISOString() } : task));
    }
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredTasks = tasks.filter(task => task.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-primary mb-4">Todo List</h1>
      <AddTask onAdd={handleAdd} />
      <Search searchTerm={searchTerm} onSearch={handleSearch} />
      <TaskList tasks={filteredTasks} onUpdate={handleUpdate} onDelete={handleDelete} onComplete={handleComplete} />
    </div>
  );
};

export default App;
