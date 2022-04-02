import AddBoxIcon from "@mui/icons-material/AddBox";
import Button from "@mui/material/Button";

import React from "react";
import { useState } from "react";
import TodoList from "./TodoList";

function TodoForm({ label, type }) {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const addTodo = (e) => {
    if (!input) return;

    const id = Date.now();
    const newTodo = Object.assign({
      key: id,
      type: type,
      id: id,
      text: input,
      completed: false,
      deleted: false,
    });

    setTodos((todos) => [...todos, newTodo]);
    e.preventDefault();
  };

  return (
    <>
      <div>
        <form>
          <label> {label}</label>
          <input
            type="text"
            onChange={(e) => handleInputChange(e)}
            value={input}
          />
          <Button onClick={(e) => addTodo(e)} startIcon={<AddBoxIcon />} />
        </form>
      </div>
      <div>{<TodoList type={type} todos={todos} setTodos={setTodos} />}</div>
    </>
  );
}

export default TodoForm;
