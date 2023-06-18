import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/Styles";
import Container from "@mui/material/Container";

import Home from "./pages/home/Home";
import NavBar from "./components/NavBar";
import MenuDrawer from "./components/Menu/MenuDrawer";
import TopNavBar from "./components/TopNavBar";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open) => () => setDrawerOpen(open);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopNavBar />
      <Container
        maxWidth={100}
        sx={{ bgcolor: "dark.main", color: "background.paper" }}
      >
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <MenuDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
        <NavBar toggleDrawer={toggleDrawer} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
