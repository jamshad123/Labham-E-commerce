import React from 'react'
import { useState } from 'react'


const AddTodo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newTodoCompleted, setNewTodoCompleted] = useState(false);

  const handleAddTodo = event => {
    event.preventDefault();
    const newTodo = {
      id: todos.length + 1,
      title: newTodoTitle,
      completed: newTodoCompleted
    };
    setTodos([...todos, newTodo]);
    setNewTodoTitle('');
    setNewTodoCompleted(false);
  };
  return (
    <div className='addtodo'>
    <form method='post' onSubmit={handleAddTodo}>
        <label>
          Title:
          <input
            type="text"
            value={newTodoTitle}
            onChange={event => setNewTodoTitle(event.target.value)}
            />
        </label>
        <label>
          Completed:
          <input
            type="checkbox"
            checked={newTodoCompleted}
            onChange={event => setNewTodoCompleted(event.target.checked)}
          />
        </label>
        <button className='button' type='submit'>Add</button>
    </form>
    </div>
  )
}

export default AddTodo