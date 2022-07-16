import { useState } from "react";
import $ from "jquery";
import MiniChatContent from "./MiniChatContent";

const MiniChat1 = () => {
  const [isChat, setIsChat] = useState(2);

  const Chathandler = () => {
    if (isChat === 2) {
      setIsChat(1);
      console.log(isChat);
    } else {
      setIsChat(2);
      console.log(isChat);
    }
  };

  return (
    <div className="chatbox">
      <div className="chat-mg" onClick={Chathandler}>
        <a title="">
          <img src="images/resources/usr-img1.png" alt="" />
        </a>
        <span>2</span>
      </div>
      {isChat === 1 ? <MiniChatContent /> : null}
    </div>
  );
};

export default MiniChat1;
