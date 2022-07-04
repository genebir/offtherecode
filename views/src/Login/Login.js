import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <React.Fragment>
      <div className="loginboard">
        <div className="loginmodal">
          <div className="Idarea">ID</div>
          <input type="text" className="loginid" />
          <div className="Pwarea">Password</div>
          <input type="text" className="loginpw" />

          <Link to="/signup" className="signinlogin">
            회원가입 입장하기
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
