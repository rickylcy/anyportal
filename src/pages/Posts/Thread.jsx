import React, { useCallback, useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Grid, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import TopAppBar from "../../components/Thread/TopAppBar";
import PageAppBar from "../../components/Thread/PageAppBar";
import Comment from "../../components/Thread/Comment";
import Content from "../../components/Thread/Content";

function Thread({ threadTitle, categoryIndex, author, content, comments }) {
  const navigate = useNavigate();

  //https://stackoverflow.com/questions/70612769/how-do-i-recognize-swipe-events-in-react
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 100;

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    //if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    //const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isRightSwipe) {
      console.log("swipe right");
      handleSwipe();
    }
  };

  const handleSwipe = () => {
    navigate(`/category/${categoryIndex}`);
  };
  return (
    <motion.div
      className="container text-center  bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container
        sx={{
          bgcolor: "lightgray.main",
          color: "black",
          width: "100vw",
          height: "auto",
          padding: 0,
        }}
        onTouchStart={(e) => onTouchStart(e)}
        onTouchMove={(e) => onTouchMove(e)}
        onTouchEnd={(e) => onTouchEnd(e)}
      >
        <Box sx={{ width: "100vw", flexGrow: 1 }} role="presentation">
          <TopAppBar categoryIndex={categoryIndex} threadTitle={threadTitle} />
          <PageAppBar />
          <Content author={author} content={content} />
          {comments.map((comment, index) => {
            console.log("comment", comment);
            return <Comment index={index} comment={comment} />;
          })}
        </Box>
      </Container>
    </motion.div>
  );
}

export default Thread;
