const DisplayTasksList = ({ task }) => {
  const { id, taskName, isDone } = task;
  return (
    <div className='task-item'>
      <div className='task-item__id'>{id}</div>
      <div className='task-item__task'>{taskName}</div>
      <div className='task-item__id'>{isDone ? 'done' : 'not done'}</div>
    </div>
  );
};

export default DisplayTasksList;
