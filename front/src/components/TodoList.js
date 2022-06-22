import React from "react";
import Todo from "./Todo";
import { Draggable, Droppable } from "react-beautiful-dnd";

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
      <Droppable droppableId="droppable">
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
      </Droppable>
    </>
  );
}

export default TodoList;
