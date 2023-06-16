import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import NavBar from "./components/NavBar";
import CssBaseline from "@mui/material/CssBaseline";
import MenuDrawer from "./components/MenuDrawer";
import { createTheme } from "@mui/material";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open) => () => setDrawerOpen(open);
  return (
    <>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
      <MenuDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
      <NavBar toggleDrawer={toggleDrawer} />
    </>
  );
}

export default App;
