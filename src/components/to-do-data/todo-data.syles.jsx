import styled from 'styled-components';

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
  border: none;
  border-radius: 5px;
  box-shadow: 5px 8px 26px 1px #000000;
`;

export const ToDoContainerFormInput = styled.input`
  width: 50%;
  margin: 10px;
  background-color: white;
  display: block;
  height: 2rem;
  font-size: 18px;
  border: 1px solid gray;
  border-radius: 5px;
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

export const ToDoTaskListHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid grey;
  font-size: 24px;
  padding-bottom: 10px;
  @media (max-width: 600px) {
    margin: 40px auto;

    @content;
  }
`;

export const ToDoTasksListHeaderItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &:first-child {
    max-width: 40px;
  }
  &:last-child {
    max-width: 120px;
    justify-content: flex-end;
  }
`;
