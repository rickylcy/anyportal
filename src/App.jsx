import { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useLazyQuery,
  useQuery,
  useMutation,
  gql,
} from "@apollo/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/Styles";
import Container from "@mui/material/Container";
import Drawer from "./components/Menu/Drawer";
import Posts from "./pages/Posts/Posts";
import Thread from "./pages/Posts/Thread";
import Login from "./components/Account/login";

import MenuDrawer from "./components/DrawerContent/MenuDrawer";
import NotificationDrawer from "./components/DrawerContent/NotificationDrawer";
import AlertDrawer from "./components/DrawerContent/AlertDrawer";
import SettingDrawer from "./components/DrawerContent/SettingDrawer";
import NewPostDrawer from "./components/DrawerContent/NewPostDrawer";
import ReplyDrawer from "./components/DrawerContent/ReplyDrawer";
import SignupDrawer from "./components/DrawerContent/SignupDrawer";

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
  const [replyDrawerOpen, setReplyDrawerOpen] = useState(false);
  const [signupDrawerOpen, setSignupDrawerOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [logon, setLogon] = useState(false);

  const [alertMessage, setAlertMessage] = useState("");
  const [signUpErrorMessage, setSignUpErrorMessage] = useState("");
  const [loginErrorMessage, setLoginErrorMessage] = useState("");
  //
  const [channelName, setChannelName] = useState("吹水台");
  const [topOptions, setTopOptions] = useState(["Populars"]);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [posts, setPosts] = useState([]);
  const [threadID, setThreadID] = useState(null);
  const [threadTitle, setThreadTitle] = useState(null);
  const [thread, setThread] = useState();
  const [author, setAuthor] = useState();

  //inpost
  const [content, setContent] = useState();
  const [comments, setComments] = useState([]);

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
      if (replyDrawerOpen === true) {
        return (
          <ReplyDrawer
            channelName={channelName}
            toggleReplyDrawerClose={toggleReplyDrawerClose}
            channels={channels}
            threadTitle={threadTitle}
            CreateComment={CreateComment}
            setNewComment={setNewComment}
          />
        );
      } else if (signupDrawerOpen === true) {
        return (
          <SignupDrawer
            toggleDrawer={toggleDrawer}
            CreateUser={CreateUser}
            signUpErrorMessage={signUpErrorMessage}
            setSignUpErrorMessage={setSignUpErrorMessage}
          />
        );
      }
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
            setNewTitle={setNewTitle}
            setNewContent={setNewContent}
            CreateThread={CreateThread}
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

  //REPLY DRAWER
  const toggleReplyDrawerOpen = (event) => {
    setReplyDrawerOpen(true);
    setDrawerState((drawerState) => ({
      ...drawerState,
      ["right"]: true,
    }));
  };

  const toggleReplyDrawerClose = (event) => {
    setReplyDrawerOpen(false);
    setDrawerState((drawerState) => ({
      ...drawerState,
      ["right"]: false,
    }));
  };

  //SIGNUP DRAWER
  const toggleSignupDrawerOpen = (event) => {
    setLoginOpen(false);
    setSignupDrawerOpen(true);
    setDrawerState((drawerState) => ({
      ...drawerState,
      ["right"]: true,
    }));
  };

  const toggleSignupDrawerClose = (event) => {
    setSignupDrawerOpen(false);
    setDrawerState((drawerState) => ({
      ...drawerState,
      ["right"]: false,
    }));
    setSignUpErrorMessage("");
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
    setLoginErrorMessage("");
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
    LoginUser(username, password);
    if (username === "admin" && password === "admin") {
      console.log("OK");
      setLoginOpen(false);
      setLogon(true);
    }
  };

  const GET_ALL_THREAD = gql`
    query threads($categoryIndex: Int) {
      threads(category: $categoryIndex) {
        _id
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

  const FETCH_THREAD = gql`
    query thread($threadID: String) {
      thread(threadID: $threadID) {
        _id
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

  const CREATE_THREAD = gql`
    mutation CreateThread(
      $title: String
      $content: String
      $categoryIndex: Int
    ) {
      CreateThread(title: $title, content: $content, category: $categoryIndex)
    }
  `;

  const CREATE_COMMENT = gql`
    mutation CreateComment($threadID: String, $newComment: String) {
      CreateComment(threadID: $threadID, newComment: $newComment)
    }
  `;

  const CREATE_USER = gql`
    mutation CreateUser($username: String, $password: String) {
      CreateUser(username: $username, password: $password)
    }
  `;

  const LOGIN_USER = gql`
    mutation LoginUser($username: String, $password: String) {
      LoginUser(username: $username, password: $password) {
        _id
        username
        token
      }
    }
  `;

  const handleRefresh = () => {
    console.log("REFRESH");
    refetch();
  };

  //https://www.apollographql.com/docs/apollo-server/getting-started#step-4-define-your-data-set
  //https://www.apollographql.com/docs/react/get-started
  const { loading, error, data, refetch } = useQuery(GET_ALL_THREAD, {
    variables: { categoryIndex: categoryIndex },
    fetchPolicy: "network-only", // Used for first execution
    nextFetchPolicy: "cache-first", // Used for subsequent executions
    onCompleted: (data) => {
      console.log("Threads: ", data);
      setPosts(data?.threads);
    },
  });

  const [newTitle, setNewTitle] = useState();
  const [newContent, setNewContent] = useState();
  const [CreateThreadMutation] = useMutation(CREATE_THREAD);
  function CreateThread(categoryId) {
    console.log("CREATING THREAD...");
    console.log("TITLE: ", newTitle);
    console.log("CONTENT: ", newContent);
    console.log("Category: ", typeof parseInt(categoryId));
    CreateThreadMutation({
      variables: {
        title: newTitle,
        content: newContent,
        categoryIndex: parseInt(categoryId),
      },
    })
      .then((data) => {
        console.log(data);
        toggleNewPostDrawerClose();
        toast.success("帖文已發送!", {
          position: "bottom-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        refetch();
      })
      .catch((err) => {
        throw err;
      });
  }

  const [newComment, setNewComment] = useState();
  const [CreateCommentMutation] = useMutation(CREATE_COMMENT);
  const {
    loading: tloading,
    error: terror,
    data: tdata,
    refetch: threadRefetch,
  } = useQuery(FETCH_THREAD, {
    variables: { threadID: threadID },
    onCompleted: (data) => {
      console.log("HI", data);
      setComments(data?.thread.comments);
    },
  });
  function CreateComment() {
    console.log("CREATING COMMENT...");
    CreateCommentMutation({
      variables: {
        threadID: threadID,
        newComment: newComment,
      },
      onCompleted: (data) => {
        threadRefetch();
        toast.success("回覆已發送!", {
          position: "bottom-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        refetch();
      },
    })
      .then((data) => {
        console.log(data);

        toggleReplyDrawerClose();
      })
      .catch((err) => {
        throw err;
      });
  }

  const [CreateUserMutation] = useMutation(CREATE_USER);
  function CreateUser(uname, pword) {
    console.log("CREATING COMMENT...");
    CreateUserMutation({
      variables: {
        username: uname,
        password: pword,
      },
      onCompleted: (data) => {
        toggleSignupDrawerClose();
        toast.success("帳號註冊成功!", {
          position: "bottom-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      },
      onError: (error) => {
        console.log("用戶名已存在!");
        setSignUpErrorMessage("用戶名已存在!");
        toast.error("用戶名已存在!", {
          position: "bottom-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      },
    });
  }

  const [LoginUserMutation] = useMutation(LOGIN_USER);

  function LoginUser(uname, pword) {
    try {
      console.log("Inside Login...");
      LoginUserMutation({
        variables: {
          username: uname,
          password: pword,
        },
        onCompleted: (data) => {
          console.log(data);
          handleLoginClose();
          toast.success("登入成功!", {
            position: "bottom-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        onError: (error) => {
          console.log(error.message.split(": ")[1]);
          setLoginErrorMessage(error.message.split(": ")[1]);
          toast.error(error.message.split(": ")[1], {
            position: "bottom-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
      });
      /* const { data } = await LoginUserMutation({
        variables: { username: uname, password: pword },
      });
      const user = data.loginUser;
      console.log("Logged in user:", user); */
      // Store the JWT token in localStorage or a state management solution
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
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

  const ClickThread = (index) => {
    setThreadID(posts[index]._id);
    setThreadTitle(posts[index].title);
    setContent(posts[index].content);
    setComments(posts[index].comments);
    setAuthor(posts[index].author);
    setThread(posts[index]);
  };

  function Index() {
    const navigate = useNavigate();
    useEffect(() => {
      setTimeout(() => {
        // 👇 Redirects to about page, note the `replace: true`

        navigate("/category/0", { replace: true });
      }, 1000);
    }, []);

    return <div>Redirecting...</div>;
  }

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
            <Route path="/" element={<Index />} />
            <Route
              exact
              path="/category/:id"
              element={
                <Posts
                  posts={posts}
                  topOptions={topOptions}
                  channelName={channelName}
                  ClickThread={ClickThread}
                  toggleDrawer={toggleDrawer}
                  toggleNewPostDrawerOpen={toggleNewPostDrawerOpen}
                  handleRefresh={handleRefresh}
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
                  toggleReplyDrawerOpen={toggleReplyDrawerOpen}
                />
              }
            ></Route>
            <Route
              exact
              path="/register"
              element={<SignupDrawer toggleDrawer={toggleDrawer} />}
            ></Route>
          </Routes>
        </AnimatePresence>
        {/*  <button onClick={handleLoginOpen}>print</button> */}
        <Drawer
          list={list}
          toggleDrawer={toggleDrawer}
          drawerState={drawerState}
        />
        <Login
          loginOpen={loginOpen}
          handleLoginClose={handleLoginClose}
          loginCheck={loginCheck}
          toggleSignupDrawerOpen={toggleSignupDrawerOpen}
          loginErrorMessage={loginErrorMessage}
        />
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="dark"
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;
