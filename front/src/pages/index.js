import React, { useState } from "react";
import Matrix from "../components/TodoListComponent/Matrix";
import { MODES } from "../utils/constants";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function App() {
  const [mode, setMode] = useState(MODES.TODO);

  return <div>{mode === MODES.TODO ? <Matrix /> : <h1> Hello</h1>}</div>;
}
