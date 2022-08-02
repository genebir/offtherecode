import PostProject from "./Component/Post/PostProject";
import PostJob from "./Component/Post/PostJob";

import MiniChat1 from "./Component/Message/MiniChat1";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Postbar from "./Component/Home/Postbar";

const HomeContents = (props) => {
  const [guest_feed, setGuest_feed] = useState([
    {
      guest_feed: "something",
      guest_feedwriter: "something writer",
      guest_feedcontent: "something content",
      guest_feedreply: "something reply",
      guest_feedimage: "something image",
    },
    {
      guest_feed: "something2",
      guest_feedwriter: "something writer2",
      guest_feedcontent: "something content2",
      guest_feedreply: "something reply2",
      guest_feedimage: "something image2",
    },
  ]);

  const DUMMY_DATA = [
    {
      username: "nick",
    },
    {
      user_Following: "100",
    },
    {
      user_Follower: "50",
    },
    {
      user_image: "images/resources/user3.png",
    },
    {
      guest_feed: "something",
      guest_feedwriter: "something writer",
      guest_feedcontent: "something content",
      guest_feedreply: "something reply",
      guest_feedimage: "something image",
    },
    {
      my_feedtitle: "something title",
      my_feedwriter: "something writer",
      my_feedcontent: "something content",
      my_feedreply: "something reply",
      my_feedimage: "something image",
    },
    {
      guest_info: "something info",
    },
  ];

  return (
    <>
      <main>
        <div className="main-section">
          <div className="container">
            <div className="main-section-data">
              <div className="row">
                <div className="col-lg-3 col-md-4 pd-left-none no-pd">
                  <div className="main-left-sidebar no-margin">
                    <div className="user-data full-width">
                      <div className="user-profile">
                        <div className="username-dt">
                          <div className="usr-pic">
                            <img src="images/resources/user-pic.png" alt="" />
                          </div>
                        </div>
                        {/*username-dt end*/}
                        <div className="user-specs">
                          <h3>{DUMMY_DATA[0].username}</h3>
                          <span>Graphic Designer at Self Employed</span>
                        </div>
                      </div>
                      {/*user-profile end*/}
                      <ul className="user-fw-status">
                        <li>
                          <h4>Following</h4>
                          <span>{DUMMY_DATA[1].user_Following}</span>
                        </li>
                        <li>
                          <h4>Followers</h4>
                          <span>{DUMMY_DATA[2].user_Follower}</span>
                        </li>
                        <li>
                          <a title="#!" onClick={props.myprofile}>
                            View Profile
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/*user-data end*/}
                    <div className="suggestions full-width">
                      <div className="sd-title">
                        <h3>Suggestions</h3>
                        <i className="la la-ellipsis-v" />
                      </div>
                      {/*sd-title end*/}
                      <div className="suggestions-list">
                        <div className="suggestion-usd">
                          <img src="images/resources/s1.png" alt="" />
                          <div className="sgt-text">
                            <h4>Jessica William</h4>
                            <span>Graphic Designer</span>
                          </div>
                          <span>
                            <i className="la la-plus" />
                          </span>
                        </div>
                        <div className="suggestion-usd">
                          <img src="images/resources/s2.png" alt="" />
                          <div className="sgt-text">
                            <h4>John Doe</h4>
                            <span>PHP Developer</span>
                          </div>
                          <span>
                            <i className="la la-plus" />
                          </span>
                        </div>
                        <div className="suggestion-usd">
                          <img src="images/resources/s3.png" alt="" />
                          <div className="sgt-text">
                            <h4>Poonam</h4>
                            <span>Wordpress Developer</span>
                          </div>
                          <span>
                            <i className="la la-plus" />
                          </span>
                        </div>
                        <div className="suggestion-usd">
                          <img src="images/resources/s4.png" alt="" />
                          <div className="sgt-text">
                            <h4>Bill Gates</h4>
                            <span>C &amp; C++ Developer</span>
                          </div>
                          <span>
                            <i className="la la-plus" />
                          </span>
                        </div>
                        <div className="suggestion-usd">
                          <img src="images/resources/s5.png" alt="" />
                          <div className="sgt-text">
                            <h4>Jessica William</h4>
                            <span>Graphic Designer</span>
                          </div>
                          <span>
                            <i className="la la-plus" />
                          </span>
                        </div>
                        <div className="suggestion-usd">
                          <img src="images/resources/s6.png" alt="" />
                          <div className="sgt-text">
                            <h4>John Doe</h4>
                            <span>PHP Developer</span>
                          </div>
                          <span>
                            <i className="la la-plus" />
                          </span>
                        </div>
                        <div className="view-more">
                          <a href="#" title="">
                            View More
                          </a>
                        </div>
                      </div>
                      {/*suggestions-list end*/}
                    </div>
                    {/*suggestions end*/}
                    <div className="tags-sec full-width">
                      <ul>
                        <li onClick={props.openFooterContent}>
                          <a href="#!" title="" onClick={props.helpcenter}>
                            Help Center
                          </a>
                        </li>
                        <li onClick={props.openFooterContent}>
                          <a href="#!" title="" onClick={props.about}>
                            About
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            Privacy Policy
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            Community Guidelines
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            Cookies Policy
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            Career
                          </a>
                        </li>
                        <li onClick={props.openFooterContent}>
                          <a href="#!" title="" onClick={props.forum}>
                            Forum
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            Language
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            Copyright Policy
                          </a>
                        </li>
                      </ul>
                      <div className="cp-sec">
                        <img src="images/logo2.png" alt="" />
                        <p>
                          <img src="images/cp.png" alt="" />
                          Copyright 2019
                        </p>
                      </div>
                    </div>
                    {/*tags-sec end*/}
                  </div>
                  {/*main-left-sidebar end*/}
                </div>
                <div className="col-lg-6 col-md-8 no-pd">
                  <div className="main-ws-sec">
                    <div className="post-topbar">
                      <div className="user-picy">
                        <img src="images/resources/user-pic.png" alt="" />
                      </div>
                      <div className="post-st">
                        <ul>
                          {/* <li>
                            <a
                              href="#!"
                              className="post_project"
                              title=""
                              onClick={props.isprojhandler}
                              style={{ cursor: "pointer" }}
                            >
                              피드작성하기
                            </a>
                          </li> */}
                          <li>
                            <a
                              href="#!"
                              className="post-jb"
                              title=""
                              onClick={props.isjobhandler}
                              style={{ cursor: "pointer" }}
                            >
                              피드작성하기
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/*post-st end*/}
                    </div>
                    {/*post-topbar end*/}
                    <div className="posts-section">
                      <Postbar feed={DUMMY_DATA[5]} guestfeed={guest_feed} />
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
                  {/*main-ws-sec end*/}
                </div>
                <div className="col-lg-3 pd-right-none no-pd">
                  <div className="right-sidebar">
                    <div className="widget widget-about">
                      <img src="images/wd-logo.png" alt="" />
                      <h3>Track Time on Workwise</h3>
                      <span>Pay only for the Hours worked</span>
                      <div className="sign_link">
                        <h3>
                          <Link to="/signin" title="">
                            Sign up
                          </Link>
                        </h3>
                      </div>
                    </div>
                    {/*widget-about end*/}
                    <div className="widget widget-jobs">
                      <div className="sd-title">
                        <h3>Top Jobs</h3>
                        <i className="la la-ellipsis-v" />
                      </div>
                      <div className="jobs-list">
                        <div className="job-info">
                          <div className="job-details">
                            <h3>Senior Product Designer</h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit..
                            </p>
                          </div>
                          <div className="hr-rate">
                            <span>$25/hr</span>
                          </div>
                        </div>
                        {/*job-info end*/}
                        <div className="job-info">
                          <div className="job-details">
                            <h3>Senior UI / UX Designer</h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit..
                            </p>
                          </div>
                          <div className="hr-rate">
                            <span>$25/hr</span>
                          </div>
                        </div>
                        {/*job-info end*/}
                        <div className="job-info">
                          <div className="job-details">
                            <h3>Junior Seo Designer</h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit..
                            </p>
                          </div>
                          <div className="hr-rate">
                            <span>$25/hr</span>
                          </div>
                        </div>
                        {/*job-info end*/}
                        <div className="job-info">
                          <div className="job-details">
                            <h3>Senior PHP Designer</h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit..
                            </p>
                          </div>
                          <div className="hr-rate">
                            <span>$25/hr</span>
                          </div>
                        </div>
                        {/*job-info end*/}
                        <div className="job-info">
                          <div className="job-details">
                            <h3>Senior Developer Designer</h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit..
                            </p>
                          </div>
                          <div className="hr-rate">
                            <span>$25/hr</span>
                          </div>
                        </div>
                        {/*job-info end*/}
                      </div>
                      {/*jobs-list end*/}
                    </div>
                    {/*widget-jobs end*/}
                    <div className="widget widget-jobs">
                      <div className="sd-title">
                        <h3>Most Viewed This Week</h3>
                        <i className="la la-ellipsis-v" />
                      </div>
                      <div className="jobs-list">
                        <div className="job-info">
                          <div className="job-details">
                            <h3>Senior Product Designer</h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit..
                            </p>
                          </div>
                          <div className="hr-rate">
                            <span>$25/hr</span>
                          </div>
                        </div>
                        {/*job-info end*/}
                        <div className="job-info">
                          <div className="job-details">
                            <h3>Senior UI / UX Designer</h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit..
                            </p>
                          </div>
                          <div className="hr-rate">
                            <span>$25/hr</span>
                          </div>
                        </div>
                        {/*job-info end*/}
                        <div className="job-info">
                          <div className="job-details">
                            <h3>Junior Seo Designer</h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit..
                            </p>
                          </div>
                          <div className="hr-rate">
                            <span>$25/hr</span>
                          </div>
                        </div>
                        {/*job-info end*/}
                      </div>
                      {/*jobs-list end*/}
                    </div>
                    {/*widget-jobs end*/}
                    <div className="widget suggestions full-width">
                      <div className="sd-title">
                        <h3>Most Viewed People</h3>
                        <i className="la la-ellipsis-v" />
                      </div>
                      {/*sd-title end*/}
                      <div className="suggestions-list">
                        <div className="suggestion-usd">
                          <img src="images/resources/s1.png" alt="" />
                          <div className="sgt-text">
                            <h4>Jessica William</h4>
                            <span>Graphic Designer</span>
                          </div>
                          <span>
                            <i className="la la-plus" />
                          </span>
                        </div>
                        <div className="suggestion-usd">
                          <img src="images/resources/s2.png" alt="" />
                          <div className="sgt-text">
                            <h4>John Doe</h4>
                            <span>PHP Developer</span>
                          </div>
                          <span>
                            <i className="la la-plus" />
                          </span>
                        </div>
                        <div className="suggestion-usd">
                          <img src="images/resources/s3.png" alt="" />
                          <div className="sgt-text">
                            <h4>Poonam</h4>
                            <span>Wordpress Developer</span>
                          </div>
                          <span>
                            <i className="la la-plus" />
                          </span>
                        </div>
                        <div className="suggestion-usd">
                          <img src="images/resources/s4.png" alt="" />
                          <div className="sgt-text">
                            <h4>Bill Gates</h4>
                            <span>C &amp; C++ Developer</span>
                          </div>
                          <span>
                            <i className="la la-plus" />
                          </span>
                        </div>
                        <div className="suggestion-usd">
                          <img src="images/resources/s5.png" alt="" />
                          <div className="sgt-text">
                            <h4>Jessica William</h4>
                            <span>Graphic Designer</span>
                          </div>
                          <span>
                            <i className="la la-plus" />
                          </span>
                        </div>
                        <div className="suggestion-usd">
                          <img src="images/resources/s6.png" alt="" />
                          <div className="sgt-text">
                            <h4>John Doe</h4>
                            <span>PHP Developer</span>
                          </div>
                          <span>
                            <i className="la la-plus" />
                          </span>
                        </div>
                        <div className="view-more">
                          <a href="#" title="">
                            View More
                          </a>
                        </div>
                      </div>
                      {/*suggestions-list end*/}
                    </div>
                  </div>
                  {/*right-sidebar end*/}
                </div>
              </div>
            </div>
            {/* main-section-data end*/}
          </div>
        </div>
      </main>

      <PostProject
        isprojhandler={props.isprojhandler}
        isProject={props.isProject}
      />
      {/* {state === 1 ? <PostProject /> : null} */}
      {/*post-project-popup end*/}
      {/* {state === 2 ? <PostJob /> : null} */}
      <PostJob isjobhandler={props.isjobhandler} isJob={props.isJob} />

      {/*post-project-popup end*/}
      <div className="chatbox-list">
        <MiniChat1 />
      </div>
      {/*chatbox-list end*/}
      {/* </div>
      </body> */}
      {/*theme-layout end*/}
    </>
  );
};

export default HomeContents;
