import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

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

  const [loginOpen, setLoginOpen] = useState(false);
  const [logon, setLogon] = useState(false);

  const [alertMessage, setAlertMessage] = useState("");

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

  const handleNotificationOpen = (event) => {
    setDrawerState((drawerState) => ({
      ...drawerState,
      ["left"]: false,
      ["right"]: true,
    }));
  };

  const handleSettingOpen = (event) => {
    setDrawerState((drawerState) => ({
      ...drawerState,
      ["left"]: false,
      ["bottom"]: true,
    }));
  };

  const handleLoginOpen = () => {
    if (logon === false) {
      setAlertMessage("請先登入!");
      setDrawerState((drawerState) => ({
        ...drawerState,
        ["left"]: false,
        ["top"]: true,
      }));
      setLoginOpen(true);
      setTimeout(
        () =>
          setDrawerState((drawerState) => ({
            ...drawerState,
            ["top"]: false,
          })),
        1000
      );
    } else if (logon === true) {
      console.log("LOGONed");
      setDrawerState((drawerState) => ({
        ...drawerState,
        ["left"]: false,
        ["right"]: true,
      }));
    }
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const loginCheck = (username, password) => {
    console.log("username: ", username);
    console.log("password: ", password);
    if (username === "" || password === "") {
      setAlertMessage("請輸入ID及密碼");
      console.log("empty");
      setDrawerState((drawerState) => ({
        ...drawerState,
        ["left"]: false,
        ["top"]: true,
      }));
      setTimeout(
        () =>
          setDrawerState((drawerState) => ({
            ...drawerState,
            ["top"]: false,
          })),
        1000
      );
    }
    if (username === "admin" && password === "admin") {
      console.log("OK");
      setLoginOpen(false);
      setLogon(true);
    }
  };

  const GET_THREAD = gql`
    query threads {
      threads {
        title
        author
        content
      }
    }
  `;
  //https://www.apollographql.com/docs/apollo-server/getting-started#step-4-define-your-data-set
  //https://www.apollographql.com/docs/react/get-started
  function DisplayThread() {
    const { loading, error, data } = useQuery(GET_THREAD);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    console.log("DDD", data);
    return data.locations?.map(({ id, name, description, photo }) => (
      <div key={id}>
        <h3>{name}</h3>
        <img
          width="400"
          height="250"
          alt="location-reference"
          src={`${photo}`}
        />
        <br />
        <b>About this location:</b>
        <p>{description}</p>
        <br />
      </div>
    ));
  }

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
        <button onClick={handleLoginOpen}>print</button>
        <DisplayThread />
        <Menu
          toggleDrawer={toggleDrawer}
          drawerState={drawerState}
          handleNotificationOpen={handleNotificationOpen}
          options={options}
          setCategoryIndex={setCategoryIndex}
          channels={channels}
          setChannelName={setChannelName}
          handleLoginOpen={handleLoginOpen}
          handleSettingOpen={handleSettingOpen}
          alertMessage={alertMessage}
        />
        <Login
          loginOpen={loginOpen}
          handleLoginClose={handleLoginClose}
          loginCheck={loginCheck}
        />
        <NavBar toggleDrawer={toggleDrawer} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
