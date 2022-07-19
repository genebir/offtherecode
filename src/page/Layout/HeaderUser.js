import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";

const HeaderUser = (props) => {
  const authCtx = useContext(AuthContext);
  return (
    <div
      className="user-account-settingss"
      id="users"
      style={props.isuser ? { display: "block" } : { display: "none" }}
    >
      <h3>Online Status</h3>
      <ul className="on-off-status">
        <li>
          <div className="fgt-sec">
            <input type="radio" name="cc" id="c5" />
            <label htmlFor="c5">
              <span />
            </label>
            <small>Online</small>
          </div>
        </li>
        <li>
          <div className="fgt-sec">
            <input type="radio" name="cc" id="c6" />
            <label htmlFor="c6">
              <span />
            </label>
            <small>Offline</small>
          </div>
        </li>
      </ul>
      <h3>Custom Status</h3>
      <div className="search_form">
        <form>
          <input type="text" name="search" />
          <button type="submit">Ok</button>
        </form>
      </div>
      {/*search_form end*/}
      <h3>Setting</h3>
      <ul className="us-links">
        <li>
          <a href="#!" title="" onClick={props.settings}>
            Account Setting
          </a>
        </li>
        <li>
          <a href="#" title="">
            Privacy
          </a>
        </li>
        <li>
          <a href="#" title="">
            Faqs
          </a>
        </li>
        <li>
          <a href="#" title="">
            Terms &amp; Conditions
          </a>
        </li>
      </ul>
      <h3 className="tc">
        <div onClick={authCtx.onLogout} title="" style={{ cursor: "pointer" }}>
          Logout
        </div>
      </h3>
      {/*user-account-settingss end*/}
    </div>
  );
};

export default HeaderUser;
