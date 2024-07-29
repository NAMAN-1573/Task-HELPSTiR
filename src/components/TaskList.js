// src/components/TaskList.js
import Task from './Task';

const TaskList = ({ tasks, onUpdate, onComplete }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onUpdate={() => onUpdate(task.id)} onComplete={() => onComplete(task.id)} />
      ))}
    </div>
  );
};

export default TaskList;
