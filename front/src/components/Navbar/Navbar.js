import React, { useEffect } from "react";
import { MODES } from "../../utils/constants";
import TodoListBoard from "../TodoListComponent/TodoListBoard";
import LofiBoard from "../LofiComponent/LofiBoard";
import StickyBoard from "../StickyComponent/StickyBoard";
import { Tabs, Tab, Box } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import { observer } from "mobx-react-lite";

function Navbar({ modeStore }) {
  const handleTabChange = (newTab) => {
    modeStore.setActiveMode(newTab);
  };

  useEffect(() => {
    console.log(modeStore.activeMode);
  }, [modeStore.activeMode]);

  return (
    <>
      <TabContext value={modeStore.activeMode}>
        <Tabs
          value={modeStore.activeMode}
          onChange={(e) => handleTabChange(e.target.textContent)}
        >
          <Tab label={`${MODES.todoMode}`} value={`${MODES.todoMode}`} />
          <Tab label={`${MODES.lofiMode}`} value={`${MODES.lofiMode}`} />
          <Tab label={`${MODES.stickyMode}`} value={`${MODES.stickyMode}`} />
        </Tabs>
        {modeStore.activeMode === MODES.todoMode ? (
          <TodoListBoard modeStore={modeStore} />
        ) : null}
        {modeStore.activeMode === MODES.lofiMode ? (
          <LofiBoard modeStore={modeStore} />
        ) : null}
        {modeStore.activeMode === MODES.stickyMode ? (
          <StickyBoard modeStore={modeStore} />
        ) : null}
      </TabContext>
    </>
  );
}

export default observer(Navbar);
