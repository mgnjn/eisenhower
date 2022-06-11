import React from "react";
import TodoForm from "./TodoForm";
import Expiration from "./Expiration";

function Matrix() {
  return (
    <>
      <Expiration />
      <TodoForm id="q1" label="Important, Urgent" />
      <TodoForm id="q2" label="Important, Not Urgent" />
      <TodoForm id="q3" label="Not Important, Urgent" />
      <TodoForm id="q4" label="Not Important, Not Urgent" />
    </>
  );
}

export default Matrix;
