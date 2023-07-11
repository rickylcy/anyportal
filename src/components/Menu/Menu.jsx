import React, { useState } from "react";
import "../../App.css";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import MenuDrawer from "../DrawerContent/MenuDrawer";
import NotificationDrawer from "../DrawerContent/NotificationDrawer";

function Menu({
  toggleDrawer,
  drawerState,
  options,
  setCategoryIndex,
  channels,
  setChannelName,
  handleLoginOpen,
}) {
  const list = (anchor) => {
    if (anchor === "left") {
      return (
        <MenuDrawer
          toggleDrawer={toggleDrawer}
          options={options}
          setCategoryIndex={setCategoryIndex}
          channels={channels}
          setChannelName={setChannelName}
          handleLoginOpen={handleLoginOpen}
        />
      );
    } else if (anchor === "right") {
      return <NotificationDrawer toggleDrawer={toggleDrawer} />;
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
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Menu;
