// src/components/TaskList.js
import Task from './Task';

const TaskList = ({ tasks, onUpdate, onDelete, onComplete }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onUpdate={() => onUpdate(task.id)}
          onDelete={() => onDelete(task.id)}
          onComplete={() => onComplete(task.id)}
        />
      ))}
    </div>
  );
};

export default TaskList;
