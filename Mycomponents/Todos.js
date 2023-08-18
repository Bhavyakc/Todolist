import React from 'react'
import TodoItem from './TodoItem'


function Todos(props) {
  return (
    <div className="container">
    <h2 className='text-center my-3' >Todo list</h2>

    {
    props.todos.length===0 ?"No todos to display " :
    props.todos.map( todo =>{
      return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
    })  
    }
    
   

    {/* <p>{props.todolist}</p>   wrong way of doing it*/}

    {/* <p> {props.todolist.sno} </p>
    <p>{props.todolist.title} </p>
    <p>{props.todolist.desc}</p>
     */}

    </div>
  )
} 

export default Todos