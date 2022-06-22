import React from "react";
import styled from "styled-components";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoContainer = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;

function Todo({ todo, removeTodo, completeTodo }) {
  const handleCheckboxClick = (id) => {
    completeTodo(id);
  };
  const handleDeleteButtonClick = (id) => {
    removeTodo(id);
  };

  return (
    <>
      <TodoContainer>
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
      </TodoContainer>
    </>
  );
}

export default Todo;
