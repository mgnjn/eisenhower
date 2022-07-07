import React from "react";
import { MODES } from "../../utils/constants";

function LofiBoard({ modeStore }) {
  return (
    <div hidden={modeStore.activeMode !== MODES.lofiMode}>
      LofiBoard {modeStore.activeMode}
    </div>
  );
}

export default LofiBoard;
