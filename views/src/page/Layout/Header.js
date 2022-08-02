import { Fragment, useEffect, useReducer, useState } from "react";
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

const Header = (props) => {
  const [isMessage, setIsMessage] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [isMenuBtn, setIsMenuBtn] = useState(false);
  function messagebanner() {
    setIsMessage((event) => !event);
    setIsUser(false);
    setIsNotification(false);
  }

  const NotificationHandler = () => {
    setIsNotification((event) => !event);
    setIsMessage(false);
    setIsUser(false);
  };

  const userhandler = () => {
    setIsUser((event) => !event);
    setIsMessage(false);
    setIsNotification(false);
  };

  const menubtnHandler = () => {
    setIsMenuBtn((event) => !event);
  };

  return (
    <header>
      {/* {state === 1 ? <Home /> : null}
        {state === 2 ? <Companies /> : null} */}
      <div className="container">
        <div className="header-data">
          <div
            className="logo"
            onClick={props.home}
            style={{ cursor: "pointer" }}
          >
            <a onClick={props.closeFooterContent}>
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
              <li onClick={props.closeFooterContent}>
                <a href="#!" onClick={props.home}>
                  <span>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/icon1.png`}
                      alt=""
                    />
                  </span>
                  Home
                </a>
              </li>
              <Fragment>
                <li onClick={props.closeFooterContent}>
                  <a href="#!" title="" onClick={props.companies}>
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
                      <a href="#!" onClick={props.companies}>
                        Companies
                      </a>
                    </li>
                    <li>
                      <a href="#!">Company Profile</a>
                    </li>
                  </ul>
                </li>
                <li onClick={props.openforum}>
                  <a href="#!" onClick={props.forum}>
                    <span>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/icon3.png`}
                        alt=""
                      />
                    </span>
                    Wiki
                  </a>
                </li>
                <li onClick={props.closeFooterContent}>
                  <a href="#!" onClick={props.profiles}>
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
                      <a href="#!" onClick={props.userprofile}>
                        User Profile
                      </a>
                    </li>
                    <li>
                      <a href="#!" onClick={props.myprofile}>
                        my-profile-feed
                      </a>
                    </li>
                  </ul>
                </li>
                <li onClick={props.closeFooterContent}>
                  <a href="#!" onClick={props.jobs}>
                    <span>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/icon5.png`}
                        alt=""
                      />
                    </span>
                    Jobs
                  </a>
                </li>
                <li onClick={props.closeFooterContent}>
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
                  {isMessage && (
                    <HeaderMessage
                      messages={props.messages}
                      messagebanner={messagebanner}
                      closeFooterContent={props.closeFooterContent}
                    />
                  )}
                  {/*notification-box end*/}
                </li>
                <li onClick={props.closeFooterContent}>
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
                  {isNotification && (
                    <HeaderNotification
                      closeFooterContent={props.closeFooterContent}
                    />
                  )}
                </li>
              </Fragment>
            </ul>
          </nav>
          {/*nav end*/}
          <div className="menu-btn">
            <a title="" href="#" onClick={menubtnHandler}>
              <i className="fa fa-bars" />
            </a>
          </div>
          {/*menu-btn end*/}
          <div
            className="user-account"
            onClick={userhandler}
            style={{ cursor: "pointer" }}
          >
            <div className="user-info">
              <img src="images/resources/user.png" alt="" />
              <a href="#!" title="">
                John
              </a>
              <i className="la la-sort-down" />
            </div>
            <HeaderUser
              isuser={isUser}
              settings={props.settings}
              closeFooterContent={props.closeFooterContent}
            />
          </div>
        </div>
        {/*header-data end*/}
      </div>
      {/*header end*/}
    </header>
  );
};

export default Header;
