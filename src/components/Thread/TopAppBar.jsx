import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import { Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

function TopAppBar({ categoryIndex, threadTitle }) {
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "darkgray.main",
        top: 0,
        bottom: "auto",
        height: "5vh",
      }}
    >
      <Grid container>
        <Grid item xs={1} align="center">
          <Link to={`/category/${categoryIndex}`}>
            <ArrowBackIcon
              color="white"
              sx={{ fontSize: 30, m: 0.5 }}
              onClick={() => {
                console.log("BACK");
              }}
            />
          </Link>
        </Grid>
        <Grid item xs={10} align="center">
          <Typography variant="h6" color="secondary" sx={{ pt: 0.5 }}>
            {threadTitle}
          </Typography>
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default TopAppBar;
