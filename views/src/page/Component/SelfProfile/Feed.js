const Feed = () => {
  return (
    <div>
      <div className="product-feed-tab current" id="feed-dd">
        <div className="posts-section">
          <div className="post-bar">
            <div className="post_topbar">
              <div className="usy-dt">
                <img src="images/resources/us-pic.png" alt="" />
                <div className="usy-name">
                  <h3>John Doe</h3>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id
                magna sit amet...{" "}
                <a href="#" title="">
                  view more
                </a>
              </p>
              <ul className="skill-tags">
                <li>
                  <a href="#" title="">
                    HTML
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    PHP
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    CSS
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    Javascript
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    Wordpress
                  </a>
                </li>
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
          <div className="post-bar">
            <div className="post_topbar">
              <div className="usy-dt">
                <img src="images/resources/us-pic.png" alt="" />
                <div className="usy-name">
                  <h3>John Doe</h3>
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
                  <span>Front End Developer</span>
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
                <li>
                  <a href="#" title="" className="bid_now">
                    Bid Now
                  </a>
                </li>
              </ul>
            </div>
            <div className="job_descp">
              <h3>Simple Classified Site</h3>
              <ul className="job-dt">
                <li>
                  <span>$300 - $350</span>
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id
                magna sit amet...{" "}
                <a href="#" title="">
                  view more
                </a>
              </p>
              <ul className="skill-tags">
                <li>
                  <a href="#" title="">
                    HTML
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    PHP
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    CSS
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    Javascript
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    Wordpress
                  </a>
                </li>
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
          <div className="post-bar">
            <div className="post_topbar">
              <div className="usy-dt">
                <img src="images/resources/us-pc2.png" alt="" />
                <div className="usy-name">
                  <h3>John Doe</h3>
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
              <h3>Senior UI / UX designer</h3>
              <ul className="job-dt">
                <li>
                  <a href="#" title="">
                    Par Time
                  </a>
                </li>
                <li>
                  <span>$10 / hr</span>
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id
                magna sit amet...{" "}
                <a href="#" title="">
                  view more
                </a>
              </p>
              <ul className="skill-tags">
                <li>
                  <a href="#" title="">
                    HTML
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    PHP
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    CSS
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    Javascript
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    Wordpress
                  </a>
                </li>
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
          <div className="post-bar">
            <div className="post_topbar">
              <div className="usy-dt">
                <img src="images/resources/us-pic.png" alt="" />
                <div className="usy-name">
                  <h3>John Doe</h3>
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
                <li>
                  <a href="#" title="" className="bid_now">
                    Bid Now
                  </a>
                </li>
              </ul>
            </div>
            <div className="job_descp">
              <h3>Ios Shopping mobile app</h3>
              <ul className="job-dt">
                <li>
                  <span>$300 - $350</span>
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id
                magna sit amet...{" "}
                <a href="#" title="">
                  view more
                </a>
              </p>
              <ul className="skill-tags">
                <li>
                  <a href="#" title="">
                    HTML
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    PHP
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    CSS
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    Javascript
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    Wordpress
                  </a>
                </li>
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
