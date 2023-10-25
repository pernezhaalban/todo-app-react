
import { useState } from 'react';
import TodoHeader from './components/TodoHeader';
import './styles/App.css';
import TodoList from './components/TodoList';

function App() {

  const [todos, setTodos] = useState([
    {
      key: 'todo-1',
      text: 'read a book',
      isCompleted: false

    },
    {
      key: 'todo-2',
      text: 'read a book noob',
      isCompleted: true

    }
  ])


  return (
    <div className="App">
      <h1>Todo App</h1>
      <hr></hr>
      <TodoHeader setTodos={setTodos} />
      <TodoList todos={todos} />

    </div>
  );
}

export default App;
