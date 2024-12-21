import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TodoList from './components/TodoList';

function App() {

  const [todos, setTodos] = useState([]);

  return (
    <>
      <Header />
      <TodoList setTodos={setTodos} todos={todos} />
    </>
  )
}

export default App
