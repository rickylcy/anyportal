import React from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

//ICON
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import UtilityBar from "../Menu/UtilityBar";
import Channels from "../Menu//Channels";
import Search from "../Menu//Search";
function MenuDrawer({
  toggleDrawer,
  options,
  setCategoryIndex,
  channels,
  setChannelName,
  handleLoginOpen,
}) {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <Box sx={{ width: 280, flexGrow: 1 }} role="presentation">
      <Grid container spacing={2} columns={13} sx={{ height: "100vh" }}>
        <Grid item xs={2.5} sx={{ bgcolor: "primary.main" }}>
          <UtilityBar
            toggleDrawer={toggleDrawer}
            handleLoginOpen={handleLoginOpen}
          />
        </Grid>
        <Grid item xs={10} sx={{ opacity: 2, bgcolor: "secondary.main" }}>
          <Search />
          <Grid onClick={toggleDrawer("left", false)}>
            <List>
              {options.map((text, index) => {
                var link = `/` + text;
                return (
                  <Link to={link} key={index} style={linkStyle}>
                    <ListItem disablePadding>
                      <ListItemButton sx={{ px: 3, py: 0.5 }}>
                        <ListItemIcon>
                          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                );
              })}
            </List>
            <Divider />
            <Channels
              setCategoryIndex={setCategoryIndex}
              channels={channels}
              setChannelName={setChannelName}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MenuDrawer;
