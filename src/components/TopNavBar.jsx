import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Grid from "@mui/material/Grid";

function TopNavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "darkgray.main",
          top: 0,
          bottom: "auto",
        }}
      >
        <Toolbar>
          <Button
            color="white"
            style={{
              width: "50vw",
            }}
            onClick={() => {
              console.log("111");
            }}
          >
            HA
          </Button>
          <Button
            color="white"
            style={{
              width: "50vw",
            }}
            onClick={() => {
              console.log("222");
            }}
          >
            BA
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TopNavBar;
