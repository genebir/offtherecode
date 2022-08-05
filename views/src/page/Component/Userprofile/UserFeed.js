const UserFeed = () => {
  return (
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
          luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna
          sit amet...{" "}
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
              <i className="fas fa-comment-alt" /> Comments 15
            </a>
          </li>
        </ul>
        <a href="#">
          <i className="fas fa-eye" />
          Views 50
        </a>
      </div>
    </div>
  );
};

export default UserFeed;
