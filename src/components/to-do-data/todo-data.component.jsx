import React from 'react';

//IMPORT CUSTOM COMPONENTS
import DisplayTasksList from '../to-do-display/todo-display.component';

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
  MinimalGraphicContainer,
} from './todo-data.syles';

class ToDoData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoList: [],
      inProgressList: [],
      task: '',
      id: 1,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const copyTasks = [...this.state.toDoList];
    const task = {
      id: this.state.id,
      taskName: this.state.task,
      inProgress: false,
      isDone: false,
    };
    copyTasks.push(task);
    this.setState({ toDoList: copyTasks, id: this.state.id + 1, task: '' });

    console.log(this.state);
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleTaskProgress = (taskId, option) => {
    const takeAllTasks = [...this.state.toDoList];
    const triggeredTasks = takeAllTasks.map((task) => {
      if (task.id === taskId) {
        task[option] = !task[option];
        return task;
      } else return task;
    });

    this.setState({ toDoList: triggeredTasks }, () => console.log(this.state));
  };

  handleDeleteTask = (taskId) => {
    this.setState({
      toDoList: Object.values(this.state.toDoList).filter(
        (task) => task.id !== taskId
      ),
    });
  };

  render() {
    const { task } = this.state;
    return (
      <ToDoContainer>
        <h1>Build your plan for today.</h1>
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
              {this.state.toDoList.map((task) => {
                if (!task.inProgress && !task.isDone) {
                  return (
                    <DisplayTasksList
                      key={task.id}
                      task={task}
                      handleDeleteTask={this.handleDeleteTask}
                      handleTaskProgress={this.handleTaskProgress}
                    />
                  );
                } else return [];
              })}
            </ToDoTaskListTaskElement>
            <ToDoTaskListTaskElement>
              {this.state.toDoList.map((task) => {
                if (task.inProgress && !task.isDone) {
                  return (
                    <DisplayTasksList
                      key={task.id}
                      task={task}
                      handleDeleteTask={this.handleDeleteTask}
                      handleTaskProgress={this.handleTaskProgress}
                    />
                  );
                } else return [];
              })}
            </ToDoTaskListTaskElement>
            <ToDoTaskListTaskElement>
              {this.state.toDoList.map((task) => {
                if (task.isDone) {
                  return (
                    <DisplayTasksList
                      key={task.id}
                      task={task}
                      handleDeleteTask={this.handleDeleteTask}
                      handleTaskProgress={this.handleTaskProgress}
                    />
                  );
                } else return [];
              })}
            </ToDoTaskListTaskElement>
          </ToDoTaskListContainer>
        </ToDoTasksList>
        <MinimalGraphicContainer>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/craft.png`}
            alt='some awesome graphic'
          />
        </MinimalGraphicContainer>
      </ToDoContainer>
    );
  }
}

export default ToDoData;
