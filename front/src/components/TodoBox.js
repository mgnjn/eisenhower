import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import styled from "styled-components";

function TodoBox({ quadrant, label }) {
  const [todos, setTodos] = useState({ quadrant, label, todoItems: [] });

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const Container = styled.div`
    margin: 8px;
    border: 1px solid blue;
    border-radius: 2px;
  `;
  return (
    <>
      <Container>
        <TodoForm key={quadrant} todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </Container>
    </>
  );
}

export default TodoBox;
