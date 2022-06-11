import React from "react";
import TodoBox from "./TodoBox";
import Expiration from "./Expiration";

function Matrix() {
  return (
    <>
      <Expiration />
      <TodoBox id="q1" label="Important, Urgent" />
      <TodoBox id="q2" label="Important, Not Urgent" />
      <TodoBox id="q3" label="Not Important, Urgent" />
      <TodoBox id="q4" label="Not Important, Not Urgent" />
    </>
  );
}

export default Matrix;
