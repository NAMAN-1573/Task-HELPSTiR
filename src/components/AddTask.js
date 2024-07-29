// src/components/AddTask.js
import { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAdd = () => {
    if (title && description) {
      onAdd({ title, description });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border transition-transform transform hover:scale-105 rounded-md p-2 w-full mb-2 text-black font-bold"
      />
      <textarea
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border transition-transform transform hover:scale-105 rounded-md p-2 w-full mb-2 text-black font-bold"
      />
      <button onClick={handleAdd} className="  bg-slate-700 border-r-black text-white p-2 w-full hover:bg-blue-700 transition duration-300">
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
