import PostProject from "./Component/Post/PostProject";
import PostJob from "./Component/Post/PostJob";

import MiniChat1 from "./Component/Message/MiniChat1";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Postbar from "./Component/Home/Postbar";
import HomeProfile from "./Component/Home/HomeProfile";
import Update from "./Component/Post/Update";

const HomeContents = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [Data, setData] = useState([]);
  const [updateData, setUpdateData] = useState([]);

  const fetchdata = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "http://localhost:8888/feed/detail?feed_pno=1",
        {
          method: "GET",
        }
      ).then((response) => response.json());
      setData(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  // setUpdateData(Object.values(Data));
  console.log(typeof updateData);
  console.log(typeof Data);

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      {!isLoading ? (
        <>
          {" "}
          <main>
            <div className="main-section">
              <div className="container">
                <div className="main-section-data">
                  <div className="row">
                    <div className="col-lg-3 col-md-4 pd-left-none no-pd">
                      <div className="main-left-sidebar no-margin">
                        {Data && (
                          <HomeProfile
                            Data={Data}
                            myprofile={props.myprofile}
                          />
                        )}
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
                          <div
                            className="post-st"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              float: "none",
                            }}
                          >
                            <ul>
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
                          {Data && (
                            <Postbar isUpdateHandler={props.isUpdateHandler} />
                          )}
                          {/*post-bar end*/}

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
                            {/*job-info end*/}
                            <i className="la la-ellipsis-v" />
                          </div>
                          <div className="jobs-list">
                            <div className="job-info">
                              <div className="job-details">
                                <h3>Senior Product Designer</h3>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit..
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
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit..
                                </p>
                              </div>
                              <div className="hr-rate">
                                <span>$25/hr</span>
                              </div>
                            </div>
                            <div className="job-info">
                              <div className="job-details">
                                <h3>Junior Seo Designer</h3>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit..
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
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit..
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
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit..
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
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit..
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
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit..
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
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit..
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
          <PostJob isjobhandler={props.isjobhandler} isJob={props.isJob} />
          <Update
            updateData={updateData}
            isUpdate={props.isUpdate}
            isUpdateHandler={props.isUpdateHandler}
          />
          {/*post-project-popup end*/}
          <div className="chatbox-list">
            <MiniChat1 />
          </div>
        </>
      ) : (
        <div className="process-comm">
          <div className="spinner">
            <div className="bounce1" />
            <div className="bounce2" />
            <div className="bounce3" />
          </div>
        </div>
      )}
    </>
  );
};

export default HomeContents;
