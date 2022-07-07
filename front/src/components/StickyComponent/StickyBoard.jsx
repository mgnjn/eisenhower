import React from "react";
import { MODES } from "../../utils/constants";

function StickyBoard({ modeStore }) {
  return (
    <div hidden={modeStore.activeMode !== MODES.stickyMode}>
      StickyBoard {modeStore.activeMode}
    </div>
  );
}

export default StickyBoard;
