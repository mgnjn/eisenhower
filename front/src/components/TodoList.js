import React, { useState } from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos }) {
  const completeTodo = (id) => {
    const completedTodos = todos.filter(
      (todo) => todo.id !== id && todo.completed === true
    );
  };
  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(Object.assign([], newTodos));
  };
  return (
    <>
      {
        <ul>
          {todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                id={todo.id}
                todo={todo}
                removeTodo={removeTodo}
                completeTodo={completeTodo}
              />
            );
          })}
        </ul>
      }
    </>
  );
}

export default TodoList;
