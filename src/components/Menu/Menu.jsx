import React, { useState } from "react";
import "../../App.css";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import MenuDrawer from "../DrawerContent/MenuDrawer";
import NotificationDrawer from "../DrawerContent/NotificationDrawer";
import AlertDrawer from "../DrawerContent/AlertDrawer";
import SettingDrawer from "../DrawerContent/SettingDrawer";

function Menu({
  list,
  toggleDrawer,
  drawerState,
  handleNotificationOpen,
  options,
  setCategoryIndex,
  channels,
  setChannelName,
  handleLoginOpen,
  handleSettingOpen,
  alertMessage,
}) {
  return (
    <div>
      {["left", "right", "top", "bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <SwipeableDrawer
            anchor={anchor}
            open={drawerState[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            sx={{ zIndex: 1301 }}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Menu;
