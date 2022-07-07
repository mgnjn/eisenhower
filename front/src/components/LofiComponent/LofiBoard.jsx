import React from "react";
import { MODES } from "../../utils/constants";

function LofiBoard({ modeStore }) {
  return <div>LofiBoard {modeStore.activeMode}</div>;
}

export default LofiBoard;
