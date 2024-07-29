import React, { useState } from "react";
import "../../App.css";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

function Drawer({ list, toggleDrawer, drawerState }) {
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

export default Drawer;
