import React from 'react';

//IMPORT CUSTOM COMPONENTS
import DisplayTasksList from '../to-do-display/todo-display.component';

class ToDoData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoList: [{ id: 0, taskName: 'Task 1', isDone: true }],
      task: '',
      name: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      task: '',
      name: '',
    });

    console.log(this.state);
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { task, name } = this.state;
    return (
      <div className='todo-form-container'>
        <div className='todo-form-container__form'>
          <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              name='task'
              value={task}
              onChange={this.handleChange}
            />
            <input
              type='text'
              name='name'
              value={name}
              onChange={this.handleChange}
            />
            <button type='submit'>Add Task</button>
          </form>
        </div>
        <div className='todo-form-container__tasks'>
          {this.state.toDoList.map((task) => (
            <DisplayTasksList key={task.id} task={task} />
          ))}
        </div>
      </div>
    );
  }
}

export default ToDoData;
