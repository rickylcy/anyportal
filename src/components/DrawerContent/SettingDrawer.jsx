import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
function SettingDrawer({ toggleDrawer }) {
  return (
    <Box
      sx={{ width: "100vw", height: "100vh", flexGrow: 1 }}
      role="presentation"
    >
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
          <Grid
            item
            xs={1}
            align="center"
            onClick={toggleDrawer("bottom", false)}
          >
            <CloseIcon color="white" sx={{ fontSize: 30, m: 0.5 }} />
          </Grid>
          <Grid item xs={10} align="center">
            <Typography variant="h6" color="secondary" sx={{ pt: 0.5 }}>
              設定
            </Typography>
          </Grid>
        </Grid>
      </AppBar>
      Settings
    </Box>
  );
}

export default SettingDrawer;
