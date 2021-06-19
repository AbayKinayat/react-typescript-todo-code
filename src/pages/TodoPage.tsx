import React, { useState, useEffect } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import ITodo from '../interfaces';

const TodoPage: React.FC = () => {  

  const [todos, setTodos] = useState<ITodo[]>([
    { id: 1, title: 'Купить молоко', completed: false }
  ]);

  const addHandler = (title: string) => {
    if (title) {
      const newTodo = {
        id: Date.now(),
        title: title,
        completed: false
      }

      setTodos(prev => [...prev, newTodo])
    }
  }

  const toggleHandler = (id: number) => {
    setTodos(prev =>
      prev.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  const removeTodo = (id: number) => {
    setTodos((prev: ITodo[]) => prev.filter(todo => todo.id !== id))
  }

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
    setTodos(saved)
  }, [])


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div>
      <TodoForm
          onAdd={addHandler}
        />
        {
          todos.length < 1 ?
            <div style={{ padding: 10, margin: "0 auto" }}>Нет дел...</div>
            :
            <TodoList
              todos={todos}
              removeTodo={removeTodo}
              onToggle={toggleHandler}
            />
        }
    </div>
  ) 
}

export default TodoPage;