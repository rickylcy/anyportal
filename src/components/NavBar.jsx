import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import MoreIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";

function NavBar({ toggleDrawer }) {
  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: "darkgray.main",
        top: "auto",
        bottom: 0,
      }}
    >
      <Toolbar>
        <IconButton
          color="secondary"
          aria-label="open drawer"
          onClick={toggleDrawer("left", true)}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="secondary">
          <SearchIcon />
        </IconButton>
        <IconButton color="secondary">
          <MoreIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
