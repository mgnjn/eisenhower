import React from "react";
import { useState } from "react";

import Card from "@mui/material/Card";
import { CardContent, Checkbox } from "@mui/material";

function Todo({ text }) {
  return (
    <Card>
      <CardContent>
        <li> {text}</li>
        <Checkbox />
      </CardContent>
    </Card>
  );
}

export default Todo;
