import React from "react";
import Todo from "./Todo";
  const completeTodo = (id) => {

function TodoList({ todos, setTodos }) {
  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(Object.assign([], updatedTodos));
  };

  const completeTodo = () => {};

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
            />
          );
        })}
      </ul>
    </>
  );
}

export default TodoList;
