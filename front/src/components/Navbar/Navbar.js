import React, { useEffect } from "react";
import { MODES } from "../../utils/constants";
import TodoListBoard from "../TodoListComponent/TodoListBoard";
import LofiBoard from "../LofiComponent/LofiBoard";
import StickyBoard from "../StickyComponent/StickyBoard";
import { Tabs, Tab, Box } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import { observer } from "mobx-react-lite";
import { useUserStore } from "../../stores/user.store";

function Navbar() {
  const userStore = useUserStore();

  const handleTabChange = (newTab) => {
    userStore.modeStore.setActiveMode(newTab);
  };

  useEffect(() => {
    console.log(userStore.modeStore.activeMode);
  }, [userStore.modeStore.activeMode]);

  return (
    <>
      <TabContext value={userStore.modeStore.activeMode}>
        <Tabs
          value={userStore.modeStore.activeMode}
          onChange={(e) => handleTabChange(e.target.textContent)}
        >
          <Tab label={`${MODES.todoMode}`} value={`${MODES.todoMode}`} />
          <Tab label={`${MODES.lofiMode}`} value={`${MODES.lofiMode}`} />
          <Tab label={`${MODES.stickyMode}`} value={`${MODES.stickyMode}`} />
        </Tabs>
        {userStore.modeStore.activeMode === MODES.todoMode ? (
          <TodoListBoard />
        ) : null}
        {userStore.modeStore.activeMode === MODES.lofiMode ? (
          <LofiBoard />
        ) : null}
        {userStore.modeStore.activeMode === MODES.stickyMode ? (
          <StickyBoard />
        ) : null}
      </TabContext>
    </>
  );
}

export default observer(Navbar);
