import styled, { css } from 'styled-components';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';

const importImage = (props) => {
  return props.bgImage;
};

export const TaskItemsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-direction: row;

  font-size: 24px;
`;

const taskIsDone = css`
  width: 30px;
  height: 30px;
  background-image: url('/assets/images/checkbox-outline.svg');
`;

const taskIsToDo = css`
  width: 30px;
  height: 30px;
  background-image: url('/assets/images/stop-outline.svg');
`;

const getTaskStatus = (props) => {
  return props.isDone ? taskIsDone : taskIsToDo;
};

export const TaskItemIcon = styled.div`
  ${getTaskStatus}
`;
