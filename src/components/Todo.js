import React from "react";
import { useState } from "react";

function Todo({ value, checked }) {
  console.log(value);
  const [isChecked, setIsChecked] = useState(checked ? checked : false);
  const [todoItem, setTodoItem] = useState(value ? value : null);
  return (
    <div>
      <h3>{todoItem}</h3>
    </div>
  );
}

export default Todo;
