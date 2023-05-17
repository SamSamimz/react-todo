import React, { useState } from "react";
import Todos from "./Todos";
import style from "./Home.module.css";
import NewTodo from "./NewTodo";
import { v4 as uuidv4 } from "uuid";

function Home() {
  const [todos, setTodos] = useState([]);
  //   handleaddtodo
  const handleAddToto = (todo) => {
    // console.log(todos);
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), todo }];
    });
  };
  //   Delete todo
  const handleRemoveTodo = (id) => {
    const updateTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodos);
    // console.log(id);
  };
  return (
    <>
      <div className={style.container}>
        <h1 className="text-info pb-3">Todo App</h1>
        <NewTodo onAddTodo={handleAddToto} />
        <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
      </div>
    </>
  );
}

export default Home;
