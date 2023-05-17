import React, { useState } from "react";
import style from "./NewTodo.module.css";

function NewTodo(props) {
  // use State
  const [todo, setTodo] = useState({ title: "", desc: "" });
  //   destructuring
  const { title, desc } = todo;
  // input value change handler
  const handleChange = (e) => {
    const name = e.target.name;
    setTodo((oldTodo) => {
      return { ...oldTodo, [name]: e.target.value };
    });
  };
  // form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo({ title: "", desc: "" });
    props.onAddTodo(todo);
  };
  return (
    <>
      <div className={style.todos}>
        <form onSubmit={handleSubmit} className="col-8 mx-auto">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title :
            </label>
            <input
              type="text"
              name="title"
              className="form-control"
              id="title"
              value={title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">
              Description :
            </label>
            <input
              type="text"
              name="desc"
              className="form-control"
              id="title"
              value={desc}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default NewTodo;
