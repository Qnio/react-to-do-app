//CORE COMPONENTS

//CUSTOM COMPONENTS IMPORT
import ToDoData from './components/to-do-data/todo-data.component';

//Import GlobalStyle
import { GlobalStyle } from './global.styles';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <ToDoData />
    </div>
  );
}

export default App;
