import { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import Home from "../HomeContents";
import Companies from "../Companies";
import HeaderMessage from "./HeaderMessage";
import HeaderNotification from "./HeaderNotification";
import HeaderUser from "./HeaderUser";
import Projects from "../Projects";
import Profile from "../Profile";
import Jobs from "../Jobs";
import Message from "../Message";
import ErrorModal from "./ErrorModal";
// usereducer로 화면전환 그래프 화상채팅
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
    case "JOBS":
      return (states = 5);
    case "MESSAGES":
      return (states = 6);
    case "NOTIFICATION":
      return (states = 7);
    case "USER":
      return (states = 8);
    default:
      return (states = 1);
  }
};

const Header = () => {
  const [state, dispatch] = useReducer(headerbanner, 1);

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

  const jobs = () => {
    dispatch({
      type: "JOBS",
    });
  };

  const [isMessage, setIsMessage] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [isMenuBtn, setIsMenuBtn] = useState(false);
  function messagebanner() {
    setIsMessage((event) => !event);
  }

  const NotificationHandler = () => {
    setIsNotification((event) => !event);
  };

  const userhandler = () => {
    setIsUser((event) => !event);
  };

  const menubtnHandler = () => {
    setIsMenuBtn((event) => !event);
  };

  // useEffect(() => {
  //   switch (state) {
  //     case 1:
  //       return <Home />;
  //     case 2:
  //       return <Companies />;
  //     case 3:
  //       return <Projects />;
  //     case 4:
  //       return <Profile />;
  //     case 5:
  //       return <Jobs />;
  //     case 6:
  //       return <Message />;
  //     default:
  //       return <ErrorModal />;
  //   }
  // }, [state]);

  return (
    <div>
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
      {/* {state === 1 ? <Home /> : null}
        {state === 2 ? <Companies /> : null} */}
      <header>
        <div className="container">
          <div className="header-data">
            <div className="logo">
              <a onClick={home}>
                <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="" />
              </a>
            </div>
            {/*logo end*/}
            <div className="search-bar">
              <form>
                <input type="text" name="search" placeholder="Search..." />
                <button type="submit">
                  <i className="la la-search" />
                </button>
              </form>
            </div>
            {/*search-bar end*/}
            <nav className={isMenuBtn ? "active" : null}>
              <ul>
                <li>
                  <a href="#!" onClick={home}>
                    <span>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/icon1.png`}
                        alt=""
                      />
                    </span>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#!" title="" onClick={companies}>
                    <span>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/icon2.png`}
                        alt=""
                      />
                    </span>
                    Companies
                  </a>
                  <ul>
                    <li>
                      <a href="#!" onClick={companies}>
                        Companies
                      </a>
                    </li>
                    <li>
                      <a href="#!">Company Profile</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#!" onClick={wiki}>
                    <span>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/icon3.png`}
                        alt=""
                      />
                    </span>
                    Wiki
                  </a>
                </li>
                <li>
                  <a href="#!" onClick={profiles}>
                    <span>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/icon4.png`}
                        alt=""
                      />
                    </span>
                    Profiles
                  </a>
                  <ul>
                    <li>
                      <a href="#!">User Profile</a>
                    </li>
                    <li>
                      <a href="#!">my-profile-feed</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#!" onClick={jobs}>
                    <span>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/icon5.png`}
                        alt=""
                      />
                    </span>
                    Jobs
                  </a>
                </li>
                <li>
                  <a
                    href="#!"
                    title=""
                    class="not-box-openm"
                    onClick={messagebanner}
                  >
                    <span>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/icon6.png`}
                        alt=""
                      />
                    </span>
                    Messages
                  </a>
                  {isMessage && <HeaderMessage />}
                  {/*notification-box end*/}
                </li>
                <li>
                  <a
                    href="#!"
                    title=""
                    className="not-box-open"
                    onClick={NotificationHandler}
                  >
                    <span>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/icon7.png`}
                        alt=""
                      />
                    </span>
                    Notification
                  </a>
                  {isNotification && <HeaderNotification />}
                </li>
              </ul>
            </nav>
            {/*nav end*/}
            <div className="menu-btn">
              <a title="" href="#" onClick={menubtnHandler}>
                <i className="fa fa-bars" />
              </a>
            </div>
            {/*menu-btn end*/}
            <div className="user-account" onClick={userhandler}>
              <div className="user-info">
                <img src="images/resources/user.png" alt="" />
                <a href="#!" title="">
                  John
                </a>
                <i className="la la-sort-down" />
              </div>
              <HeaderUser isuser={isUser} />
            </div>
          </div>
          {/*header-data end*/}
        </div>
      </header>
      {/*header end*/}
    </div>
  );
};

export default Header;
