import { TaskItemsContainer, TaskItemIcon } from './todo-display.styles';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';

const DisplayTasksList = ({ task, handleTaskIsDone }) => {
  const { id, taskName, isDone } = task;
  return (
    <TaskItemsContainer>
      <div className='task-item__id'>{id}.</div>
      <div className='task-item__task'>{taskName}</div>
      <TaskItemIcon
        onClick={() => handleTaskIsDone(id)}
        isDone={isDone}
        bgImage={IoCheckmarkDoneSharp}
      ></TaskItemIcon>
    </TaskItemsContainer>
  );
};

export default DisplayTasksList;
