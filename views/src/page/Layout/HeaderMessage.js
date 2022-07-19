import { Link } from "react-router-dom";

const HeaderMessage = (props) => {
  return (
    <div>
      <div
        className="notification-box msg"
        id="message"
        style={{ display: "block" }}
      >
        <div className="nt-title">
          <h4>Setting</h4>
          <a href="#" title="">
            Clear all
          </a>
        </div>
        <div className="nott-list">
          <div className="notfication-details">
            <div className="noty-user-img">
              <img src="images/resources/ny-img1.png" alt="" />
            </div>
            <div className="notification-info">
              <h3>
                <a href="messages.html" title="">
                  Jassica William
                </a>{" "}
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                do.
              </p>
              <span>2 min ago</span>
            </div>
            {/*notification-info */}
          </div>
          <div className="notfication-details">
            <div className="noty-user-img">
              <img src="images/resources/ny-img2.png" alt="" />
            </div>
            <div className="notification-info">
              <h3>
                <a href="messages.html" title="">
                  Jassica William
                </a>
              </h3>
              <p>Lorem ipsum dolor sit amet.</p>
              <span>2 min ago</span>
            </div>
            {/*notification-info */}
          </div>
          <div className="notfication-details">
            <div className="noty-user-img">
              <img src="images/resources/ny-img3.png" alt="" />
            </div>
            <div className="notification-info">
              <h3>
                <a href="messages.html" title="">
                  Jassica William
                </a>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempo incididunt ut labore et dolore magna aliqua.
              </p>
              <span>2 min ago</span>
            </div>
            {/*notification-info */}
          </div>
          <div className="view-all-nots" onClick={props.messagebanner}>
            <a href="#!" title="" onClick={props.messages}>
              View All Messsages
            </a>
          </div>
        </div>
        {/*nott-list end*/}
      </div>
    </div>
  );
};

export default HeaderMessage;
