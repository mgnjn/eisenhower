import React from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos }) {
  const removeTodo = (id) => {
    const updatedTodos = todos.todoItems.filter((todo) => todo.id !== id);
    setTodos({
      quadrant: todos.quadrant,
      label: todos.label,
      todoItems: Object.assign([], updatedTodos),
    });
  };

  const completeTodo = (id) => {
    setTodos({
      quadrant: todos.quadrant,
      label: todos.label,
      todoItems: Object.assign(
        [],
        todos.todoItems.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        })
      ),
    });
  };

  return (
    <>
      <ul>
        {todos.todoItems.map((todo) => {
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
