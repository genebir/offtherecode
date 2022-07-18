const ForumBoard = (props) => {
  return (
    <div className="forum-questions">
      {props.searchList.length === 0
        ? props.boardlist.map((item) => {
            return (
              <div className="usr-question">
                <div className="usr_img">
                  <img src="images/resources/usrr-img1.png" alt="" />
                </div>
                <div className="usr_quest">
                  <h3>{item.title}</h3>
                  <ul className="react-links">
                    <li>
                      <a href="#" title="">
                        <i className="fas fa-heart" /> Vote 150
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        <i className="fas fa-comment-alt" /> Comments 15
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        <i className="fas fa-eye" /> Views 50
                      </a>
                    </li>
                  </ul>
                  <ul className="quest-tags">
                    <li>
                      <a href="#" title="">
                        Work
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        Php
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        Design
                      </a>
                    </li>
                  </ul>
                </div>
                {/*usr_quest end*/}
                <span className="quest-posted-time">
                  <i className="fa fa-clock-o" />3 min ago
                </span>
              </div>
            );
          })
        : props.searchList.map((item) => {
            return (
              <div className="usr-question">
                <div className="usr_img">
                  <img src="images/resources/usrr-img1.png" alt="" />
                </div>
                <div className="usr_quest">
                  <h3>{item.title}</h3>
                  <ul className="react-links">
                    <li>
                      <a href="#" title="">
                        <i className="fas fa-heart" /> Vote 150
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        <i className="fas fa-comment-alt" /> Comments 15
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        <i className="fas fa-eye" /> Views 50
                      </a>
                    </li>
                  </ul>
                  <ul className="quest-tags">
                    <li>
                      <a href="#" title="">
                        Work
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        Php
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        Design
                      </a>
                    </li>
                  </ul>
                </div>
                {/*usr_quest end*/}
                <span className="quest-posted-time">
                  <i className="fa fa-clock-o" />3 min ago
                </span>
              </div>
            );
          })}

      {/*forum-questions end*/}
    </div>
  );
};

export default ForumBoard;
