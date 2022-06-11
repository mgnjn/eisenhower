import React from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos }) {
  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(Object.assign([], updatedTodos));
  };

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  return (
    <>
      <ul>
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.todoId}
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
