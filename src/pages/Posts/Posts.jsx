import { Divider, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";

function Posts({ posts }) {
  return (
    <List>
      {posts.map((post, index) => {
        return (
          <>
            <ListItem sx={{ height: "9vh" }}>
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
          </>
        );
      })}
    </List>
  );
}

export default Posts;
