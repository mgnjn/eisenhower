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
        <TabPanel value={modeStore.activeMode} index={0}>
          {modeStore.activeMode === MODES.todoMode ? <TodoListBoard /> : null}
        </TabPanel>
        <TabPanel value={modeStore.activeMode} index={1}>
          {modeStore.activeMode === MODES.lofiMode ? <LofiBoard /> : null}
        </TabPanel>
        <TabPanel value={modeStore.activeMode} index={2}>
          {modeStore.activeMode === MODES.stickyMode ? <StickyBoard /> : null}
        </TabPanel>
      </TabContext>
    </>
  );
}

export default observer(Navbar);
