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
import Posts from "./pages/Posts/Posts";

function App() {
  const [channels, setChannels] = useState([]);
  const [options, setOptions] = useState([
    "歷史",
    "Starred",
    "Email",
    "Drafts",
  ]);
  const [topOptions, setTopOptions] = useState(["Channel1", "Populars"]);
  const [topIndex, setTopIndex] = useState(0);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [posts, setPosts] = useState([
    { title: "點解條街仲咁多口罩撚？", author: "Mr. A" },
    { title: "荃灣二手上車邊度好(17)", author: "Mr. B" },
    { title: "NASA發現木星有奇異綠光", author: "Mr. C" },
    { title: "淺談澳洲office工嘅職埸文化", author: "Mr. D" },
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
      <TopNavBar topOptions={topOptions} />
      <Container
        sx={{
          bgcolor: "lightgray.main",
          color: "black",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Posts posts={posts} />
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
