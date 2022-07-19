const MiniChatContent = (props) => {
  return (
    <div
      className={props.isChat ? "conversation-box active" : "conversation-box"}
    >
      <div className="con-title mg-3">
        <div className="chat-user-info">
          <img src="images/resources/us-img1.png" alt="" />
          <h3>
            John Doe <span className="status-info" />
          </h3>
        </div>
        <div className="st-icons">
          <a href="#!" title="">
            <i className="la la-cog" />
          </a>
          <a href="#!" title="" className="close-chat">
            <i className="la la-minus-square" />
          </a>
          <a href="#!" title="" className="close-chat">
            <i className="la la-close" />
          </a>
        </div>
      </div>
      <div className="chat-hist mCustomScrollbar _mCS_1" data-mcs-theme="dark">
        <div
          id="mCSB_1"
          className="mCustomScrollBox mCS-dark mCSB_vertical mCSB_inside"
          style={{ maxHeight: "none" }}
          tabIndex="0"
        >
          <div
            id="mCSB_1_container"
            className="mCSB_container"
            style={{ position: "relative", top: "0px", left: "0px" }}
            dir="ltr"
          >
            <div className="chat-msg">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                rutrum congue leo eget malesuada. Vivamus suscipit tortor eget
                felis porttitor.
              </p>
              <span>Sat, Aug 23, 1:10 PM</span>
            </div>
            <div className="date-nd">
              <span>Sunday, August 24</span>
            </div>
            <div className="chat-msg st2">
              <p>Cras ultricies ligula.</p>
              <span>5 minutes ago</span>
            </div>
            <div className="chat-msg">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                rutrum congue leo eget malesuada. Vivamus suscipit tortor eget
                felis porttitor.
              </p>
              <span>Sat, Aug 23, 1:10 PM</span>
            </div>
          </div>

          <div
            id="mCSB_1_scrollbar_vertical"
            className="mCSB_scrollTools mCSB_1_scrollbar mCS-dark mCSB_scrollTools_vertical"
            style={{ display: "block" }}
          >
            <div className="mCSB_draggerContainer">
              <div
                id="mCSB_1_dragger_vertical"
                className="mCSB_dragger"
                style={{
                  position: "absolute",
                  minHeight: "30px",
                  display: "block",
                  height: "196px",
                  maxHeight: "270px",
                  top: "0px",
                }}
              >
                <div
                  className="mCSB_dragger_bar"
                  style={{ lineHeight: "30px" }}
                ></div>
              </div>
              <div className="mCSB_draggerRail"></div>
            </div>
          </div>
        </div>
      </div>
      {/*chat-list end*/}
      <div className="typing-msg">
        <form>
          <textarea placeholder="Type a message here" defaultValue={""} />
          <button type="submit">
            <i className="fa fa-send" />
          </button>
        </form>
        <ul className="ft-options">
          <li>
            <a href="#" title="">
              <i className="la la-smile-o" />
            </a>
          </li>
          <li>
            <a href="#" title="">
              <i className="la la-camera" />
            </a>
          </li>
          <li>
            <a href="#" title="">
              <i className="fa fa-paperclip" />
            </a>
          </li>
        </ul>
      </div>
      {/*typing-msg end*/}
      {/*chat-history end*/}
    </div>
  );
};

export default MiniChatContent;
