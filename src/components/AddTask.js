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
        className="border p-2 w-full mb-2"
      />
      <textarea
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <button onClick={handleAdd} className="bg-primary text-white p-2 w-full">
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
