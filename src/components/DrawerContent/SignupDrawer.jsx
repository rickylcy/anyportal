import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

function SignupDrawer({ toggleDrawer }) {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <Box sx={{ width: "100vw", flexGrow: 1 }} role="presentation">
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
          <Link to="/category/0" style={linkStyle}>
            <Grid
              item
              xs={1}
              align="center"
              onClick={toggleDrawer("right", false)}
            >
              <CloseIcon color="white" sx={{ fontSize: 30, m: 0.5 }} />
            </Grid>
          </Link>
          <Grid item xs={10} align="center">
            <Typography variant="h6" color="secondary" sx={{ pt: 0.5 }}>
              Sign Up
            </Typography>
          </Grid>
        </Grid>
      </AppBar>
      Sign Up
    </Box>
  );
}

export default SignupDrawer;
