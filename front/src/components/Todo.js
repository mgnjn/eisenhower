import React from "react";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

function Todo({ todo, removeTodo, completeTodo }) {
  const handleCheckboxClick = (id) => {
    completeTodo(id);
  };
  const handleDeleteButtonClick = (id) => {
    removeTodo(id);
  };
  return (
    <>
      <div>
        <Checkbox
          size="small"
          onChange={() => {
            handleCheckboxClick(todo.id);
          }}
        />
        {todo.task}
        <Button
          size="small"
          variant="text"
          startIcon={<DeleteIcon />}
          onClick={() => {
            handleDeleteButtonClick(todo.id);
          }}
        />
        <br></br>
      </div>
    </>
  );
}

export default Todo;
