// import React from 'react';
// import DisplayTasksList from '../to-do-display/todo-display.component';

// const ToDoSeparateData = ({ toDoList, handleTaskProgress }) => {
//   if (toDoList.length > 0) {
//     toDoList.map((task) => {
//       if (!task.inProgress && !task.isDone) {
//         return (
//           <DisplayTasksList
//             key={task.id}
//             task={task}
//             handleTaskProgress={handleTaskProgress}
//           />
//         );
//       } else if (task.inProgress && !task.isDone) {
//         return (
//           <DisplayTasksList
//             key={task.id}
//             task={task}
//             handleTaskProgress={handleTaskProgress}
//           />
//         );
//       } else if (task.isDone) {
//         return (
//           <DisplayTasksList
//             key={task.id}
//             task={task}
//             handleTaskProgress={handleTaskProgress}
//           />
//         );
//       }
//     });
//   } else return [];
// };

// export default ToDoSeparateData;
