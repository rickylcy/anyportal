import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/Styles";
import Container from "@mui/material/Container";

import NavBar from "./components/NavBar";
import Menu from "./components/Menu/Menu";
import Posts from "./pages/Posts/Posts";
import Thread from "./pages/Posts/Thread";
import Login from "./components/Account/login";

function App() {
  //utilities
  //DRAWERS
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

    setDrawerState((drawerState) => ({ ...drawerState, [anchor]: open }));
  };
  const handleNotificationOpen = () => {};

  const [loginOpen, setLoginOpen] = useState(false);

  const handleLoginOpen = (event) => {
    toggleDrawer("left", false);
    console.log("open");
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  // FIXED STATE
  const [channels, setChannels] = useState([
    "吹水台",
    "自選台",
    "創意台",
    "講故台",
  ]);
  const [options, setOptions] = useState([
    "歷史",
    "Starred",
    "Email",
    "Drafts",
  ]);

  const [topIndex, setTopIndex] = useState(0);

  //
  const [channelName, setChannelName] = useState("吹水台");
  const [topOptions, setTopOptions] = useState(["Populars"]);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [posts, setPosts] = useState([
    { title: "點解條街仲咁多口罩撚？", author: "Mr. A", thread: 1 },
    { title: "荃灣二手上車邊度好(17)", author: "Mr. B", thread: 2 },
    { title: "NASA發現木星有奇異綠光", author: "Mr. C", thread: 3 },
    { title: "淺談澳洲office工嘅職埸文化", author: "Mr. D", thread: 4 },
  ]);
  const [threadTitle, setThreadTitle] = useState(null);

  //inpost
  const [content, setContent] = useState({
    author: "Mr. A",
    content: <div>畫面好似唔錯，但人物好似好多轉外國人咁？</div>,
  });
  const [comments, setComments] = useState([
    { author: "Mr. B", content: <div>係啊係啊</div> },
    { author: "Mr. C", content: <div>成個傻仔咁</div> },
    { author: "Mr. D", content: <div>AJAJJAJAJAJA</div> },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        sx={{
          bgcolor: "lightgray.main",
          color: "black",
          width: "100vw",
          height: "100vh",
          padding: 0,
        }}
      >
        <AnimatePresence>
          <Routes>
            <Route
              exact
              path="/category/:id"
              element={
                <Posts
                  posts={posts}
                  topOptions={topOptions}
                  channelName={channelName}
                  setThreadTitle={setThreadTitle}
                />
              }
            ></Route>
            <Route
              exact
              path="/thread/:id"
              element={
                <Thread
                  threadTitle={threadTitle}
                  categoryIndex={categoryIndex}
                  content={content}
                  comments={comments}
                />
              }
            ></Route>
          </Routes>
        </AnimatePresence>
        <button
          onClick={() => {
            handleLoginOpen();
          }}
        >
          print
        </button>

        <Menu
          drawerState={drawerState}
          toggleDrawer={toggleDrawer}
          options={options}
          setCategoryIndex={setCategoryIndex}
          channels={channels}
          setChannelName={setChannelName}
          handleLoginOpen={handleLoginOpen}
        />
        <Login loginOpen={loginOpen} handleLoginClose={handleLoginClose} />
        <NavBar toggleDrawer={toggleDrawer} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
