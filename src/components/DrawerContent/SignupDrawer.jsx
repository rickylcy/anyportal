import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import AbcIcon from "@mui/icons-material/Abc";
import { toast } from "react-toastify";

function SignupDrawer({
  toggleDrawer,
  CreateUser,
  signUpErrorMessage,
  setSignUpErrorMessage,
}) {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [repassword, setRePassword] = useState(null);
  const CheckCredential = () => {
    console.log("username ", username);
    console.log("password ", password);
    console.log("repassword ", repassword);
    if (password !== repassword) {
      console.log("password not match!");
      setSignUpErrorMessage("Password does not match!");
      toast.error("Password does not match!", {
        position: "bottom-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    CreateUser(username, password);
  };
  return (
    <Box sx={{ width: "100vw", flexGrow: 1 }} role="presentation">
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
          <Link to="/category/0" style={linkStyle}>
            <Grid
              item
              xs={1}
              align="center"
              onClick={toggleDrawer("right", false)}
            >
              <CloseIcon color="white" sx={{ fontSize: 30, m: 0.5 }} />
            </Grid>
          </Link>
          <Grid item xs={10} align="center">
            <Typography variant="h6" color="secondary" sx={{ pt: 0.5 }}>
              Sign Up
            </Typography>
          </Grid>
        </Grid>
      </AppBar>
      <Grid container spacing={2} padding={1} paddingTop={5}>
        <Grid item xs={4} align="center">
          <AbcIcon sx={{ fontSize: "40px" }} />
        </Grid>
        <Grid item xs={4} align="center">
          <Typography variant="h5">註冊帳號</Typography>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        padding={1}
        paddingTop={3}
        display="flex"
        justifyContent="center"
      >
        <Grid item xs={10} align="center">
          <TextField
            id="filled-basic"
            label="登入名稱"
            variant="filled"
            helperText="不建議使用 ISP／大學／大專院校電郵作為登入電郵"
            fullWidth
            sx={{
              bgcolor: "#d5d5d5",
              borderRadius: "5px",
            }}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Grid>
        <Grid item xs={10} align="center">
          <TextField
            id="filled-password-input"
            label="密碼"
            type="password"
            fullWidth
            autoComplete="current-password"
            helperText="密碼最少 8 個字，必須包含大、小寫英文及數字"
            variant="filled"
            sx={{ bgcolor: "#d5d5d5", borderRadius: "5px" }}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        <Grid item xs={10} align="center">
          <TextField
            id="retype-password-input"
            label="再次輸入密碼"
            type="password"
            fullWidth
            autoComplete="current-password"
            helperText="兩次輸入的密碼必須相同"
            variant="filled"
            sx={{ bgcolor: "#d5d5d5", borderRadius: "5px" }}
            onChange={(e) => setRePassword(e.target.value)}
          />
        </Grid>
        <Grid item xs={10} align="center">
          <Box sx={{ height: "3vh" }}>
            <Typography
              variant="subtitle1"
              color="red.main"
              sx={{ fontWeight: "bold" }}
            >
              {signUpErrorMessage}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={10} align="center">
          <Link to="/category/0" style={linkStyle}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => CheckCredential()}
            >
              註冊
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SignupDrawer;
