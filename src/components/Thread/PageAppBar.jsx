import React from "react";
import AppBar from "@mui/material/AppBar";
import { Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

function PageAppBar() {
  return (
    <AppBar
      position="sticky"
      sx={{
        bgcolor: "lightgray.main",
        top: 0,
        bottom: "auto",
        height: "4vh",
      }}
    >
      <Grid container>
        <Grid item xs={2} align="center"></Grid>
        <Grid item xs={8} align="center">
          <Typography variant="subtitle1" color="primary" sx={{ pt: 0.5 }}>
            第 1 頁
          </Typography>
        </Grid>
        <Grid item xs={2} align="center">
          123
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default PageAppBar;
