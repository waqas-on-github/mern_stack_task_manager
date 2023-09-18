import './taskui.css';
import Task from './Task';

const DisplayTasks = ({ data }) => {
  // Check if data.tasks is an array before mapping
  const tasks = data?.tasks || [];

  return (
    <>
      {tasks.map((task) => (
        <Task key={task._id} task={task} />
      ))}
    </>
  );
};

export default DisplayTasks;
