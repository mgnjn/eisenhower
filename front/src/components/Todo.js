import React from "react";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { ItemTypes } from "../utils/items";
import { useDrag } from "react-dnd";

function Todo({ todo, removeTodo, completeTodo }) {
  const handleCheckboxClick = (id) => {
    completeTodo(id);
  };
  const handleDeleteButtonClick = (id) => {
    removeTodo(id);
  };

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.TODO,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <>
      <div ref={drag}>
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
