const MiniChat2 = () => {
  return (
    <div className="chatbox">
      <div className="chat-mg">
        <a href="#" title="">
          <img src="images/resources/usr-img2.png" alt="" />
        </a>
      </div>
      <div className="conversation-box">
        <div className="con-title mg-3">
          <div className="chat-user-info">
            <img src="images/resources/us-img1.png" alt="" />
            <h3>
              John Doe <span className="status-info" />
            </h3>
          </div>
          <div className="st-icons">
            <a href="#" title="">
              <i className="la la-cog" />
            </a>
            <a href="#" title="" className="close-chat">
              <i className="la la-minus-square" />
            </a>
            <a href="#" title="" className="close-chat">
              <i className="la la-close" />
            </a>
          </div>
        </div>
        <div className="chat-hist mCustomScrollbar" data-mcs-theme="dark">
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
      </div>
      {/*chat-history end*/}
    </div>
  );
};

export default MiniChat2;
