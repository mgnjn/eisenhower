import React, { useEffect, useState } from "react";

import Todo from "./Todo";
import axios from "axios";

function TodoList({ todos, setTodos }) {
  const [tempLoaded, setTempLoaded] = useState(false);
  const [temp, setTemp] = useState("");

  useEffect(() => {
    async function fetchData() {
      let response = await axios(`http://localhost:5000/todos[0]`);
      let result = await response.data;
      setTemp(result);
      setTempLoaded(true);
    }
    fetchData();
  }, []);

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
