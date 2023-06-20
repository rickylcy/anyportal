import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/Styles";
import Container from "@mui/material/Container";

import Home from "./pages/home/Home";
import NavBar from "./components/NavBar";
import Menu from "./components/Menu/Menu";
import TopNavBar from "./components/TopNavBar";
import NotificationDrawer from "./components/DrawerContent/NotificationDrawer";

function App() {
  const [channels, setChannels] = useState([]);
  const [options, setOptions] = useState([
    "歷史",
    "Starred",
    "Email",
    "Drafts",
  ]);

  const [drawerState, setDrawerState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerState({ ...drawerState, [anchor]: open });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopNavBar />
      <Container sx={{ bgcolor: "dark.main", color: "background.paper" }}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Menu
          drawerState={drawerState}
          toggleDrawer={toggleDrawer}
          options={options}
        />
        <NavBar toggleDrawer={toggleDrawer} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
