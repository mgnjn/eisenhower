import React from "react";
import { MODES } from "../../utils/constants";
import { observer } from "mobx-react-lite";
import { useUserStore } from "../../stores/user.store";

import TodoListBoard from "../TodoListComponent/TodoListBoard";
import LofiBoard from "../LofiComponent/LofiBoard";
import StickyBoard from "../StickyComponent/StickyBoard";

import { Tabs, Tab } from "@mui/material";
import { TabContext } from "@mui/lab";

const Navbar = observer(() => {
  const userStore = useUserStore();

  const handleTabChange = (newTab) => {
    userStore.modeStore.setActiveMode(newTab);
  };

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
});

export default Navbar;
