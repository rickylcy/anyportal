import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import NativeSelect from "@mui/material/NativeSelect";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import SendIcon from "@mui/icons-material/Send";

function ReplyDrawer({
  channelName,
  toggleReplyDrawerClose,
  channels,
  threadTitle,
  CreateComment,
  setNewComment,
}) {
  const title = "回覆 : " + threadTitle;
  return (
    <Box
      sx={{ width: "100vw", height: "100vh", flexGrow: 1 }}
      role="presentation"
    >
      <AppBar
        position="sticky"
        sx={{
          bgcolor: "darkgray.main",
          top: 0,
          bottom: "auto",
          height: "5vh",
        }}
      >
        <Grid container>
          <Grid
            item
            xs={1}
            align="center"
            onClick={() => toggleReplyDrawerClose()}
          >
            <CloseIcon color="white" sx={{ fontSize: 30, m: 0.5 }} />
          </Grid>
          <Grid item xs={10} align="center">
            {/* <NativeSelect
              defaultValue={channelName}
              disableUnderline
              sx={{ color: "primary" }}
              style={{
                fontSize: "1.5rem",
                color: "white",
              }}
            >
              {channels.map((channel, index) => {
                return (
                  <option
                    value={index}
                    content={channel}
                    style={{
                      color: "Black",
                      fontSize: "0.8rem",
                    }}
                    key={index}
                  >
                    {channel}
                  </option>
                );
              })}
            </NativeSelect> */}
            <Typography sx={{ fontSize: "1.5rem" }}>回覆</Typography>
          </Grid>
          <Grid item xs={1} align="center" onClick={() => CreateComment()}>
            <SendIcon
              color="white"
              sx={{
                fontSize: 25,
                my: 0.5,
                mr: 1,
              }}
              style={{ transform: "rotate(-35deg)" }}
            />
          </Grid>
        </Grid>
      </AppBar>
      <Stack
        component="form"
        sx={{
          width: "100cw",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          hiddenLabel
          id="topic-textfield"
          placeholder={title}
          variant="filled"
          size="small"
          InputProps={{ disableUnderline: true }}
          disabled
        />
        <Divider />
        <textarea
          id="w3review"
          name="w3review"
          rows="35"
          cols="50"
          style={{
            borderWidth: 0,
            padding: 10,
            fontFamily: "Roboto",
            fontSize: 15,
            backgroundColor: "#f0f0f0",
          }}
          autoFocus="true"
          placeholder="回覆內容..."
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        {/* <TextField
          hiddenLabel
          id="content-textfield"
          placeholder="撰寫內容..."
          variant="filled"
          multiline
          InputProps={{
            disableUnderline: true,
            sx: { height: 500 },
          }}
        /> */}
      </Stack>
    </Box>
  );
}

export default ReplyDrawer;
