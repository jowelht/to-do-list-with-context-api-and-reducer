import '../assets/css/style.css'
import ToDoBody from '../layouts/todo-body';
import ToDoProvider from '../contexts/to-do-context';
function Home() {
  return (
    <>
      <ToDoProvider>
          <ToDoBody/>
      </ToDoProvider>
    </>
  );
}

export default Home;
