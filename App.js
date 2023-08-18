import logo from "./logo.svg";
import "./App.css";
import Header from "./Mycomponents/Header";
import TodoItem from "./Mycomponents/TodoItem";
import Todos from "./Mycomponents/Todos";
import AddTodo from "./Mycomponents/AddTodo";
import Footer from "./Mycomponents/Footer";
import { useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  // const  [todolist,settodos] =useState([ 
  //   {sno:1,title:"Go to the market ",desc:"Go to the market get job done 1"},
  //   {sno:2,title:"Go to the office  ",desc:"Go to the office get job done 2"},
  //   {sno:3,title:"Go to the store ",desc:"Go to the store get job done 3"}
  // ]) ;
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  
  const onDelete = (todo) => {
    console.log("I am on", todo);
   

    settodos(todo.filter((e) => {
      return e !== todo;
    }));
    console.log("deleted", todo)
    localStorage.setItem("todos", JSON.stringify(todos))
    // localStorage.setItem("todos", JSON.stringify(todo));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  //Just return strings but it should be rapped
  return (
    <> 
    <Router>
      <Header title="My Todos List" searchBar={false} /> 
      <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} /> 
            </>)
          }}> 
          </Route>
          <Route exact path="/about">
            <About />
          </Route> 
        </Switch> 
      <Footer />
    </Router>
    </>
  );
}

export default App;
