import styled from 'styled-components';

export const ToDoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 20px auto;
`;

export const ToDoContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 400px;
  height: 200px;
`;

export const ToDoForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const ToDoFormButton = styled.button`
  height: 40px;
  width: 80px;
`;

export const ToDoContainerFormInput = styled.input`
  margin: 10px;
  background-color: white;
  display: block;
  height: 2rem;
  font-size: 18px;
  border: 1px solid gray;
  border-radius: 5px;
`;

export const ToDoTasksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
