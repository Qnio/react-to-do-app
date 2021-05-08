import styled, { css } from 'styled-components';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';

const importImage = (props) => {
  return props.bgImage;
};

const getTaskStatus = (props) => {
  return props.isDone ? taskIsDone : taskIsToDo;
};

export const TaskItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-size: 24px;
`;

export const TaskItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &:first-child,
  &:last-child {
    max-width: 40px;
  }
`;

const taskIsDone = css`
  width: 30px;
  height: 30px;
  background-image: url('/assets/images/checkbox-outline.svg');
  background-repeat: no-repeat;
`;

const taskIsToDo = css`
  width: 30px;
  height: 30px;
  background-image: url('/assets/images/stop-outline.svg');
  background-repeat: no-repeat;
`;

export const LineThrough = styled(TaskItem)`
  text-decoration: line-through;
`;

export const TaskItemIcon = styled.div`
  ${getTaskStatus}
`;
