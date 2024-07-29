import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid, Typography } from "@mui/material";

function Comment({ index, comment }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "100vw",
          height: "auto",
          p: 1,
        },
      }}
    >
      <Paper elevation={3}>
        <Grid container>
          <Grid item xs={1}>
            <Typography variant="subtitle2"> #{index + 1}</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="subtitle2">
              {comment?.author.username}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">{comment?.content}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default Comment;
