import React from "react";
import Todo from "./Todo";

function TodoList({ todos }) {
  return (
    <>
      {
        <ul>
          <Todo />
          <Todo />
        </ul>
      }
    </>
  );
}

export default TodoList;
