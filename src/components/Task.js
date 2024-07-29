// src/components/Task.js
import { useState } from 'react';

const Task = ({ task, onUpdate, onDelete, onComplete }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border p-4 mb-2">
      <div className="flex justify-between items-center">
        <h3 className={`text-lg ${task.completed ? 'line-through' : ''}`}>{task.title}</h3>
        <div>
          <button onClick={() => setIsExpanded(!isExpanded)} className="mr-2">
            {isExpanded ? 'Collapse' : 'Expand'}
          </button>
          <button onClick={onComplete} className="text-green-500 mr-2">
            {task.completed ? 'Undo' : 'Complete'}
          </button>
          <button onClick={onUpdate} className="text-blue-500 mr-2">
            Update
          </button>
          <button onClick={onDelete} className="text-red-500">
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
