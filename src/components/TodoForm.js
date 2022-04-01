import AddBoxIcon from "@mui/icons-material/AddBox";

import React from "react";
import { useState } from "react";
import TodoList from "./TodoList";

function TodoForm({ type }) {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const addTodo = (e) => {
    const id = Date.now();
    const newTodo = Object.assign({
      key: id,
      id: id,
      text: input,
      checked: false,
      deleted: false,
    });

    setTodos((todos) => [...todos, newTodo]);

    e.preventDefault();
  };

  return (
    <>
      <div>
        <form>
          <label> {type}</label>
          <input
            type="text"
            onChange={(e) => handleInputChange(e)}
            value={input}
          />
          <AddBoxIcon onClick={(e) => addTodo(e)} />
        </form>
      </div>
      <div>{<TodoList todos={todos} setTodos={setTodos} />}</div>
    </>
  );
}

export default TodoForm;
