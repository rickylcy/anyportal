import { Divider, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import NavBar from "../../components/NavBar";
import Chip from "@mui/material/Chip";
import ForumIcon from "@mui/icons-material/Forum";
import TopNavBar from "../../components/TopNavBar";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
function Posts({
  posts,
  topOptions,
  channelName,
  ClickThread,
  toggleDrawer,
  toggleNewPostDrawerOpen,
  handleRefresh,
  channels,
}) {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <motion.div
      className="container text-center  bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TopNavBar topOptions={topOptions} channelName={channelName} />
      <Box
        sx={{
          mb: 0,
          display: "flex",
          flexDirection: "column",
          height: "90vh",
          overflow: "hidden",
          overflowY: "scroll",
          // justifyContent="flex-end" # DO NOT USE THIS WITH 'scroll'
        }}
      >
        <List>
          {posts?.map((post, index) => {
            console.log("post", post);
            var link = "/thread/" + post.thread;
            return (
              <Link key={index} to={link} style={linkStyle}>
                <ListItem
                  sx={{ height: "9vh" }}
                  onClick={() => {
                    ClickThread(index);
                  }}
                >
                  <Grid container>
                    <Grid item xs={5}>
                      <Typography variant="subtitle2">{post.author}</Typography>
                    </Grid>
                    <Grid item xs={2.5} align="center">
                      <Chip
                        icon={<ForumIcon />}
                        label={post.comments.length}
                        size="small"
                        sx={{ fontSize: "0.7rem", bgcolor: "transparent" }}
                      />
                    </Grid>
                    <Grid item xs={2.5} align="center">
                      <Chip
                        icon={<ThumbUpIcon />}
                        label={post.thumbup - post.thumbdown}
                        size="small"
                        sx={{ fontSize: "0.7rem", bgcolor: "transparent" }}
                      />
                    </Grid>
                    <Grid item xs={2} align="right">
                      <Chip
                        label={channels[post.category]}
                        size="small"
                        sx={{ fontSize: "0.7rem" }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Typography variant="subtitle1">{post.title}</Typography>
                    </Grid>
                  </Grid>
                </ListItem>
                <Divider />
              </Link>
            );
          })}
        </List>
      </Box>
      <NavBar
        toggleDrawer={toggleDrawer}
        toggleNewPostDrawerOpen={toggleNewPostDrawerOpen}
        handleRefresh={handleRefresh}
      />
    </motion.div>
  );
}

export default Posts;
