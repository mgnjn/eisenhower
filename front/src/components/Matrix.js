import React from "react";
import TodoForm from "./TodoForm";
import Expiration from "./Expiration";

function Matrix() {
  return (
    <>
      <Expiration />
      <TodoForm type="Important, Urgent" />
      <TodoForm type="Important, Not Urgent" />
      <TodoForm type="Not Important, Urgent" />
      <TodoForm type="Not Important, Not Urgent" />
    </>
  );
}

export default Matrix;
