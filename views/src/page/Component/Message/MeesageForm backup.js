const MessageFormBack = (props) => {
  return (
    <>
      {props.myMessageList.map((item) => {
        return (
          <div className="main-message-box ta-right" style={{ right: "0%" }}>
            <div className="message-dt">
              <div className="message-inner-dt">
                <p>{item.m}</p>
              </div>
              {/*message-inner-dt end*/}
              <span>Sat, Aug 23, 1:08 PM</span>
            </div>
            {/*message-dt end*/}
            <div className="messg-usr-img">
              <img src="images/resources/m-img2.png" alt="" />
            </div>
            {/*messg-usr-img end*/}
          </div>
        );
      })}
      {/*main-message-box end*/}

      {props.userMessageList.map((item) => {
        return (
          <div className="main-message-box st3">
            <div className="message-dt st3">
              <div className="message-inner-dt">
                <p>
                  {item.m}
                  <img src="images/smley.png" alt="" />
                </p>
              </div>
              {/*message-inner-dt end*/}
              <span>5 minutes ago</span>
            </div>
            {/*message-dt end*/}
            <div className="messg-usr-img">
              <img src="images/resources/m-img1.png" alt="" />
            </div>
            {/*messg-usr-img end*/}
          </div>
        );
      })}

      {/*main-message-box end*/}

      {/*main-message-box end*/}
    </>
  );
};

export default MessageFormBack;
