import React from "react";
import Tabs from "@mui/material/Tabs";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsIcon from "@mui/icons-material/Settings";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

function UtilityBar({
  handleNotificationOpen,
  handleLoginOpen,
  handleSettingOpen,
}) {
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
          onClick={handleNotificationOpen}
        />
        <AccountCircleIcon
          href="/account"
          align="center"
          sx={{ fontSize: 33, my: 1 }}
          style={{ color: "#999999" }}
          onClick={handleLoginOpen}
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
          onClick={handleSettingOpen}
        />
      </Stack>
    </Box>
  );
}

export default UtilityBar;
