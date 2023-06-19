import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

function TopNavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "darkgray.main",
          top: 0,
          bottom: "auto",
          height: "5vh",
        }}
      >
        <Grid container>
          <Grid
            item
            xs={6}
            onClick={() => {
              console.log("111");
            }}
            align="center"
          >
            <Typography variant="h6" color="secondary" sx={{ pt: 0.5 }}>
              TEST1
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            onClick={() => {
              console.log("222");
            }}
            align="center"
          >
            <Typography variant="h6" color="secondary" sx={{ pt: 0.5 }}>
              TEST2
            </Typography>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
}

export default TopNavBar;
