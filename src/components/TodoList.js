import AddBoxIcon from "@mui/icons-material/AddBox";

import React from "react";
import { useState } from "react";
import Todos from "./Todos";

function TodoList({ type }) {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      key: Date.now(),
      text: input,
      checked: false,
      delete: false,
    };
    setTodos((todos) => [...todos, newTodo]);
  };

  return (
    <>
      {/* for the input */}
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
      <div>{<Todos todos={todos} />}</div>
    </>
  );
}

export default TodoList;
