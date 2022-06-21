import React from "react";
import TodoBox from "./TodoBox";
import Expiration from "./Expiration";
import { DragDropContext } from "react-beautiful-dnd";

function Matrix() {
  return (
    <>
      <DragDropContext>
        <Expiration />
        <TodoBox quadrant="q1" label="Important, Urgent" />
        <TodoBox quadrant="q2" label="Important, Not Urgent" />
        <TodoBox quadrant="q3" label="Not Important, Urgent" />
        <TodoBox quadrant="q4" label="Not Important, Not Urgent" />
      </DragDropContext>
    </>
  );
}

export default Matrix;
