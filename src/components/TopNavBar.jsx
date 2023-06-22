import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

function TopNavBar({ topOptions, channelName }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: "darkgray.main",
          top: 0,
          bottom: "auto",
          height: "5vh",
        }}
      >
        <Grid container>
          <Grid item xs={6} align="center">
            <Typography variant="h6" color="secondary" sx={{ pt: 0.5 }}>
              {channelName}
            </Typography>
          </Grid>
          {topOptions.map((option, index) => {
            return (
              <Grid
                item
                key={index}
                xs={6}
                onClick={() => {
                  console.log(index);
                }}
                align="center"
              >
                <Typography variant="h6" color="secondary" sx={{ pt: 0.5 }}>
                  {option}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </AppBar>
    </Box>
  );
}

export default TopNavBar;
