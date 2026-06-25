import { useEffect } from 'react'
import './App.css'
import {TodoForm} from './components/TodoForm.jsx'
import {TodoList} from './components/TodoList.jsx'
import { useTodos } from './hooks/useTodos.js'

function App() {
  const {todos, cargarTodos} = useTodos()

  useEffect(() => {
    cargarTodos()
  }, [])


  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm onCreated={cargarTodos}/>
      <TodoList todos={todos} onChanged={cargarTodos}/>
    </div>
  )
}


export default App
