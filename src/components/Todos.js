import React from "react";

import Todo from "./Todo";
function Todos({ todos }) {
  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return <Todo key={todo.key} text={todo.text} />;
        })}
      </ul>
    </div>
  );
}

export default Todos;
