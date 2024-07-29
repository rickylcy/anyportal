import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function NotificationDrawer({ handleNotificationClose }) {
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
          <Grid
            item
            xs={1}
            align="center"
            onClick={() => handleNotificationClose()}
          >
            <CloseIcon color="white" sx={{ fontSize: 30, m: 0.5 }} />
          </Grid>
          <Grid item xs={10} align="center">
            <Typography variant="h6" color="secondary" sx={{ pt: 0.5 }}>
              Notifications
            </Typography>
          </Grid>
        </Grid>
      </AppBar>
      NOTIFICATION
    </Box>
  );
}

export default NotificationDrawer;
