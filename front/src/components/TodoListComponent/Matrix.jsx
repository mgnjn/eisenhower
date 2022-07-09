import { Button } from "@mui/material";
import React from "react";
import { observer } from "mobx-react-lite";
import { useUserStore } from "../../stores/user.store";
import { QUADRANTS } from "../../utils/constants";
import TodoBox from "./TodoBox";

const Matrix = observer(() => {
  const userStore = useUserStore();

  const EisenhowerTodoList = () => {
    return (
      <>
        <TodoBox quadrant="q1" label="Important, Urgent" />
        <TodoBox quadrant="q2" label="Important, Not Urgent" />
        <TodoBox quadrant="q3" label="Not Important, Urgent" />
        <TodoBox quadrant="q4" label="Not Important, Not Urgent" />
      </>
    );
  };

  const toggleTodoStandard = (newStandard) => {
    userStore.todosStore.setStandard(newStandard);
  };

  return (
    <>
      <Button onClick={() => toggleTodoStandard(true)}> Standard </Button>
      <Button onClick={() => toggleTodoStandard(false)}> Matrix </Button>
      {userStore.todosStore.isStandard == true ? (
        <TodoBox quadrant={QUADRANTS.q0} label="Tasks" />
      ) : (
        <EisenhowerTodoList />
      )}
    </>
  );
});

export default Matrix;
