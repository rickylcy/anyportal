import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import ReplyIcon from "@mui/icons-material/Reply";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Typography from "@mui/material/Typography";
function ButtomAppBar({ toggleReplyDrawerOpen }) {
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
            <IconButton color="secondary">
              <StarOutlineIcon />
            </IconButton>
          </Grid>
          <Grid item xs={3} align="center">
            <IconButton
              color="secondary"
              onClick={() => toggleReplyDrawerOpen()}
            >
              <ReplyIcon />
            </IconButton>
          </Grid>
          <Grid item xs={3} align="center">
            <IconButton color="secondary">
              <AutoStoriesIcon fontSize="small" />
              <Typography variant="subtitle2" color="secondary">
                1
              </Typography>
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

export default ButtomAppBar;
