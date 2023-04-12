import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { newcontext } from '../App';

function Details() {
  const {array, setarray}=useContext(newcontext)
  const {id} =useParams()
  console.log(id);
  console.log(array);

  const [filter] = array.filter((res => res.id == id));
  console.log(filter);

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.cypress.io/todos/1')
//     .then(response => {
//       setTodos(response.data);
//       console.log(todos);
//       setarray(todos)
//       console.log(array);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }, [todos]);

  return (
    <div className='detail'>
          
             <h1><b>TITLE :</b>{filter.title}</h1>
              <h2><b>ID :</b>{filter.id}</h2> 
              <h2><b>USER ID :</b>{filter.userId}</h2> 
              <h2><b>COMPLETED OR NOT :</b>{filter.completed ? 'Yes' : 'No'}</h2>



    </div>
  )
}

export default Details