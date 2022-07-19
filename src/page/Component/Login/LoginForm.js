import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../store/auth-context";
import ErrorModal from "../../Layout/ErrorModal";

const LoginForm = (props) => {
  const authCtx = useContext(AuthContext);
  const [error, setError] = useState(false);
  const history = useNavigate();
  const inputUserName = useRef();
  const inputPassword = useRef();

  const loginHandler = (loginData) => {
    //로그인 데이터 전송 함수
    fetch("https://react-http-fa2fe-default-rtdb.firebaseio.com/login.json", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history("/", { replace: true });
    });
  };

  const onSubmitHandler = (event) => {
    // 로그인 버튼 눌렀을때 작동하는 함수
    event.preventDefault();
    const enterUserName = inputUserName.current.value;
    const enterPassword = inputPassword.current.value;

    if (enterPassword.length < 4 || enterUserName.length < 4) {
      setError(true);
      return;
    }

    const LoginJsonData = {
      id: enterUserName,
      password: enterPassword,
    };

    loginHandler(LoginJsonData);
    authCtx.onLogin(enterUserName, enterPassword);
  };
  return (
    <div>
      <div
        className={
          props.state === 1
            ? "sign_in_sec animated fadeIn current"
            : "sign_in_sec animated fadeIn"
        }
        id="tab-1"
      >
        <h3>Sign in</h3>
        <form onSubmit={onSubmitHandler}>
          <div className="row">
            <div className="col-lg-12 no-pdd">
              <div className="sn-field">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  ref={inputUserName}
                />
                <i className="la la-user" />
              </div>
              {/*sn-field end*/}
            </div>
            <div className="col-lg-12 no-pdd">
              <div className="sn-field">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  ref={inputPassword}
                />
                <i className="la la-lock" />
              </div>
            </div>
            <div className="col-lg-12 no-pdd">
              <div className="checky-sec">
                <div className="fgt-sec">
                  <input type="checkbox" name="cc" id="c1" />
                  <label htmlFor="c1">
                    <span />
                  </label>
                  <small>Remember me</small>
                </div>
                {/*fgt-sec end*/}
              </div>
            </div>
            <div className="col-lg-12 no-pdd">
              <button type="submit" value="submit">
                Sign in
              </button>
              {error ? <ErrorModal onClose={() => setError(false)} /> : null}
            </div>
          </div>
        </form>
        <div className="login-resources">
          <h4>소셜 로그인</h4>
          <ul>
            <li>
              <a
                href="#"
                title=""
                className="fb"
                style={{ background: "#5387FC" }}
              >
                <i className="fa fa-google" />
                Login Google
              </a>
            </li>
            <li>
              <a
                href="#"
                title=""
                className="tw"
                style={{ background: "#000000" }}
              >
                <i className="fa fa-github" />
                Login Github
              </a>
            </li>
          </ul>
        </div>
        {/*login-resources end*/}
      </div>
    </div>
  );
};

export default LoginForm;
