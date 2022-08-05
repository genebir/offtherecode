const Feed = (props) => {
  return (
    <div>
      <div
        className={
          props.state === 1
            ? "product-feed-tab animated fadeIn current"
            : "product-feed-tab animated fadeIn"
        }
        id="feed-dd"
      >
        <div className="posts-section">
          <div className="post-bar">
            <div className="post_topbar">
              <div className="usy-dt">
                <img src="images/resources/us-pic.png" alt="" />
                <div className="usy-name">
                  <h3>{props.MY_FEED[0].my_feednick}</h3>
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
                {props.MY_FEED[1].my_feedcontent}
                <a href="#" title="">
                  view more
                </a>
              </p>
              <ul className="skill-tags">
                <li>{props.MY_FEED[4].my_feedskill}</li>
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
          </div>
          {/*post-bar end*/}

          <div className="process-comm">
            <div className="spinner">
              <div className="bounce1" />
              <div className="bounce2" />
              <div className="bounce3" />
            </div>
          </div>
          {/*process-comm end*/}
        </div>
        {/*posts-section end*/}
      </div>
      {/*product-feed-tab end*/}
    </div>
  );
};

export default Feed;
