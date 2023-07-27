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
import Drawer from "./components/Menu/Drawer";
import Posts from "./pages/Posts/Posts";
import Thread from "./pages/Posts/Thread";
import Login from "./components/Account/login";

import MenuDrawer from "./components/DrawerContent/MenuDrawer";
import NotificationDrawer from "./components/DrawerContent/NotificationDrawer";
import AlertDrawer from "./components/DrawerContent/AlertDrawer";
import SettingDrawer from "./components/DrawerContent/SettingDrawer";
import NewPostDrawer from "./components/DrawerContent/NewPostDrawer";

function App() {
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

  //utilities
  //DRAWERS
  const [drawerState, setDrawerState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [newPostDrawerOpen, setNewPostDrawerOpen] = useState(false);

  const [loginOpen, setLoginOpen] = useState(false);
  const [logon, setLogon] = useState(false);

  const [alertMessage, setAlertMessage] = useState("");

  const list = (anchor) => {
    if (anchor === "left") {
      return (
        <MenuDrawer
          toggleDrawer={toggleDrawer}
          handleNotificationOpen={handleNotificationOpen}
          options={options}
          setCategoryIndex={setCategoryIndex}
          channels={channels}
          setChannelName={setChannelName}
          handleLoginOpen={handleLoginOpen}
          handleSettingOpen={handleSettingOpen}
        />
      );
    } else if (anchor === "right") {
      return <NotificationDrawer toggleDrawer={toggleDrawer} />;
    } else if (anchor === "top") {
      return (
        <AlertDrawer toggleDrawer={toggleDrawer} alertMessage={alertMessage} />
      );
    } else if (anchor === "bottom") {
      if (newPostDrawerOpen === true) {
        return (
          <NewPostDrawer
            toggleDrawer={toggleDrawer}
            toggleNewPostDrawerClose={toggleNewPostDrawerClose}
            channels={channels}
          />
        );
      }
      return <SettingDrawer toggleDrawer={toggleDrawer} />;
    }
  };

  //NEW POST DRAWER
  const toggleNewPostDrawerOpen = (event) => {
    setNewPostDrawerOpen(true);
    console.log("11");
    setDrawerState((drawerState) => ({
      ...drawerState,
      ["left"]: false,
      ["bottom"]: true,
    }));
  };

  const toggleNewPostDrawerClose = (event) => {
    setNewPostDrawerOpen(false);
    console.log("22");
    setDrawerState((drawerState) => ({
      ...drawerState,
      ["bottom"]: false,
    }));
  };

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
    query threads($categoryIndex: Int) {
      threads(category: $categoryIndex) {
        title
        author
        content
        comments {
          content
          author
        }
      }
    }
  `;

  const GET_USERS = gql`
    query users {
      threads {
        title
        author
        content
        comments {
          content
          author
        }
      }
    }
  `;

  //https://www.apollographql.com/docs/apollo-server/getting-started#step-4-define-your-data-set
  //https://www.apollographql.com/docs/react/get-started
  function DisplayThread() {
    const { loading, error, data } = useQuery(GET_THREAD, {
      variables: { categoryIndex: categoryIndex },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    console.log("DDD", data);
    setPosts(data.threads);
  }

  function FetchUser() {
    const { loading, error, data } = useQuery(GET_USERS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    console.log("USERS", data);
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

  //
  const [channelName, setChannelName] = useState("吹水台");
  const [topOptions, setTopOptions] = useState(["Populars"]);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [posts, setPosts] = useState([]);
  const [threadTitle, setThreadTitle] = useState(null);
  const [thread, setThread] = useState();
  const [author, setAuthor] = useState();

  //inpost
  const [content, setContent] = useState();
  const [comments, setComments] = useState([]);

  const ClickThread = (index) => {
    setThreadTitle(posts[index].title);
    setContent(posts[index].content);
    setComments(posts[index].comments);
    setAuthor(posts[index].author);
    setThread(posts[index]);
  };

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
                  ClickThread={ClickThread}
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
                  author={author}
                  comments={comments}
                />
              }
            ></Route>
          </Routes>
        </AnimatePresence>
        {/*  <button onClick={handleLoginOpen}>print</button> */}
        <DisplayThread />

        <Drawer
          list={list}
          toggleDrawer={toggleDrawer}
          drawerState={drawerState}
        />
        <Login
          loginOpen={loginOpen}
          handleLoginClose={handleLoginClose}
          loginCheck={loginCheck}
        />
        <NavBar
          toggleDrawer={toggleDrawer}
          toggleNewPostDrawerOpen={toggleNewPostDrawerOpen}
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;
