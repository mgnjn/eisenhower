import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function TodoBox({ quadrant, label }) {
  const [todos, setTodos] = useState({ quadrant, label, todoItems: [] });

  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <>
      <TodoForm key={quadrant} todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default TodoBox;
