import React, { useState } from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos }) {
  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(Object.assign([], newTodos));
  };
  return (
    <>
      {
        <ul>
          {todos.map((todo) => {
            return <Todo todo={todo} key={todo.id} removeTodo={removeTodo} />;
          })}
        </ul>
      }
    </>
  );
}

export default TodoList;
