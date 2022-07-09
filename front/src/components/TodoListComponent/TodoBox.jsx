import React from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import { useUserStore } from "../../stores/user.store";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import { TodosStore } from "../../stores/todos.store";

const TodoBoxContainer = styled.div`
  margin: 8px;
  border: 1px solid blue;
  border-radius: 5px;
`;

function TodoBox({ quadrant, label }) {
  const todosStore = new TodosStore(quadrant, label);
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
        <TodoForm todosStore={todosStore} />
        {/* <TodoList todosStore={todosStore} /> */}
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
