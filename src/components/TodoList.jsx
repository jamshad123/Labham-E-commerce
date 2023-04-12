import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useContext } from "react";
import { newcontext } from "../App";
import { MdDeleteForever } from "react-icons/md";
import { GiRoyalLove } from "react-icons/gi";
import { Table } from 'react-bootstrap'


function TodoList() {
  const {array,setarray}=useContext(newcontext);
    const [todos, setTodos] = useState([]);
    const [showCompleted, setShowCompleted] = useState(false);
    

    useEffect(() => {
      axios.get('https://jsonplaceholder.cypress.io/todos')
      .then(response => {
        setTodos(response.data);
        
        setarray(todos)
        console.log(array);
      })
      .catch(error => {
        console.log(error);
      });
  }, [todos]);


  const Delete = (id) => {

    axios
      .delete(`https://jsonplaceholder.cypress.io/todos/${id}`)
      .then((res) => setTodos(res.data))
      alert("deleted");
      setTimeout(() => {
        window.location.reload(false);
      }, 4000);
    
  };
  // const handleCheckboxChange = () => {
  //   setShowCompleted(!showCompleted);
  // };
//   const filteredTodos = showCompleted ? todos : todos.filter(todo => !todo.completed);

    
  return (
    <div className='test'>
         <h1 className='heading'><b>Todo List</b></h1>
         <label>
        Show Completed Todos
        <input
          type="checkbox"
          checked={showCompleted}
          onChange={event => setShowCompleted(event.target.checked)}
        />
      </label>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? 'Yes' : 'No'}</td>
              <td><button className='delete'onClick={() => Delete(todo.id)}><MdDeleteForever/></button></td>
              <td><button className='delete'><GiRoyalLove/></button></td>
              <td><Link to={`/details/${todo.id}`}><button className='button-1'>Show Details</button></Link></td>
            </tr>
          ))}
        </tbody>
        <Link to={"/addTodo"}><button className='button-2'><b>Add Todo</b></button></Link>
      </Table>

    </div>
  )
}

export default TodoList