import { Divider, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import TopNavBar from "../../components/TopNavBar";
function Posts({ posts, topOptions, channelName, ClickThread }) {
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
      <List>
        {posts.map((post, index) => {
          var link = "/thread/" + post.thread;
          return (
            <Link to={link} key={post.thread} style={linkStyle}>
              <ListItem
                sx={{ height: "9vh" }}
                onClick={() => {
                  console.log("THREAD" + post.thread);
                  ClickThread(index);
                }}
              >
                <Grid container>
                  <Grid item xs={12}>
                    <Typography variant="subtitle2">{post.author}</Typography>
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
    </motion.div>
  );
}

export default Posts;
