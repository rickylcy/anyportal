import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Login({
  loginOpen,
  handleLoginClose,
  loginCheck,
  toggleSignupDrawerOpen,
  loginErrorMessage,
}) {
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <Dialog open={loginOpen} onClose={handleLoginClose}>
        <img
          src={`https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format`}
          srcSet={`https://images.unsplash.com/photo-1551782450-a2132b4ba21d`}
          alt="asgasg"
          loading="lazy"
        />
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            sx={{ height: "5vh" }}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            sx={{ height: "5vh" }}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Grid item xs={10} align="center">
            <Box sx={{ height: "3vh", paddingTop: 2 }}>
              <Typography
                variant="subtitle1"
                color="red.main"
                sx={{ fontWeight: "bold" }}
              >
                {loginErrorMessage}
              </Typography>
            </Box>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Grid container>
            <Grid item xs={6} align="center">
              <Link to="/register" style={linkStyle}>
                <Button onClick={toggleSignupDrawerOpen}>會員註冊</Button>
              </Link>
            </Grid>
            <Grid item xs={6} align="center">
              <Button onClick={() => loginCheck(username, password)}>
                登入
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </div>
  );
}
