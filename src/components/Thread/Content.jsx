import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid, Typography } from "@mui/material";

function Content({ author, content }) {
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
          <Grid item xs={2}>
            <Typography
              variant="subtitle2"
              color={"#E49B0F"}
              fontWeight={"bold"}
            >
              {" "}
              #樓主
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="subtitle2">{author}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">{content}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default Content;
