import AddBoxIcon from "@mui/icons-material/AddBox";

import React from "react";
import { useState } from "react";
import Todo from "./Todo";

function TodoList({ type }) {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [listUpdated, setListUpdated] = useState(false);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      key: Date.now(),
      value: input,
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
          {/* <button type="submit" value="submit" onClick={(e) => addTodo(e)}>
            Add
          </button> */}
        </form>
      </div>
      <div>
        {todos.map((todo) => (
          <Todo
            key={todo.key}
            value={todo.value}
            checked={todo.checked}
            deleteTodo={todo.delete}
          />
        ))}
      </div>
    </>
  );
}

export default TodoList;
