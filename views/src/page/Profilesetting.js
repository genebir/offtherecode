import { useReducer } from "react";

import AccountSetting from "./Component/AccountSetting/AccoutSetting";
import Blocking from "./Component/AccountSetting/Blocking";
import ChangePassword from "./Component/AccountSetting/ChangePassword";
import DeactivateAccount from "./Component/AccountSetting/DeactivateAccount";
import Notifications from "./Component/AccountSetting/Notifications";
import Privacy from "./Component/AccountSetting/Privacy";
import Requests from "./Component/AccountSetting/Requests";
import SecurityAndLogin from "./Component/AccountSetting/SecurityAndLogin";
import Status from "./Component/AccountSetting/Status";
import Footer from "./Layout/Footer";

const profilebanner = (states, action) => {
  switch (action.type) {
    case "ACCOUNTSETTING":
      console.log(states);
      return (states = 1);
    case "STATUS":
      console.log(states);
      return (states = 2);
    case "CHANGEPASSWORD":
      console.log(states);
      return (states = 3);
    case "NOTIFICATIONS":
      return (states = 4);
    case "REQUESTS":
      return (states = 5);
    case "SECURITYANDLOGIN":
      return (states = 6);
    case "PRIVACY":
      return (states = 7);
    case "BLOCKING":
      return (states = 8);
    case "DEACTIVATEACCOUNT":
      return (states = 9);
    default:
      return (states = 1);
  }
};

const Profilesetting = () => {
  const [state, dispatch] = useReducer(profilebanner, 1);

  const accountsettings = () => {
    dispatch({
      type: "ACCOUNTSETTING",
    });
  };

  const status = () => {
    dispatch({
      type: "STATUS",
    });
  };

  const changepassword = () => {
    dispatch({
      type: "CHANGEPASSWORD",
    });
  };

  const notifications = () => {
    dispatch({
      type: "NOTIFICATIONS",
    });
  };

  const requests = () => {
    dispatch({
      type: "REQUESTS",
    });
  };

  const securityandlogin = () => {
    dispatch({
      type: "SECURITYANDLOGIN",
    });
  };

  const privacy = () => {
    dispatch({
      type: "PRIVACY",
    });
  };

  const blocking = () => {
    dispatch({
      type: "BLOCKING",
    });
  };

  const deactivateaccount = () => {
    dispatch({
      type: "DEACTIVATEACCOUNT",
    });
  };
  return (
    <>
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
        {/*header end*/}
        <section className="profile-account-setting">
          <div className="container">
            <div className="account-tabs-setting">
              <div className="row">
                <div className="col-lg-3">
                  <div className="acc-leftbar">
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <a
                        className={
                          state === 1
                            ? "nav-item nav-link active"
                            : "nav-item nav-link"
                        }
                        id="nav-acc-tab"
                        data-toggle="tab"
                        onClick={accountsettings}
                        role="tab"
                        aria-controls="nav-acc"
                        aria-selected={state === 1 ? "true" : "false"}
                      >
                        <i className="la la-cogs" />
                        Account Setting
                      </a>
                      <a
                        className={
                          state === 2
                            ? "nav-item nav-link active"
                            : "nav-item nav-link"
                        }
                        id="nav-status-tab"
                        data-toggle="tab"
                        onClick={status}
                        role="tab"
                        aria-controls="nav-status"
                        aria-selected={state === 2 ? "true" : "false"}
                      >
                        <i className="fa fa-line-chart" />
                        Status
                      </a>
                      <a
                        className={
                          state === 3
                            ? "nav-item nav-link active"
                            : "nav-item nav-link"
                        }
                        id="nav-password-tab"
                        data-toggle="tab"
                        onClick={changepassword}
                        role="tab"
                        aria-controls="nav-password"
                        aria-selected={state === 3 ? "true" : "false"}
                      >
                        <i className="fa fa-lock" />
                        Change Password
                      </a>
                      <a
                        className={
                          state === 4
                            ? "nav-item nav-link active"
                            : "nav-item nav-link"
                        }
                        id="nav-notification-tab"
                        data-toggle="tab"
                        onClick={notifications}
                        role="tab"
                        aria-controls="nav-notification"
                        aria-selected={state === 4 ? "true" : "false"}
                      >
                        <i className="fa fa-flash" />
                        Notifications
                      </a>
                      <a
                        className={
                          state === 5
                            ? "nav-item nav-link active"
                            : "nav-item nav-link"
                        }
                        id="nav-privcy-tab"
                        data-toggle="tab"
                        onClick={requests}
                        role="tab"
                        aria-controls="privacy"
                        aria-selected={state === 5 ? "true" : "false"}
                      >
                        <i className="fa fa-group" />
                        Requests
                      </a>
                      <a
                        className={
                          state === 6
                            ? "nav-item nav-link active"
                            : "nav-item nav-link"
                        }
                        id="security"
                        data-toggle="tab"
                        onClick={securityandlogin}
                        role="tab"
                        aria-controls="security-login"
                        aria-selected={state === 6 ? "true" : "false"}
                      >
                        <i className="fa fa-user-secret" />
                        Security and Login
                      </a>
                      <a
                        className={
                          state === 7
                            ? "nav-item nav-link active"
                            : "nav-item nav-link"
                        }
                        id="nav-privacy-tab"
                        data-toggle="tab"
                        onClick={privacy}
                        role="tab"
                        aria-controls="privacy"
                        aria-selected={state === 7 ? "true" : "false"}
                      >
                        <i className="fa fa-paw" />
                        Privacy
                      </a>
                      <a
                        className={
                          state === 8
                            ? "nav-item nav-link active"
                            : "nav-item nav-link"
                        }
                        id="nav-blockking-tab"
                        data-toggle="tab"
                        onClick={blocking}
                        role="tab"
                        aria-controls="blockking"
                        aria-selected={state === 8 ? "true" : "false"}
                      >
                        <i className="fa fa-cc-diners-club" />
                        Blocking
                      </a>
                      <a
                        className={
                          state === 9
                            ? "nav-item nav-link active"
                            : "nav-item nav-link"
                        }
                        id="nav-deactivate-tab"
                        data-toggle="tab"
                        onClick={deactivateaccount}
                        role="tab"
                        aria-controls="nav-deactivate"
                        aria-selected={state === 9 ? "true" : "false"}
                      >
                        <i className="fa fa-random" />
                        Deactivate Account
                      </a>
                    </div>
                  </div>
                  {/*acc-leftbar end*/}
                </div>
                <div className="col-lg-9">
                  <div className="tab-content" id="nav-tabContent">
                    <AccountSetting state={state} />
                    {state === 2 ? <Status /> : null}
                    {state === 3 ? <ChangePassword /> : null}
                    {state === 4 ? <Notifications /> : null}
                    {state === 5 ? <Requests /> : null}
                    {state === 6 ? <SecurityAndLogin /> : null}
                    {state === 7 ? <Privacy /> : null}
                    {state === 8 ? <Blocking /> : null}
                    {state === 9 ? <DeactivateAccount /> : null}
                  </div>
                </div>
              </div>
            </div>
            {/*account-tabs-setting end*/}
          </div>
        </section>
      </div>
      {/*theme-layout end*/}
    </>
  );
};

export default Profilesetting;
