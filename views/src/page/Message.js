import { useCallback, useEffect, useRef, useState } from "react";
import LeftBanner from "./Component/Message/LeftBanner";
import MessageForm from "./Component/Message/MeesageForm";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

const Message = () => {
  const scrollRef = useRef();
  const [editDone, setEditDone] = useState();
  const inputmessage = useRef();
  const [userMessageList, setUserMessageList] = useState([
    { m: "Lorem ipsum dolor sit amet" },
    { m: "Lorem ipsum dolor sit amet" },
    { m: "Lorem ipsum dolor sit amet" },
  ]);
  const [myMessageList, setMyMessageList] = useState([
    {
      m: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecrutrum congue leo eget malesuada. Vivamus suscipit tortor egetfelis porttitor.",
    },
    {
      m: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecrutrum congue leo eget malesuada. Vivamus suscipit tortor egetfelis porttitor.",
    },
    {
      m: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecrutrum congue leo eget malesuada. Vivamus suscipit tortor egetfelis porttitor.",
    },
    {
      m: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donecrutrum congue leo eget malesuada. Vivamus suscipit tortor egetfelis porttitor.",
    },
  ]);
  const SendMessage = (event) => {
    event.preventDefault();
    const enteredMessage = inputmessage.current.value;
    setMyMessageList([...myMessageList, { m: enteredMessage }]);
    console.log(myMessageList);
    inputmessage.current.value = "";
  };

  const scrollbottom = () => {
    if (editDone) {
      scrollRef.scrollTop = scrollRef.scrollHeight - scrollRef.clientHeight;
      setEditDone(false);
    }
  };

  useEffect(() => {
    scrollbottom();
  }, [scrollRef, scrollbottom]);

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

      {/*header end*/}
      <section className="messages-page">
        <div className="container">
          <div className="messages-sec">
            <div className="row">
              <div className="col-lg-4 col-md-12 no-pdd">
                <div className="msgs-list">
                  <div className="msg-title">
                    <h3>Messages</h3>
                    <ul>
                      <li>
                        <a href="#" title="">
                          <i className="fa fa-cog" />
                        </a>
                      </li>
                      <li>
                        <a href="#" title="">
                          <i className="fa fa-ellipsis-v" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/*msg-title end*/}
                  <div className="messages-list">
                    <LeftBanner />
                  </div>
                  {/*messages-list end*/}
                </div>
                {/*msgs-list end*/}
              </div>
              <div className="col-lg-8 col-md-12 pd-right-none pd-left-none">
                <div
                  className="main-conversation-box"
                  ref={scrollRef}
                  style={{ overflow: "scroll" }}
                >
                  <div className="message-bar-head">
                    <div className="usr-msg-details">
                      <div className="usr-ms-img">
                        <img src="images/resources/m-img1.png" alt="" />
                      </div>
                      <div className="usr-mg-info">
                        <h3>John Doe</h3>
                        <p>Online</p>
                      </div>
                      {/*usr-mg-info end*/}
                    </div>
                    <a href="#" title="">
                      <i className="fa fa-ellipsis-v" />
                    </a>
                  </div>
                  {/*message-bar-head end*/}
                  <div
                    className="messages-line mCustomScrollbar _mCS_1"
                    style={{ height: "auto" }}
                  >
                    <div
                      id="mCSB_1"
                      className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside"
                      style={{ maxHeight: "none" }}
                      tabIndex="0"
                    >
                      <div
                        id="mCSB_1_container"
                        className="mCSB_container"
                        style={{
                          position: "relative",
                          top: "0px",
                          left: "0px",
                        }}
                        dir="ltr"
                      >
                        <MessageForm
                          myMessageList={myMessageList}
                          userMessageList={userMessageList}
                        />
                      </div>
                    </div>
                    {/*main-message-box end*/}
                  </div>
                  {/*messages-line end*/}
                  <div className="message-send-area">
                    <form onSubmit={SendMessage}>
                      <div className="mf-field">
                        <input
                          type="text"
                          name="message"
                          placeholder="Type a message here"
                          ref={inputmessage}
                        />
                        <button type="submit">Send</button>
                      </div>
                      <ul>
                        <li>
                          <a href="#" title="">
                            <i className="fa fa-smile-o" />
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            <i className="fa fa-camera" />
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            <i className="fa fa-paperclip" />
                          </a>
                        </li>
                      </ul>
                    </form>
                  </div>
                  {/*message-send-area end*/}
                </div>
                {/*main-conversation-box end*/}
              </div>
            </div>
          </div>
          {/*messages-sec end*/}
        </div>
      </section>
      {/*messages-page end*/}
      <footer>
        <div className="footy-sec mn no-margin">
          <Footer />
        </div>
      </footer>
    </>
  );
};

export default Message;
