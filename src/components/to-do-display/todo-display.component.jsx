import {
  TaskItemsContainer,
  TaskItemFlowIcon,
  TaskItem,
  LineThrough,
  TaskIsStarted,
  DeleteIcon,
} from './todo-display.styles';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';

const handleOptionForTrigger = (progress, done) => {
  return !progress && !done ? 'inProgress' : 'isDone';
};

const DisplayTasksList = ({ task, handleTaskProgress, handleDeleteTask }) => {
  const { id, taskName, isDone, inProgress } = task;
  console.log('Fired up!');
  return (
    <TaskItemsContainer>
      <TaskItem>{id}.</TaskItem>
      {isDone ? (
        <LineThrough>{taskName}</LineThrough>
      ) : (
        <TaskItem>{taskName}</TaskItem>
      )}

      <TaskItem>
        <DeleteIcon onClick={() => handleDeleteTask(id)}></DeleteIcon>
        <TaskItemFlowIcon
          onClick={() =>
            handleTaskProgress(id, handleOptionForTrigger(inProgress, isDone))
          }
          isDone={isDone}
          inProgress={inProgress}
          bgImage={IoCheckmarkDoneSharp}
        ></TaskItemFlowIcon>
      </TaskItem>
    </TaskItemsContainer>
  );
};

export default DisplayTasksList;
