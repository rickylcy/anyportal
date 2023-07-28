import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid } from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import AutorenewIcon from "@mui/icons-material/Autorenew";

function NavBar({ toggleDrawer, toggleNewPostDrawerOpen, handleRefresh }) {
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
        <Grid container>
          <Grid item xs={3} align="center">
            <IconButton
              color="secondary"
              aria-label="open drawer"
              onClick={toggleDrawer("left", true)}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid item xs={3} align="center">
            <IconButton
              color="secondary"
              onClick={() => toggleNewPostDrawerOpen()}
            >
              <AddIcon />
            </IconButton>
          </Grid>
          <Grid item xs={3} align="center">
            <IconButton color="secondary" onClick={() => handleRefresh()}>
              <AutorenewIcon />
            </IconButton>
          </Grid>
          <Grid item xs={3} align="center">
            <IconButton color="secondary">
              <SearchIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
