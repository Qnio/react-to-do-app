import {
  TaskItemsContainer,
  TaskItemIcon,
  TaskItem,
  LineThrough,
  TaskIsStarted,
} from './todo-display.styles';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';

const handleOptionForTrigger = (progress, done) => {
  return !progress && !done ? 'inProgress' : 'isDone';
};

const DisplayTasksList = ({ task, handleTaskProgress }) => {
  const { id, taskName, isDone, inProgress } = task;
  return (
    <TaskItemsContainer>
      <TaskItem>{id}.</TaskItem>
      {isDone ? (
        <LineThrough>{taskName}</LineThrough>
      ) : (
        <TaskItem>{taskName}</TaskItem>
      )}

      <TaskItem>
        <TaskItemIcon
          onClick={() =>
            handleTaskProgress(id, handleOptionForTrigger(inProgress, isDone))
          }
          isDone={isDone}
          inProgress={inProgress}
          bgImage={IoCheckmarkDoneSharp}
        ></TaskItemIcon>
      </TaskItem>
    </TaskItemsContainer>
  );
};

export default DisplayTasksList;
