import React, { useState } from "react";
import { nanoid } from "nanoid";
import { observer } from "mobx-react-lite";
import { useUserStore } from "../../stores/user.store";

import AddBoxIcon from "@mui/icons-material/AddBox";
import Button from "@mui/material/Button";

const BLANK_TODO = {
  quadrant: "",
  task: "",
  id: "",
  completed: false,
};

const TodoForm = observer(({ quadrant, label }) => {
  const userStore = useUserStore();
  const todosStore = userStore.todosStore;

  const [currentTodo, setCurrentTodo] = useState(BLANK_TODO);

  const handleInputChange = (e) => {
    setCurrentTodo({ ...currentTodo, task: e.target.value, quadrant, label });
  };

  const onAddTodo = () => {
    if (currentTodo.task === "") return;

    const id = nanoid();

    todosStore.addTodo(quadrant, {
      id,
      quadrant,
      label: todosStore.label,
      task: currentTodo.task,
      completed: false,
    });

    setCurrentTodo(BLANK_TODO);
  };

  return (
    <>
      <div>
        <form>
          <label> {label}</label>{" "}
          <input
            type="text"
            onChange={(e) => handleInputChange(e)}
            value={currentTodo.task}
          />
          <Button
            startIcon={<AddBoxIcon />}
            onClick={() => {
              onAddTodo();
            }}
          />
        </form>
      </div>
    </>
  );
});

export default TodoForm;
