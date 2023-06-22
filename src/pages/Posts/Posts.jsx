import { Divider, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import TopNavBar from "../../components/TopNavBar";
function Posts({ posts, topOptions, channelName, setThreadTitle }) {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <>
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
                  setThreadTitle(post.title);
                }}
              >
                <grid container>
                  <Grid item xs={12}>
                    <Typography variant="subtitle2">{post.author}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1">{post.title}</Typography>
                  </Grid>
                </grid>
              </ListItem>
              <Divider />
            </Link>
          );
        })}
      </List>
    </>
  );
}

export default Posts;
