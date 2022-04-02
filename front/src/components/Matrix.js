import React from "react";
import TodoForm from "./TodoForm";
import Expiration from "./Expiration";

function Matrix() {
  return (
    <>
      <Expiration />
      <TodoForm type="1" label="Important, Urgent" />
      <TodoForm type="2" label="Important, Not Urgent" />
      <TodoForm type="3" label="Not Important, Urgent" />
      <TodoForm type="4" label="Not Important, Not Urgent" />
    </>
  );
}

export default Matrix;
