import AddBoxIcon from "@mui/icons-material/AddBox";
import Button from "@mui/material/Button";

import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";

function TodoForm({ id, label, todos, setTodos }) {
  const blankTodo = {
    task: "",
    todoId: "",
    completed: false,
    deleted: false,
  };

  const [todo, setTodo] = useState(blankTodo);

  const handleInputChange = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };

  const onAddTodo = () => {
    if (todo.task === "") return;

    const identifier = nanoid();

    const newTodo = {
      key: identifier,
      todoId: identifier,
      task: todo.task,
      completed: false,
      deleted: false,
    };

    setTodos([...todos, newTodo]);
    setTodo(blankTodo);
  };

  return (
    <>
      <div>
        <form>
          <label> {label}</label>
          <input
            type="text"
            onChange={(e) => handleInputChange(e)}
            value={todo.task}
          />
          <Button startIcon={<AddBoxIcon />} onClick={() => onAddTodo()} />
        </form>
      </div>
    </>
  );
}

export default TodoForm;
