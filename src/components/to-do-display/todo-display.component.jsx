import {
  TaskItemsContainer,
  TaskItemIcon,
  TaskItem,
  LineThrough,
} from './todo-display.styles';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';

const DisplayTasksList = ({ task, handleTaskIsDone }) => {
  const { id, taskName, isDone } = task;
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
          onClick={() => handleTaskIsDone(id)}
          isDone={isDone}
          bgImage={IoCheckmarkDoneSharp}
        ></TaskItemIcon>
      </TaskItem>
    </TaskItemsContainer>
  );
};

export default DisplayTasksList;
