import styled, { css } from 'styled-components';

const getTaskStatus = (props) => {
  return !props.inProgress && !props.isDone
    ? taskIsToDo
    : props.isDone
    ? taskIsDone
    : taskIsStarted;
};

export const TaskItemsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-size: 24px;
  margin-top: 1rem;
  padding: 0.5rem;
  //border: 1px solid green;
  box-shadow: 20px 38px 34px -26px hsla(0, 0%, 28%, 0.2);
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  border: solid 2px #535250;
`;

export const TaskItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  &:first-child {
    max-width: 40px;
  }

  &:last-child {
    max-width: 60px;
  }
`;

export const DeleteIcon = styled.div`
  width: 30px;
  height: 30px;
  background-image: url('/assets/images/close-circle-outline.svg');
  background-repeat: no-repeat;
  cursor: pointer;
`;

const taskIsStarted = css`
  width: 30px;
  height: 30px;
  background-image: url('/assets/images/stop-outline.svg');
  background-repeat: no-repeat;
  cursor: pointer;
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
  background-image: url('/assets/images/rocket-outline.svg');
  background-repeat: no-repeat;
`;

//to enchance existing element style we can wrap this element end add some styling
export const LineThrough = styled(TaskItem)`
  text-decoration: line-through;
`;

export const TaskItemFlowIcon = styled.div`
  ${getTaskStatus}
`;
