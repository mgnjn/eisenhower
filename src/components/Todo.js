import React, { useState } from "react";

import { Button } from "@mui/material";
function Todo({ todo, removeTodo }) {
  return (
    <>
      <li>
        {todo.text}
        <Button
          size="small"
          variant="text"
          onClick={() => {
            removeTodo(todo.id);
          }}
        >
          Remove
        </Button>
        <br></br>
      </li>
    </>
  );
}

export default Todo;
