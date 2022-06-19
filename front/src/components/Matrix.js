import React from "react";
import TodoBox from "./TodoBox";
import Expiration from "./Expiration";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function Matrix() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Expiration />
        <TodoBox quadrant="q1" label="Important, Urgent" />
        <TodoBox quadrant="q2" label="Important, Not Urgent" />
        <TodoBox quadrant="q3" label="Not Important, Urgent" />
        <TodoBox quadrant="q4" label="Not Important, Not Urgent" />
      </DndProvider>
    </>
  );
}

export default Matrix;
