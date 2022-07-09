import AddBoxIcon from "@mui/icons-material/AddBox";
import Button from "@mui/material/Button";
import Todo from "../../stores/todo.store";
import Todos, { TodosStore } from "../../stores/todos.store";
import { toJS } from "mobx";
import React, { useEffect } from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import { observer } from "mobx-react-lite";

const BLANK_TODO = {
  quadrant: "",
  task: "",
  id: "",
  completed: false,
};

function TodoForm({ todosStore }) {
  const [currentTodo, setCurrentTodo] = useState(BLANK_TODO);

  const handleInputChange = (e) => {
    setCurrentTodo({ ...currentTodo.task, task: e.target.value });
  };

  const onAddTodo = () => {
    if (currentTodo === "") return;

    const id = nanoid();
    const newTodo = new Todo(id, todosStore.quadrant);

    newTodo.updateTask(currentTodo);
    todosStore.addTodo(newTodo);

    setCurrentTodo(BLANK_TODO);
  };

  useEffect(() => {
    console.log(Object.values(todosStore.todos));
  }, [todosStore.todos]);

  // const onAddTodo = () => {
  //   if (todo.task === "") return;

  //   const identifier = nanoid();

  //   const newTodo = {
  //     quadrant: todos.quadrant,
  //     label: todos.label,
  //     id: identifier,
  //     task: todo.task,
  //     completed: false,
  //   };

  //   setTodos({
  //     quadrant: todos.quadrant,
  //     label: todos.label,
  //     todoItems: [...todos.todoItems, newTodo],
  //   });

  //   setTodo(blankTodo);
  // };

  return (
    <>
      <div>
        <form>
          <label> {todosStore.label}</label>{" "}
          <input
            type="text"
            onChange={(e) => handleInputChange(e)}
            value={currentTodo.task}
          />
          <Button startIcon={<AddBoxIcon />} onClick={() => onAddTodo()} />
        </form>
      </div>
    </>
  );
}

export default observer(TodoForm);
