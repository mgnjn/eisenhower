import React from "react";
import styled from "styled-components";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

import { DragDropContext } from "react-beautiful-dnd";

const TodoBoxContainer = styled.div`
  margin: 8px;
  border: 1px solid blue;
  border-radius: 1px;
`;

function TodoBox({ quadrant, label }) {
  // const handleOnDragEnd = (result) => {
  //   if (!result.destination) return;

  //   const items = Array.from(todos.todoItems);
  //   const [reorderedItem] = items.splice(result.source.index, 1);
  //   items.splice(result.destination.index, 0, reorderedItem);

  //   setTodos({
  //     quadrant: todos.quadrant,
  //     label: todos.label,
  //     todoItems: items,
  //   });
  // };

  return (
    <>
      <TodoBoxContainer>
        <TodoForm quadrant={quadrant} label={label} />
        <TodoList quadrant={quadrant} label={label} />
      </TodoBoxContainer>
      {/* <TodoBoxContainer>
        <TodoForm key={quadrant} todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} /> */}

      {/* <DragDropContext onDragEnd={handleOnDragEnd}>
          <TodoList todos={todos} setTodos={setTodos} />
        </DragDropContext> */}
      {/* </TodoBoxContainer> */}
    </>
  );
}

export default TodoBox;
