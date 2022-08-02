import { useState } from "react";
import Comment from "./Comment";

const Postbar = (props) => {
  const changeContent = () => {
    setIsContent((event) => !event);
  };
  const [isContent, setIsContent] = useState(false);

  return (
    <>
      {props.guestfeed.map((item) => {
        return (
          <div className="posty">
            <div className="post-bar no-margin">
              <div className="post_topbar">
                <div className="usy-dt">
                  <img src="images/resources/us-pc2.png" alt="" />
                  <div className="usy-name">
                    <h3>{item.guest_feedwriter}</h3>
                    <span>
                      <img src="images/clock.png" alt="" />3 min ago
                    </span>
                  </div>
                </div>
                <div className="ed-opts">
                  <a href="#" title="" className="ed-opts-open">
                    <i className="la la-ellipsis-v" />
                  </a>
                  <ul className="ed-options">
                    <li>
                      <a href="#" title="">
                        Edit Post
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        Unsaved
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        Unbid
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        Close
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                        Hide
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="epi-sec">
                <ul className="descp">
                  <li>
                    <img src="images/icon8.png" alt="" />
                    <span>Epic Coder</span>
                  </li>
                  <li>
                    <img src="images/icon9.png" alt="" />
                    <span>India</span>
                  </li>
                </ul>
                <ul className="bk-links">
                  <li>
                    <a href="#" title="">
                      <i className="la la-bookmark" />
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      <i className="la la-envelope" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="job_descp">
                <h3>Senior Wordpress Developer</h3>
                <ul className="job-dt">
                  <li>
                    <a href="#" title="">
                      Full Time
                    </a>
                  </li>
                  <li>
                    <span>$30 / hr</span>
                  </li>
                </ul>
                <p>
                  {item.guest_feedcontent}
                  <a href="#" title="">
                    view more
                  </a>
                </p>
                <ul className="skill-tags">
                  <li>{item.guest_feedimage}</li>
                </ul>
              </div>
              <div className="job-status-bar">
                <ul className="like-com">
                  <li>
                    <a href="#">
                      <i className="fas fa-heart" /> Like
                    </a>
                    <img src="images/liked-img.png" alt="" />
                    <span>25</span>
                  </li>
                  <li>
                    <a href="#" className="com">
                      <i className="fas fa-comment-alt" /> Comment 15
                    </a>
                  </li>
                </ul>
                <a href="#">
                  <i className="fas fa-eye" />
                  Views 50
                </a>
              </div>
              <a
                href="#!"
                className="plus-ic"
                style={{ marginTop: "10px" }}
                onClick={changeContent}
              >
                <i className="la la-plus" />
              </a>
            </div>
            {/*post-bar end*/}
            {isContent && <Comment comment={props.guestfeed} />}
            {/*comment-section end*/}
          </div>
        );
      })}
    </>
  );
};

export default Postbar;
