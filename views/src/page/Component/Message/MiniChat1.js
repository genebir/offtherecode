import { useState } from "react";
import $ from "jquery";
import MiniChatContent from "./MiniChatContent";

const MiniChat1 = () => {
  const [isChat, setIsChat] = useState(false);

  const Chathandler = () => {
    setIsChat((event) => !event);
  };

  return (
    <div className="chatbox">
      <div className="chat-mg" onClick={Chathandler}>
        <a title="">
          <img src="images/resources/usr-img1.png" alt="" />
        </a>
        <span>2</span>
      </div>
      {isChat && <MiniChatContent isChat={isChat} />}
    </div>
  );
};

export default MiniChat1;
