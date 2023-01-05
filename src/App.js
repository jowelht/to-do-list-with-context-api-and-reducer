
import { useContext } from 'react';
import './assets/css/style.css'
import Header from "./layouts/header";
import {ThemeContext} from './contexts/theme-context';
import ToDoBody from './layouts/todo-body';
import ToDoProvider from './contexts/to-do-context';
const darkTheme = "dark";
function App() {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={theme === darkTheme ? "light": "dark" }>
      <Header  />
      <ToDoProvider>
          <ToDoBody/>
      </ToDoProvider>
    </div>
  );
}

export default App;
