import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
function Todo({ id, todo, removeTodo }) {
  const toggleCompleteTodo = () => {};
  const handleDeleteTodo = (id) => {
    removeTodo(id);
  };
  return (
    <>
      <Checkbox size="small" />
      {todo.task}
      <Button
        size="small"
        variant="text"
        startIcon={<DeleteIcon />}
        onClick={() => {
          handleDeleteTodo(todo.id);
        }}
      />
      <br></br>
    </>
  );
}

export default Todo;
