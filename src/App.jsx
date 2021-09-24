import "./App.css";
import Header from "./components/Header";
import Todos from "./components/Todos";

import AddTodo from "./components/AddTodo";
import About from "./components/About";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const addTodo = (title) => {
    const myTodo = {
      id: Date.now(),
      title: capitalizeFirstLetter(title),
    };
    setTodos([...todos, myTodo]);
  };

  function onEdit(id, newItem) {
    const newTodos = todos.map((item) => (item.id === id ? newItem : item));
    setTodos(newTodos);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  if (todos === undefined) return <h2>loading</h2>;
  return (
    <>
      <Router>
        <Header title="My Todos List" />
        <Switch>
          <Route exact path={["/Todos", "/"]}>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onEdit={onEdit} onDelete={onDelete} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>


      </Router>
    </>
  );
}

export default App;