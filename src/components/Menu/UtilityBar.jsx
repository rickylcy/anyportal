import React from "react";
import Tabs from "@mui/material/Tabs";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsIcon from "@mui/icons-material/Settings";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

function UtilityBar() {
  return (
    <Box
      position="fixed"
      sx={{
        px: 0.5,
        bottom: "5vh",
      }}
    >
      <Stack aria-label="Utility Bar">
        <NotificationsIcon
          align="center"
          href="/notifications"
          sx={{ fontSize: 33, my: 1 }}
          style={{ color: "#999999" }}
          onClick={() => {
            console.log("NotificationsIcon");
          }}
        />
        <AccountCircleIcon
          href="/account"
          sx={{ fontSize: 33, my: 1 }}
          style={{ color: "#999999" }}
          onClick={() => {
            console.log("AccountCircleIcon");
          }}
        />
        <DarkModeIcon
          href="/dark"
          sx={{ fontSize: 33, my: 1 }}
          style={{ color: "#999999" }}
          onClick={() => {
            console.log("DarkModeIcon");
          }}
        />
        <SettingsIcon
          href="/setting"
          sx={{ fontSize: 33, my: 1 }}
          style={{ color: "#999999" }}
          onClick={() => {
            console.log("SettingsIcon");
          }}
        />
      </Stack>
    </Box>
  );
}

export default UtilityBar;
