import React from "react";
import { MODES } from "../../utils/constants";

function StickyBoard({ modeStore }) {
  return <div>StickyBoard {modeStore.activeMode}</div>;
}

export default StickyBoard;
