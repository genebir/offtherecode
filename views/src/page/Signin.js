import { useReducer } from "react";
import LoginForm from "./Component/Login/LoginForm";
import SignupForm from "./Component/Login/SignupForm";

const signinbanner = (states, action) => {
  switch (action.type) {
    case "SIGNIN":
      return (states = 1);
    case "SIGNUP":
      return (states = 2);
    default:
      return (states = 1);
  }
};

const Signin = () => {
  const [state, dispatch] = useReducer(signinbanner, 1);

  const signin = () => {
    dispatch({
      type: "SIGNIN",
    });
  };

  const signup = () => {
    dispatch({
      type: "SIGNUP",
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
      <link rel="stylesheet" type="text/css" href="lib/slick/slick.css" />
      <link rel="stylesheet" type="text/css" href="lib/slick/slick-theme.css" />
      <link rel="stylesheet" type="text/css" href="css/style.css" />
      <link rel="stylesheet" type="text/css" href="css/responsive.css" />
      <body div className="sign-in">
        <div className="wrapper">
          <div className="sign-in-page">
            <div className="signin-popup">
              <div className="signin-pop">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="cmp-info">
                      <div className="cm-logo">
                        <img src="images/cm-logo.png" alt="" />
                        <p>로그인, 회원가입을 구현했습니다.</p>
                      </div>
                      {/*cm-logo end*/}
                      <img src="images/cm-main-img.png" alt="" />
                    </div>
                    {/*cmp-info end*/}
                  </div>
                  <div className="col-lg-6">
                    <div className="login-sec">
                      <ul className="sign-control">
                        <li data-tab="tab-1" className="current">
                          <a title="" onClick={signin}>
                            Sign in
                          </a>
                        </li>
                        <li data-tab="tab-2">
                          <a title="" onClick={signup}>
                            Sign up
                          </a>
                        </li>
                      </ul>
                      {state === 1 ? <LoginForm /> : null}{" "}
                      {/*로그인 폼 컴포넌트 분리*/}
                      {/*sign_in_sec end*/}
                      {state === 2 ? <SignupForm /> : null}{" "}
                      {/*회원가입 폼 컴포넌트 분리*/}
                    </div>
                    {/*login-sec end*/}
                  </div>
                </div>
              </div>
              {/*signin-pop end*/}
            </div>
            {/*signin-popup end*/}
            <div className="footy-sec">
              <div className="container">
                <ul>
                  <li>
                    <a href="help-center.html" title="">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="about.html" title="">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      Community Guidelines
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      Cookies Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      Career
                    </a>
                  </li>
                  <li>
                    <a href="forum.html" title="">
                      Forum
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      Language
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      Copyright Policy
                    </a>
                  </li>
                </ul>
                <p>
                  <img src="images/copy-icon.png" alt="" />
                  Copyright 2019
                </p>
              </div>
            </div>
            {/*footy-sec end*/}
          </div>
          {/*sign-in-page end*/}
        </div>
      </body>
      {/*theme-layout end*/}
    </>
  );
};
export default Signin;
