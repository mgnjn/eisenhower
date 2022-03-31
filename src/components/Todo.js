import React from "react";
import { useState } from "react";

import Card from "@mui/material/Card";
import { CardContent, Checkbox } from "@mui/material";

function Todo({ value, checked }) {
  console.log(value);
  const [isChecked, setIsChecked] = useState(checked ? checked : false);
  const [todoItem, setTodoItem] = useState(value ? value : null);
  return (
    <Card>
      <CardContent>
        <Checkbox />
      </CardContent>
    </Card>
  );
}

export default Todo;
