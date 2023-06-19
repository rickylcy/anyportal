import React, { useState } from "react";
import "../../App.css";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

//ICON
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import UtilityBar from "./UtilityBar";
import Paper from "@mui/material/Paper";
import Channels from "./Channels";
import Search from "./Search";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function MenuDrawer({ drawerOpen, toggleDrawer }) {
  const list = () => (
    <Box sx={{ width: 280, flexGrow: 1 }} role="presentation">
      <Grid container spacing={2} columns={13} sx={{ height: "100vh" }}>
        <Grid item xs={2.5} sx={{ bgcolor: "primary.main" }}>
          <UtilityBar />
        </Grid>
        <Grid item xs={10} sx={{ opacity: 2, bgcolor: "secondary.main" }}>
          <Search />
          <Grid onClick={toggleDrawer(false)}>
            <List>
              {["歷史", "Starred", "Email", "Drafts"].map((text, index) => {
                var link = `/` + text;
                return (
                  <Link to={link} key={index} className="link">
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
            {/* <List>
            {["吹水台", "自選台", "創意台", "", "", "", "", "", "", ""].map(
              (text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List> */}
            <Divider />
            <Channels />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
  return (
    <div>
      <React.Fragment>
        <SwipeableDrawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list()}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}

export default MenuDrawer;
