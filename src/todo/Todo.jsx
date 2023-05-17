import React from "react";
import { BiTrashAlt } from "react-icons/bi";
import style from "./Todo.module.css";
function Todo(props) {
  const { title, desc } = props.todo;
  const { id } = props;
  const handleClick = (id) => {
    props.onRemoveTodo(id);
  };
  return (
    <>
      <section className={style.todo_body}>
        <div>
          <h5>{title}</h5>
          <p>{desc}</p>
        </div>
        <button className={style.btn} onClick={() => handleClick(id)}>
          <BiTrashAlt />
        </button>
      </section>
    </>
  );
}

export default Todo;
