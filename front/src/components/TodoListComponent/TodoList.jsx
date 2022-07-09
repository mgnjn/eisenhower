import React from "react";
import { observer } from "mobx-react-lite";
import { useUserStore } from "../../stores/user.store";

import Todo from "./Todo";

import { Draggable, Droppable } from "react-beautiful-dnd";

const TodoList = observer(({ quadrant }) => {
  const userStore = useUserStore();
  const todosStore = userStore.todosStore;

  return (
    <>
      <ul>
        {todosStore.todos[quadrant].map((todo) => {
          return (
            <Todo key={todo.id} todo={todo}>
              {todo.task}
            </Todo>
          );
        })}
      </ul>
      {/* <Droppable droppableId="droppable">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {todos.todoItems.map((todo, index) => (
              <Draggable key={todo.id} draggableId={todo.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Todo
                      key={todo.id}
                      id={todo.id}
                      todo={todo}
                      removeTodo={removeTodo}
                      completeTodo={completeTodo}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable> */}
    </>
  );
});

export default TodoList;
