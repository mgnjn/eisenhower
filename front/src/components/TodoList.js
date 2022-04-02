import React, { useEffect, useState, useCallback } from "react";

import Todo from "./Todo";
import axios from "axios";

function TodoList({ type, todos, setTodos }) {
  const fetchData = useCallback(() => {
    axios
      .get("http://localhost:5000/todos")
      .then((res) => {
        const data = res.data;
        const getTodos = data.filter((todo) => todo.type == type);
        setTodos(Object.assign([], getTodos));
      })
      .catch((error) => console.error(error));
  }, [setTodos, type]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
      <ul>
        {todos.map((todo) => {
          console.log(todo);
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
    </>
  );
}

export default TodoList;
