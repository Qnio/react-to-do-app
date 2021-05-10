import React from 'react';

//IMPORT CUSTOM COMPONENTS
import DisplayTasksList from '../to-do-display/todo-display.component';
import { DragDropContext } from 'react-beautiful-dnd';

//IMPORT STYLE SHEET
import {
  ToDoContainer,
  ToDoContainerForm,
  ToDoContainerFormInput,
  ToDoForm,
  ToDoFormButton,
  ToDoTasksList,
  ToDoTasksListHeader,
  ToDoTasksListHeaderItem,
  ToDoTaskListContainer,
  ToDoTaskListTaskElement,
} from './todo-data.syles';

class ToDoData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoList: [],
      task: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const copyTasks = [...this.state.toDoList];
    const task = {
      id: copyTasks.length + 1,
      taskName: this.state.task,
      isDone: false,
    };
    copyTasks.push(task);
    this.setState({ toDoList: copyTasks });
    this.setState({
      task: '',
    });

    console.log(this.state);
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleTaskIsDone = (taskId) => {
    const takeAllTasks = [...this.state.toDoList];
    const triggeredTasks = takeAllTasks.map((task) => {
      if (task.id === taskId) {
        task.isDone = !task.isDone;
        return task;
      } else return task;
    });

    this.setState({ toDoList: triggeredTasks });
  };

  render() {
    const { task } = this.state;
    return (
      <ToDoContainer>
        <h1>Build your plan.</h1>
        <ToDoContainerForm>
          <ToDoForm onSubmit={this.handleSubmit}>
            <ToDoContainerFormInput
              type='text'
              name='task'
              value={task}
              onChange={this.handleChange}
            ></ToDoContainerFormInput>

            <ToDoFormButton type='submit'>Add Task</ToDoFormButton>
          </ToDoForm>
        </ToDoContainerForm>
        <ToDoTasksList>
          <ToDoTasksListHeader>
            <ToDoTasksListHeaderItem>Task:</ToDoTasksListHeaderItem>
            <ToDoTasksListHeaderItem>In Progress:</ToDoTasksListHeaderItem>
            <ToDoTasksListHeaderItem>Done:</ToDoTasksListHeaderItem>
          </ToDoTasksListHeader>
          <ToDoTaskListContainer>
            <ToDoTaskListTaskElement>
              <DragDropContext>
                {this.state.toDoList.map((task) => (
                  <DisplayTasksList
                    key={task.id}
                    task={task}
                    handleTaskIsDone={this.handleTaskIsDone}
                  />
                ))}
              </DragDropContext>
            </ToDoTaskListTaskElement>
            <ToDoTaskListTaskElement></ToDoTaskListTaskElement>
            <ToDoTaskListTaskElement></ToDoTaskListTaskElement>
          </ToDoTaskListContainer>
        </ToDoTasksList>
      </ToDoContainer>
    );
  }
}

export default ToDoData;
