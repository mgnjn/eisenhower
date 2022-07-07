import React, { useEffect, useState } from "react";
import { MODES } from "../../utils/constants";
import Matrix from "../TodoListComponent/Matrix";
import { Tabs, Tab } from "@mui/material";
import { Mode } from "../../stores/mode.store";
import { observer } from "mobx-react-lite";

const Navbar = ({ modeStore }) => {
  const handleTabChange = (e) => {
    modeStore.setActiveMode(e);
    console.log(modeStore.activeMode);
  };

  useEffect(() => {
    console.log(modeStore.activeMode);
  }, [modeStore]);

  return (
    <>
      <Tabs
        value={modeStore.activeMode}
        onChange={(e) => modeStore.setActiveMode(e.target.textContent)}
      >
        <Tab label={`${MODES.todoMode}`} value={`${MODES.todoMode}`} />
        <Tab label={`${MODES.lofiMode}`} value={`${MODES.lofiMode}`} />
        <Tab label={`${MODES.stickyMode}`} value={`${MODES.stickyMode}`} />
      </Tabs>
      <Matrix />
    </>
  );
};

export default observer(Navbar);
