import React, { useState } from "react";
import "../../App.css";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import MenuDrawer from "../DrawerContent/MenuDrawer";
import NotificationDrawer from "../DrawerContent/NotificationDrawer";
import AlertDrawer from "../DrawerContent/AlertDrawer";
import SettingDrawer from "../DrawerContent/SettingDrawer";

function Menu({
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
  const list = (anchor) => {
    if (anchor === "left") {
      return (
        <MenuDrawer
          toggleDrawer={toggleDrawer}
          handleNotificationOpen={handleNotificationOpen}
          options={options}
          setCategoryIndex={setCategoryIndex}
          channels={channels}
          setChannelName={setChannelName}
          handleLoginOpen={handleLoginOpen}
          handleSettingOpen={handleSettingOpen}
        />
      );
    } else if (anchor === "right") {
      return <NotificationDrawer toggleDrawer={toggleDrawer} />;
    } else if (anchor === "top") {
      return (
        <AlertDrawer toggleDrawer={toggleDrawer} alertMessage={alertMessage} />
      );
    } else if (anchor === "bottom") {
      return <SettingDrawer toggleDrawer={toggleDrawer} />;
    }
  };
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
