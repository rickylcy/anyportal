import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import TopAppBar from "../../components/Thread/TopAppBar";
import PageAppBar from "../../components/Thread/PageAppBar";
import Comment from "../../components/Thread/Comment";

function Thread({ threadTitle, categoryIndex, content, comments }) {
  return (
    <Box sx={{ width: "100vw", flexGrow: 1 }} role="presentation">
      <TopAppBar categoryIndex={categoryIndex} threadTitle={threadTitle} />
      <PageAppBar />
      {comments.map((comment, index) => {
        console.log("comment", comment);
        return <Comment index={index} comment={comment} />;
      })}
    </Box>
  );
}

export default Thread;
