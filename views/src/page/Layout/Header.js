import { useState } from "react";
import { Link } from "react-router-dom";
import HeaderMessage from "./HeaderMessage";
import HeaderNotification from "./HeaderNotification";
import HeaderUser from "./HeaderUser";
// usereducer로 화면전환 그래프 화상채팅

const Header = () => {
  const [isMessage, setIsMessage] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const [isUser, setIsUser] = useState(false);
  function messagebanner() {
    setIsMessage((event) => !event);
    console.log(isMessage);
  }

  const NotificationHandler = () => {
    setIsNotification((event) => !event);
  };

  const userhandler = () => {
    setIsUser((event) => !event);
  };

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

      <div className="wrapper">
        <header>
          <div className="container">
            <div className="header-data">
              <div className="logo">
                <Link to="/">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/logo.png`}
                    alt=""
                  />
                </Link>
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
              <nav>
                <ul>
                  <li>
                    <Link to="/">
                      <span>
                        <img
                          src={`${process.env.PUBLIC_URL}/images/icon1.png`}
                          alt=""
                        />
                      </span>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/companies" title="">
                      <span>
                        <img
                          src={`${process.env.PUBLIC_URL}/images/icon2.png`}
                          alt=""
                        />
                      </span>
                      Companies
                    </Link>
                    <ul>
                      <li>
                        <Link to="/companies">Companies</Link>
                      </li>
                      <li>
                        <Link to="/companies/profile">Company Profile</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/forum">
                      <span>
                        <img
                          src={`${process.env.PUBLIC_URL}/images/icon3.png`}
                          alt=""
                        />
                      </span>
                      Wiki
                    </Link>
                  </li>
                  <li>
                    <Link to="/profile">
                      <span>
                        <img
                          src={`${process.env.PUBLIC_URL}/images/icon4.png`}
                          alt=""
                        />
                      </span>
                      Profiles
                    </Link>
                    <ul>
                      <li>
                        <Link to="/profile/users">User Profile</Link>
                      </li>
                      <li>
                        <Link to="/profile/self">my-profile-feed</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/jobs">
                      <span>
                        <img
                          src={`${process.env.PUBLIC_URL}/images/icon5.png`}
                          alt=""
                        />
                      </span>
                      Jobs
                    </Link>
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
                    {isMessage ? <HeaderMessage /> : null}
                    {/*notification-box end*/}
                  </li>
                  <li>
                    <a
                      href="#"
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
                    {isNotification ? <HeaderNotification /> : null}
                  </li>
                </ul>
              </nav>
              {/*nav end*/}
              <div className="menu-btn">
                <a href="#!" title="">
                  <i className="fa fa-bars" />
                </a>
              </div>
              {/*menu-btn end*/}
              <div className="user-account" onClick={userhandler}>
                <div className="user-info">
                  <img src="images/resources/user.png" alt="" />
                  <a href="#" title="">
                    John
                  </a>
                  <i className="la la-sort-down" />
                </div>
                {isUser ? <HeaderUser /> : null}
              </div>
            </div>
            {/*header-data end*/}
          </div>
        </header>
        {/*header end*/}
      </div>
    </div>
  );
};

export default Header;
