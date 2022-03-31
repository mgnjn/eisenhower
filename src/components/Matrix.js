import React from "react";
import TodoList from "./TodoList";

function Matrix() {
  return (
    <>
      <TodoList type="Important, Urgent" />
      <TodoList type="Important, Not Urgent" />
      <TodoList type="Not Important, Urgent" />
      <TodoList type="Not Important, Not Urgent" />
    </>
  );
}

export default Matrix;
