import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
function Todo({ id, todo, removeTodo, completeTodo }) {
  return (
    <>
      <Checkbox size="small" onClick={() => completeTodo(id)} />
      {todo.text}
      <Button
        size="small"
        variant="text"
        startIcon={<DeleteIcon />}
        onClick={() => {
          removeTodo(id);
        }}
      />

      <br></br>
    </>
  );
}

export default Todo;
