import styled from 'styled-components';
import { boxFrameWithShadow } from '../../shared/shared';

export const ToDoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
  width: 80%;
  margin: 20px auto;
`;

export const ToDoContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100px;
`;

export const ToDoForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 600px) {
    width: 100%;

    @content;
  }
`;

export const ToDoFormButton = styled.button`
  height: 40px;
  width: 80px;
  color: white;
  font-weight: bold;
  background-color: black;
  ${boxFrameWithShadow}
`;

export const ToDoContainerFormInput = styled.input`
  width: 50%;
  margin: 10px;
  padding: 0 1rem;
  height: 3rem;
  font-size: 1.4rem;
  ${boxFrameWithShadow}
  &:focus {
    outline: none;
    background-color: white;
    border-bottom: 2px solid #08d1a2;
  }
  @media (max-width: 600px) {
    width: 100%;

    @content;
  }
`;

export const ToDoTasksList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

//--------------------------TODO TASK LIST HEADER-----------------------//
export const ToDoTasksListHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;
export const ToDoTasksListHeaderItem = styled.div`
  width: 30%;
  font-size: 1.4rem;
  text-align: left;
  padding-bottom: 1rem;
`;
//--------------------------TODO TASK LIST HEADER-------------------END-//

//--------------------------TODO TASK LIST CONTAINER-----------------------//

export const ToDoTaskListContainer = styled.div`
  width: 100%;

  display: flex;
  gap: 2rem;
  flex-direction: row;
`;

export const ToDoTaskListTaskElement = styled.div`
  display: flex;
  flex-direction: column;

  width: 30%;
  min-height: 200px;
  padding: 2rem;
  ${boxFrameWithShadow}
`;

//--------------------------TODO TASK LIST CONTAINER-------------------END-//
