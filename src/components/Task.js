// src/components/Task.js
import { useState } from 'react';

const Task = ({ task, onUpdate, onDelete, onComplete }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-lightBorder p-4 mb-2 transition-transform transform hover:scale-105">
      <div className="flex justify-between items-center">
        <h3 className={`text-lg ${task.completed ? 'line-through' : ''}`}>{task.title}</h3>
        <div>
          <button onClick={() => setIsExpanded(!isExpanded)} className="mr-2 hover:underline">
            {isExpanded ? 'Collapse' : 'Expand'}
          </button>
          <button onClick={onComplete} className="text-green-500 mr-2 hover:underline">
            {task.completed ? 'Undo' : 'Complete'}
          </button>
          <button onClick={onUpdate} className= " text-cyan-400 mr-2 hover:underline">
            Update
          </button>
          <button onClick={onDelete} className="text-red-500 hover:underline">
            Delete
          </button>
        </div>
      </div>
      {isExpanded && (
        <div className="mt-2">
          <p>{task.description}</p>
          <small>Last updated: {new Date(task.updatedAt).toLocaleString()}</small>
        </div>
      )}
    </div>
  );
};

export default Task;
