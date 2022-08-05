import { Fragment, useContext, useEffect, useReducer, useState } from "react";
import Companies from "./Companies";
import HomeContents from "./HomeContents";
import Jobs from "./Jobs";
import Header from "./Layout/Header";
import Profile from "./Profile";
import Profilesetting from "./Profilesetting";
import Helpcenter from "./Helpcenter";
import About from "./About";
import Forum from "./Forum";
import Footer from "./Layout/Footer";
import Selfprofile from "./Selfprofile";
import MessageBack from "./Message backup";
import Userprofile from "./Userprofile";
import AuthContext from "../store/auth-context";

const headerbanner = (states, action) => {
  switch (action.type) {
    case "HOME":
      return (states = 1);
    case "COMPANIES":
      return (states = 2);
    case "WIKI":
      return (states = 3);
    case "PROFILES":
      return (states = 4);
    case "MYPROFILE":
      return (states = 4.1);
    case "USERPROFILE":
      return (states = 4.2);
    case "JOBS":
      return (states = 5);
    case "MESSAGES":
      return (states = 6);
    case "SETTINGS":
      return (states = 7);
    default:
      return (states = 0);
  }
};

const Footerbanner = (states, action) => {
  switch (action.type) {
    case "HELPCENTER":
      return (states = 1);
    case "ABOUT":
      return (states = 2);
    case "FORUM":
      return (states = 3);
    case "NOTHING":
      return (states = 4);
    default:
      return (states = null);
  }
};

const Home = () => {
  const authCtx = useContext(AuthContext);
  const [state, dispatch] = useReducer(headerbanner, 1);
  const [footer, footDispatch] = useReducer(Footerbanner, 0);

  const [isJob, setIsJob] = useState(false);
  const [isProject, setIsProject] = useState(false);
  const [isContent, setIsContent] = useState(true);
  const [isFooterContent, setIsFooterContent] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  // useEffect(() => {
  //   // HomeContents초기 데이터 받아오기
  //   fetch("http://localhost:8888", {
  //     method: "GET",
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => console.log(data));
  // }, []);

  const closeFooterContent = () => {
    setIsFooterContent(false);
    setIsContent(true);
  };

  const openFooterContent = () => {
    setIsFooterContent(true);
    setIsContent(false);
  };

  const openforum = () => {
    setIsFooterContent(true);
    setIsContent(false);
    forum();
  };

  const closeforum = () => {
    setIsFooterContent(false);
    setIsContent(true);
    nothing();
  };

  const isprojhandler = () => {
    setIsProject((event) => !event);
  };

  const isjobhandler = () => {
    setIsJob((event) => !event);
  };

  const isUpdateHandler = () => {
    setIsUpdate((event) => !event);
  };

  const helpcenter = () => {
    footDispatch({
      type: "HELPCENTER",
    });
  };

  const about = () => {
    footDispatch({
      type: "ABOUT",
    });
  };

  const forum = () => {
    footDispatch({
      type: "FORUM",
    });
  };

  const nothing = () => {
    footDispatch({
      type: "NOTHING",
    });
  };

  const home = () => {
    dispatch({
      type: "HOME",
    });
  };

  const companies = () => {
    dispatch({
      type: "COMPANIES",
    });
  };

  const wiki = () => {
    dispatch({
      type: "WIKI",
    });
  };

  const profiles = () => {
    dispatch({
      type: "PROFILES",
    });
  };

  const myprofile = () => {
    dispatch({
      type: "MYPROFILE",
    });
  };

  const userprofile = () => {
    dispatch({
      type: "USERPROFILE",
    });
  };

  const jobs = () => {
    dispatch({
      type: "JOBS",
    });
  };

  const messages = () => {
    dispatch({
      type: "MESSAGES",
    });
  };

  const settings = () => {
    dispatch({
      type: "SETTINGS",
    });
  };

  useEffect(() => {
    if (footer !== 0) {
      setIsContent(false);
    }
  }, [footer]);

  return (
    <Fragment>
      <meta charSet="UTF-8" />
      <title>WorkWise Html Template</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="" />
      <meta name="keywords" content="" />
      <link rel="stylesheet" type="text/css" href="css/animate.css" />
      <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
      <link rel="stylesheet" type="text/css" href="css/line-awesome.css" />
      <link
        rel="stylesheet"
        type="text/css"
        href="css/line-awesome-font-awesome.min.css"
      />
      <link
        href="vendor/fontawesome-free/css/all.min.css"
        rel="stylesheet"
        type="text/css"
      />
      <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" />
      <link
        rel="stylesheet"
        type="text/css"
        href="css/jquery.mCustomScrollbar.min.css"
      />
      <link rel="stylesheet" type="text/css" href="lib/slick/slick.css" />
      <link rel="stylesheet" type="text/css" href="lib/slick/slick-theme.css" />
      <link rel="stylesheet" type="text/css" href="css/style.css" />
      <link rel="stylesheet" type="text/css" href="css/responsive.css" />
      <div
        className={
          isProject === true || isJob === true || isUpdate === true
            ? "wrapper overlay"
            : "wrapper"
        }
      >
        {footer !== 1 && footer !== 3 ? (
          <Header
            home={home}
            companies={companies}
            projects={wiki}
            profiles={profiles}
            myprofile={myprofile}
            userprofile={userprofile}
            jobs={jobs}
            messages={messages}
            settings={settings}
            openFooterContent={openFooterContent}
            closeFooterContent={closeFooterContent}
            openforum={openforum}
            closeforum={closeforum}
          />
        ) : null}
        {/* <HomeContents /> */}
        {!isFooterContent && (
          <Fragment>
            {state === 1 && (
              <HomeContents
                isProject={isProject}
                isJob={isJob}
                isUpdate={isUpdate}
                isprojhandler={isprojhandler}
                isjobhandler={isjobhandler}
                isUpdateHandler={isUpdateHandler}
                helpcenter={helpcenter}
                myprofile={myprofile}
                forum={forum}
                about={about}
                openFooterContent={openFooterContent}
              />
            )}
            {state === 2 && <Companies />}
            {state === 3 && (
              <Forum
                home={home}
                closeFooterContent={closeFooterContent}
                forum={forum}
                closeforum={closeforum}
              />
            )}
            {state === 4 && <Profile />}
            {state === 4.1 && <Selfprofile settings={settings} />}
            {state === 4.2 && <Userprofile />}
            {state === 5 && <Jobs />}
            {state === 6 && <MessageBack />}
            {state === 7 && <Profilesetting />}
          </Fragment>
        )}

        <footer>
          {isFooterContent && (
            <div>
              {/* {state === 3 && (
                <Forum
                  home={home}
                  closeFooterContent={closeFooterContent}
                  forum={forum}
                />
              )} */}
              {footer === 1 && (
                <Helpcenter
                  home={home}
                  companies={companies}
                  projects={wiki}
                  profiles={profiles}
                  jobs={jobs}
                  messages={messages}
                  settings={settings}
                  closeFooterContent={closeFooterContent}
                />
              )}
              {footer === 2 && <About />}
              {footer === 3 && (
                <Forum
                  home={home}
                  closeFooterContent={closeFooterContent}
                  closeforum={closeforum}
                />
              )}
            </div>
          )}

          <Footer
            helpcenter={helpcenter}
            forum={forum}
            about={about}
            openFooterContent={openFooterContent}
          />
        </footer>
      </div>
    </Fragment>
  );
};

export default Home;
