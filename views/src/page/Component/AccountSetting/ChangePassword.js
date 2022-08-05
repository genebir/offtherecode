import { useContext, useState } from "react";
import AuthContext from "../../../store/auth-context";
import PassWordChangeErrorModal from "../../Layout/Modal/PassWordChangeErrorModal";
import classees from "./ChangePassword.module.css";
import FindPassword from "./FindPassword";

const ChangePassword = () => {
  const authCtx = useContext(AuthContext);
  const [IsError, setIsError] = useState(false);
  const [Isfind, setIsFind] = useState(false);
  const [currentPassword, setCurrentPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [checkNewPassword, setCheckNewPassword] = useState();

  const restore = (e) => {
    e.preventDefault();
    if (
      currentPassword !== "" ||
      newPassword !== "" ||
      checkNewPassword !== ""
    ) {
      setCurrentPassword("");
      setNewPassword("");
      setCheckNewPassword("");
    } else {
      return;
    }
  };

  const fetchPassword = (passworddata) => {
    fetch(
      "https://react-http-fa2fe-default-rtdb.firebaseio.com/passwordchange.json",
      {
        method: "POST",
        body: JSON.stringify(passworddata),
        headers: authCtx.currenttoken(localStorage.getItem("token")), //폼 데이터
      }
    ).then((response) => console.log(response));
  };

  const submitHandler = () => {
    if (
      newPassword === checkNewPassword &&
      (newPassword !== "" || checkNewPassword !== "")
    ) {
      const PasswordJsonData = {
        token: sessionStorage.getItem("token"),
        currentPassword: currentPassword,
        newPassword: newPassword,
      };
      try {
        fetchPassword(PasswordJsonData);
        setCurrentPassword("");
        setNewPassword("");
        setCheckNewPassword("");
      } catch (e) {
        console.log(e.message);
        setIsError(true);
      }
    } else {
      setIsError(true);
    }
  };

  const closeErrorHandler = () => {
    setIsError(false);
  };

  return (
    <div className={classees.board}>
      {IsError && (
        <PassWordChangeErrorModal closeErrorHandler={closeErrorHandler} />
      )}
      <div
        className="tab-pane fade show active"
        id="nav-password"
        role="tabpanel"
        aria-labelledby="nav-password-tab"
      >
        <div
          className="acc-setting"
          style={Isfind ? { height: "140vh" } : { height: "70vh" }}
        >
          <h3>Account Setting</h3>
          <form style={{ marginBottom: "1rem" }}>
            <div className="cp-field">
              <h5>Old Password</h5>
              <div className="cpp-fiel">
                <input
                  type="text"
                  name="old-password"
                  placeholder="Old Password"
                  value={currentPassword}
                  onChange={(e) => {
                    setCurrentPassword(e.target.value);
                  }}
                />
                <i className="fa fa-lock" />
              </div>
            </div>
            <div className="cp-field">
              <h5>New Password</h5>
              <div className="cpp-fiel">
                <input
                  type="text"
                  name="new-password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                  }}
                />
                <i className="fa fa-lock" />
              </div>
            </div>
            <div className="cp-field">
              <h5>Repeat Password</h5>
              <div className="cpp-fiel">
                <input
                  type="text"
                  name="repeat-password"
                  placeholder="Repeat Password"
                  value={checkNewPassword}
                  onChange={(e) => {
                    setCheckNewPassword(e.target.value);
                  }}
                />
                <i className="fa fa-lock" />
              </div>
            </div>
            <div className="cp-field" style={{ marginBottom: "2rem" }}>
              <h5>
                <a href="#!" title="" onClick={() => setIsFind((e) => !e)}>
                  Forgot Password?
                </a>
              </h5>
            </div>
            <div className="btns">
              <a href="#!" onClick={submitHandler}>
                Save Setting
              </a>

              <a href="#!" onClick={restore}>
                Restore Setting
              </a>
            </div>
            {/*save-stngs end*/}
          </form>
          {Isfind && <FindPassword />}
        </div>
        {/*acc-setting end*/}
      </div>
    </div>
  );
};

export default ChangePassword;
