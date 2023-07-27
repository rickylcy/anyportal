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

function NewPostDrawer({
  toggleNewPostDrawerClose,
  channels,
  setNewTitle,
  setNewContent,
  CreateThread,
}) {
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
            onClick={() => toggleNewPostDrawerClose()}
          >
            <CloseIcon color="white" sx={{ fontSize: 30, m: 0.5 }} />
          </Grid>
          <Grid item xs={10} align="center">
            <NativeSelect
              defaultValue={"吹水台"}
              inputProps={{
                name: "chaanel",
                id: "uncontrolled-native",
              }}
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
                    value={channel}
                    style={{
                      color: "Black",
                      fontSize: "0.8rem",
                    }}
                  >
                    {channel}
                  </option>
                );
              })}
            </NativeSelect>
          </Grid>
          <Grid item xs={1} align="center" onClick={() => CreateThread()}>
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
          placeholder="標題"
          variant="filled"
          size="small"
          InputProps={{ disableUnderline: true }}
          onChange={(e) => setNewTitle(e.target.value)}
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
          placeholder="撰寫內容..."
          onChange={(e) => setNewContent(e.target.value)}
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

export default NewPostDrawer;
