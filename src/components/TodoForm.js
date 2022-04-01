import AddBoxIcon from "@mui/icons-material/AddBox";

import React from "react";
import { useState } from "react";
import TodoList from "./TodoList";

function TodoForm({ type }) {
  const [index, setIndex] = useState(0);
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();

    const newTodo = Object.assign({
      key: Date.now(),
      text: input,
      checked: false,
      delete: false,
    });

    setTodos((todos) => [...todos, newTodo]);
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
      <div>{<TodoList todos={todos} />}</div>
    </>
  );
}

export default TodoForm;
