import AddBoxIcon from "@mui/icons-material/AddBox";
import Button from "@mui/material/Button";

import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";

function TodoForm({ todos, setTodos }) {
  const blankTodo = {
    task: "",
    id: "",
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
      quadrant: todos.quadrant,
      label: todos.label,
      id: identifier,
      task: todo.task,
      completed: false,
    };

    setTodos({
      quadrant: todos.quadrant,
      label: todos.label,
      todoItems: [...todos.todoItems, newTodo],
    });
    setTodo(blankTodo);
  };

  return (
    <>
      <div>
        <form>
          <label> {todos.label}</label>
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
