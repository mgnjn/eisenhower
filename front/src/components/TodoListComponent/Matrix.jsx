import { Button } from "@mui/material";
import React from "react";
import { observer } from "mobx-react-lite";
import { useUserStore } from "../../stores/user.store";
import { QUADRANTS } from "../../utils/constants";
import TodoBox from "./TodoBox";

const Matrix = observer(() => {
  const userStore = useUserStore();
  const todosStore = userStore.todosStore;

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

  return (
    <>
      <Button onClick={() => todosStore.switchStandard()}>
        {userStore.todosStore.isStandard == true
          ? "Toggle Matrix"
          : "Toggle Standard"}
      </Button>
      {userStore.todosStore.isStandard == true ? (
        <TodoBox quadrant={QUADRANTS.q0} label="Tasks" />
      ) : (
        <EisenhowerTodoList />
      )}
    </>
  );
});

export default Matrix;
