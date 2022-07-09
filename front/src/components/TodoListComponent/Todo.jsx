import React from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { useUserStore } from "../../stores/user.store";

import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoContainer = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  background-color: white;
`;

function Todo({ todo }) {
  const userStore = useUserStore();
  const todosStore = userStore.todosStore;

  const handleCheckboxClick = () => {
    todosStore.completeTodo(todo.quadrant, todo.id);
  };

  const handleDeleteButtonClick = () => {
    todosStore.deleteTodo(todo.quadrant, todo.id);
  };

  return (
    <>
      <TodoContainer>
        <Checkbox
          size="small"
          onChange={() => {
            handleCheckboxClick();
          }}
        />
        {todo.task}
        <Button
          size="small"
          variant="text"
          startIcon={<DeleteIcon />}
          onClick={() => {
            handleDeleteButtonClick();
          }}
        />
        <br></br>
      </TodoContainer>
    </>
  );
}

export default observer(Todo);
