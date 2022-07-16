const MiniChat3 = () => {
  return (
    <div className="chatbox">
      <div className="chat-mg bx">
        <a href="#" title="">
          <img src="images/chat.png" alt="" />
        </a>
        <span>2</span>
      </div>
      <div className="conversation-box">
        <div className="con-title">
          <h3>Messages</h3>
          <a href="#" title="" className="close-chat">
            <i className="la la-minus-square" />
          </a>
        </div>
        <div className="chat-list">
          <div className="conv-list active">
            <div className="usrr-pic">
              <img src="images/resources/usy1.png" alt="" />
              <span className="active-status activee" />
            </div>
            <div className="usy-info">
              <h3>John Doe</h3>
              <span>
                Lorem ipsum dolor <img src="images/smley.png" alt="" />
              </span>
            </div>
            <div className="ct-time">
              <span>1:55 PM</span>
            </div>
            <span className="msg-numbers">2</span>
          </div>
          <div className="conv-list">
            <div className="usrr-pic">
              <img src="images/resources/usy2.png" alt="" />
            </div>
            <div className="usy-info">
              <h3>John Doe</h3>
              <span>
                Lorem ipsum dolor <img src="images/smley.png" alt="" />
              </span>
            </div>
            <div className="ct-time">
              <span>11:39 PM</span>
            </div>
          </div>
          <div className="conv-list">
            <div className="usrr-pic">
              <img src="images/resources/usy3.png" alt="" />
            </div>
            <div className="usy-info">
              <h3>John Doe</h3>
              <span>
                Lorem ipsum dolor <img src="images/smley.png" alt="" />
              </span>
            </div>
            <div className="ct-time">
              <span>0.28 AM</span>
            </div>
          </div>
        </div>
        {/*chat-list end*/}
      </div>
      {/*conversation-box end*/}
    </div>
  );
};

export default MiniChat3;
