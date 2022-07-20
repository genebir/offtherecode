import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

const Applyjob = () => (
  <>
    <meta charSet="UTF-8" />
    <title>WorkWise Html Template</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <link rel="stylesheet" type="text/css" href="css/animate.css" />
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="css/jquery.range.css" />
    <link rel="stylesheet" type="text/css" href="css/line-awesome.css" />
    <link
      rel="stylesheet"
      type="text/css"
      href="css/line-awesome-font-awesome.min.css"
    />
    <link
      href="vendor/fontawesome-free/css/all.min.css"
      rel="stylesheet"
      type="text/css"
    />
    <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" />
    <link rel="stylesheet" type="text/css" href="lib/slick/slick.css" />
    <link rel="stylesheet" type="text/css" href="lib/slick/slick-theme.css" />
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <link rel="stylesheet" type="text/css" href="css/responsive.css" />
    <div className="modal" id="mymodal">
      <div className="modal-dialog">
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">×</span>
        </button>
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="text-light text-center">Apply a Job</h3>
          </div>
          <div className="modal-body">
            <div className="innerbody apply-jobbox">
              <h3>Attach File With CV</h3>
              <form>
                <input type="text" placeholder="Full Name" />
                <br />
                <input type="email" placeholder="Email Address" />
              </form>
              <div className="select-files">
                <input type="file" className="custom-file-input" />
                <p>Upload your cv / resume file. Max file size : 3MB</p>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button className="place-bid-btn">Apply a Job</button>
            <button>Cancel</button>
          </div>
        </div>
      </div>
    </div>
    <div className="wrapper">
      <Header />
      {/*header end*/}
      <main>
        <div className="main-section">
          <div className="container">
            <div className="main-section-data">
              <div className="row">
                <div className="col-xl-9 col-lg-9 col-md-12">
                  <div className="bids-detail">
                    <div className="row">
                      <div className="col-12 appliedjob">
                        <ul>
                          <li>
                            <h3>Applicants</h3>
                            <br />
                            <p>10</p>
                          </li>
                          <li>
                            <h3>Job Type</h3>
                            <br />
                            <p>Full Time</p>
                          </li>
                          <li>
                            <h3>Salary</h3>
                            <br />
                            <p>$600 - Mannual</p>
                          </li>
                          <li>
                            <h3>Views</h3>
                            <br />
                            <p>195</p>
                          </li>
                        </ul>
                        <div className="bids-time">
                          <h3>Posted : 5 Days Ago</h3>
                          <br />
                          <p>Open</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="main-ws-sec">
                    <div className="posts-section">
                      <div className="post-bar">
                        <div className="post_topbar">
                          <div className="usy-dt">
                            <img src="images/resources/bg-img2.png" alt="" />
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
                        <div className="job_descp accountnone">
                          <h3>Senior Wordpress Developer</h3>
                          <ul className="job-dt">
                            <li>
                              <a href="#">Full Time</a>
                            </li>
                            <li>
                              <span>$600 / Mannual</span>
                            </li>
                          </ul>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. In porttitor ligula et dolor dignissim, sit
                            amet efficitur felis maximus. Suspendisse metus
                            magna, tempus eu ultrices et, maximus id tellus. Ut
                            eu lacinia ante, id facilisis enim. s. ut suscipit
                            urna sollicitudin at...
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
                        <div className="job-status-bar btm-line">
                          <ul className="like-com">
                            <li>
                              <a href="#" className="active">
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
                          <a>
                            <i className="fas fa-eye" />
                            Views 50
                          </a>
                        </div>
                        <div className="comment-area">
                          <i className="la la-plus-circle" />
                          <div className="post_topbar">
                            <div className="usy-dt">
                              <img src="images/resources/bg-img1.png" alt="" />
                              <div className="usy-name">
                                <h3>John Doe</h3>
                                <span>
                                  <img src="images/clock.png" alt="" />3 min ago
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="reply-area">
                            <p>Lorem ipsum dolor sit amet,</p>
                            <span>
                              <i className="la la-mail-reply" />
                              Reply
                            </span>
                            <div className="comment-area reply-rply1">
                              <div className="post_topbar">
                                <div className="usy-dt">
                                  <img
                                    src="images/resources/bg-img2.png"
                                    alt=""
                                  />
                                  <div className="usy-name">
                                    <h3>John Doe</h3>
                                    <span>
                                      <img src="images/clock.png" alt="" />3 min
                                      ago
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="reply-area">
                                <p>Lorem ipsum dolor sit amet,</p>
                                <p>Hi John</p>
                                <span>
                                  <i className="la la-mail-reply" />
                                  Reply
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="comment-area">
                          <div className="post_topbar">
                            <div className="usy-dt">
                              <img src="images/resources/bg-img3.png" alt="" />
                              <div className="usy-name">
                                <h3>John Doe</h3>
                                <span>
                                  <img src="images/clock.png" alt="" />3 min ago
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="reply-area">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Aliquam luctus hendrerit metus, ut
                              ullamcorper quam finibus at.
                            </p>
                            <span>
                              <i className="la la-mail-reply" />
                              Reply
                            </span>
                          </div>
                        </div>
                        <div className="postcomment">
                          <div className="row">
                            <div className="col-md-2">
                              <img src="images/resources/bg-img4.png" alt="" />
                            </div>
                            <div className="col-md-8">
                              <form>
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="inputPassword"
                                    placeholder="Post a comment"
                                  />
                                </div>
                              </form>
                            </div>
                            <div className="col-md-2">
                              <a href="#">Send</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*post-bar end*/}
                    </div>
                    {/*posts-section end*/}
                  </div>
                  {/*main-ws-sec end*/}
                </div>
                <div className="col-xl-3 col-lg-3 col-md-12">
                  <div className="right-sidebar">
                    <div className="widget widget-about bid-place">
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#mymodal"
                        data-whatever="@mdo"
                      >
                        Apply a Job Now
                      </button>
                    </div>
                    {/*widget-about end*/}
                    <div className="widget widget-projectid">
                      <h3>Project ID : 123456789</h3>
                      <p>Report Job</p>
                    </div>
                    {/*widget-about end*/}
                    <div className="widget widget-jobs">
                      <div className="sd-title">
                        <h3>About the Client</h3>
                        <i className="la la-ellipsis-v" />
                      </div>
                      <div className="sd-title paymethd">
                        <h4>Payment Method</h4>
                        <p>Verified</p>
                        <ul className="star">
                          <li>
                            <i className="fa fa-star" />
                          </li>
                          <li>
                            <i className="fa fa-star" />
                          </li>
                          <li>
                            <i className="fa fa-star" />
                          </li>
                          <li>
                            <i className="fa fa-star" />
                          </li>
                          <li>
                            <i className="fa fa-star-half-o" />
                          </li>
                          <li>
                            <a>5.00 of 5 Reviews</a>
                          </li>
                        </ul>
                      </div>
                      <div className="sd-title">
                        <h4>India</h4>
                        <p>SKS Nagar, Ludhiana 1 AM</p>
                      </div>
                      <div className="sd-title">
                        <h4>20 Projects Posted | 15 Jobs Posted</h4>
                        <p>85% Hire Rate, 15% Open Jobs</p>
                      </div>
                      <div className="sd-title">
                        <h4>Member Since</h4>
                        <p>August 24, 2017</p>
                      </div>
                    </div>
                    {/*widget-jobs end*/}
                    <div className="widget widget-jobs">
                      <div className="sd-title">
                        <h3>Project Link</h3>
                        <i className="la la-ellipsis-v" />
                      </div>
                      <div className="sd-title copylink">
                        <p>Http://www.workwise.com/pro...</p>
                        <span>
                          <a href="#">Copy Link</a>
                        </span>
                      </div>
                    </div>
                    {/*widget-jobs end*/}
                    <div className="widget widget-jobs">
                      <div className="sd-title">
                        <h3>Share</h3>
                      </div>
                      <div className="sd-title copylink">
                        <ul>
                          <li>
                            <img src="images/social3.png" alt="image" />{" "}
                          </li>
                          <li>
                            <img src="images/social4.png" alt="image" />
                          </li>
                          <li>
                            <img src="images/social1.png" alt="image" />
                          </li>
                          <li>
                            <img src="images/social5.png" alt="image" />
                          </li>
                          <li>
                            <img src="images/social2.png" alt="image" />
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/*widget-jobs end*/}
                  </div>
                  {/*right-sidebar end*/}
                </div>
              </div>
              {/* freelancerbiding */}
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="footy-sec mn no-margin">
          <Footer />
        </div>
      </footer>
      {/*footer end*/}
      <div className="post-popup pst-pj">
        <div className="post-project">
          <h3>Post a project</h3>
          <div className="post-project-fields">
            <form>
              <div className="row">
                <div className="col-lg-12">
                  <input type="text" name="title" placeholder="Title" />
                </div>
                <div className="col-lg-12">
                  <div className="inp-field">
                    <select>
                      <option>Category</option>
                      <option>Category 1</option>
                      <option>Category 2</option>
                      <option>Category 3</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <input type="text" name="skills" placeholder="Skills" />
                </div>
                <div className="col-lg-12">
                  <div className="price-sec">
                    <div className="price-br">
                      <input type="text" name="price1" placeholder="Price" />
                      <i className="la la-dollar" />
                    </div>
                    <span>To</span>
                    <div className="price-br">
                      <input type="text" name="price1" placeholder="Price" />
                      <i className="la la-dollar" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <textarea
                    name="description"
                    placeholder="Description"
                    defaultValue={""}
                  />
                </div>
                <div className="col-lg-12">
                  <ul>
                    <li>
                      <button className="active" type="submit" value="post">
                        Post
                      </button>
                    </li>
                    <li>
                      <a href="#" title="">
                        Cancel
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
          {/*post-project-fields end*/}
          <a href="#" title="">
            <i className="la la-times-circle-o" />
          </a>
        </div>
        {/*post-project end*/}
      </div>
      {/*post-project-popup end*/}
      <div className="post-popup job_post">
        <div className="post-project">
          <h3>Post a job</h3>
          <div className="post-project-fields">
            <form>
              <div className="row">
                <div className="col-lg-12">
                  <input type="text" name="title" placeholder="Title" />
                </div>
                <div className="col-lg-12">
                  <div className="inp-field">
                    <select>
                      <option>Category</option>
                      <option>Category 1</option>
                      <option>Category 2</option>
                      <option>Category 3</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <input type="text" name="skills" placeholder="Skills" />
                </div>
                <div className="col-lg-6">
                  <div className="price-br">
                    <input type="text" name="price1" placeholder="Price" />
                    <i className="la la-dollar" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="inp-field">
                    <select>
                      <option>Full Time</option>
                      <option>Half time</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <textarea
                    name="description"
                    placeholder="Description"
                    defaultValue={""}
                  />
                </div>
                <div className="col-lg-12">
                  <ul>
                    <li>
                      <button className="active" type="submit" value="post">
                        Post
                      </button>
                    </li>
                    <li>
                      <a href="#" title="">
                        Cancel
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
          {/*post-project-fields end*/}
          <a href="#" title="">
            <i className="la la-times-circle-o" />
          </a>
        </div>
        {/*post-project end*/}
      </div>
      {/*post-project-popup end*/}
    </div>
    {/*theme-layout end*/}
  </>
);

export default Applyjob;
