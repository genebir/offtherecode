import { useState } from "react";
import HeaderMessage from "../../Layout/HeaderMessage";
import HeaderNotification from "../../Layout/HeaderNotification";
import HeaderUser from "../../Layout/HeaderUser";

const HelpCenterHeader = (props) => {
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

  return (
    <header>
      {/* {state === 1 ? <Home /> : null}
        {state === 2 ? <Companies /> : null} */}
      <div className="container">
        <div className="header-data">
          <div className="logo">
            <a onClick={props.home}>
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
              <li>
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
              <li>
                <a href="#!" onClick={props.projects}>
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
                    <a href="#!">User Profile</a>
                  </li>
                  <li>
                    <a href="#!">my-profile-feed</a>
                  </li>
                </ul>
              </li>
              <li>
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
                {isMessage && (
                  <HeaderMessage
                    messages={props.messages}
                    messagebanner={messagebanner}
                  />
                )}
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
            <HeaderUser isuser={isUser} settings={props.settings} />
          </div>
          <div className="search-sec">
            <div className="container">
              <div className="searchtitle">
                <h2>무엇을 도와드릴까요?</h2>
              </div>
              <div className="search-container">
                <form action="/action_page.php" className="sec-search">
                  <input
                    type="text"
                    placeholder="필요한것을 입력하세요"
                    name="search"
                  />
                  <button type="submit" className="topsearch">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/*header-data end*/}
      </div>
      {/*header end*/}
    </header>
  );
};

export default HelpCenterHeader;
