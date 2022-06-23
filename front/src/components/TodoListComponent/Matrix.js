import React from "react";
import TodoBox from "./TodoBox";
import Expiration from "./Expiration";

function Matrix() {
  return (
    <>
      <TodoBox quadrant="q1" label="Important, Urgent" />
      <TodoBox quadrant="q2" label="Important, Not Urgent" />
      <TodoBox quadrant="q3" label="Not Important, Urgent" />
      <TodoBox quadrant="q4" label="Not Important, Not Urgent" />
    </>
  );
}

export default Matrix;
