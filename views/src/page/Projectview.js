import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

const Projectview = () => (
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
    <div className="modal" id="applyjob">
      <div className="modal-dialog modal-lg">
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
            <h3 className="text-light text-center">Place a Bid</h3>
          </div>
          <div className="modal-body">
            <div className="notice">
              <span className="text-danger">Note:</span>
              <span>
                Freelancer project fee will only be changed when you get awarded
                and accept the project.
              </span>
            </div>
            <div className="innerbody">
              <h3>Bids :</h3>
              <div className="paydel">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <h4>Paid to you :</h4>
                    <div className="place-bid-form">
                      <form>
                        <div className="form-row align-items-center">
                          <div className="col-auto">
                            <label
                              className="sr-only"
                              htmlFor="inlineFormInputGroup"
                            >
                              Username
                            </label>
                            <div className="input-group mb-2">
                              <div className="input-group-prepend">
                                <div className="input-group-text">$</div>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                id="inlineFormInputGroup"
                                placeholder={500}
                              />
                              <div className="input-group-prepend">
                                <div className="input-group-text">USD</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <h4>Delivery in :</h4>
                    <div className="place-bid-form delivery">
                      <form>
                        <div className="form-row align-items-center">
                          <div className="col-auto">
                            <label
                              className="sr-only"
                              htmlFor="inlineFormInputGroup"
                            >
                              Username
                            </label>
                            <div className="input-group mb-2">
                              <div className="input-group-prepend">
                                <div className="input-group-text">Days</div>
                              </div>
                              <select
                                id="exampleFormControlSelect1"
                                className="form-control"
                              >
                                <option>10</option>
                                <option>20</option>
                                <option>30</option>
                                <option>40</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <p>
                Freelancer Project Fee :<b> $55.56 USD</b>
              </p>
              <p>
                Your Bid : <b>$555.56 USD</b>
              </p>
            </div>
            <div className="beatcompitation">
              <h3>Super charge your bid and beat your competition!</h3>
            </div>
            <div className="sponser">
              <p>
                <i className="la la-check" />
                Sponser my bid! Be the first did seen by the employer.
              </p>
              <h2>$3.99 USD</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                rhoncus mauris sit amet leo feugiat mollis. Nam pharetra velit
                in viverra finibus.
              </p>
            </div>
          </div>
          <div className="modal-footer">
            <button className="place-bid-btn">Place a Bid</button>
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
                      <div className="col-12">
                        <ul>
                          <li>
                            <h3>Bids</h3>
                            <br />
                            <p>4</p>
                          </li>
                          <li>
                            <h3>Avg Bid (USD)</h3>
                            <br />
                            <p>$510</p>
                          </li>
                          <li>
                            <h3>Project Budget (USD)</h3>
                            <br />
                            <p>$500 - $600</p>
                          </li>
                          <li>
                            <h3>Views</h3>
                            <br />
                            <p>104</p>
                          </li>
                        </ul>
                        <div className="bids-time">
                          <h3>7 Days 22 Hours Left</h3>
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
                        <div className="job_descp accountnone">
                          <h3>Ios Shopping mobile app</h3>
                          <ul className="job-dt">
                            <li>
                              <span>$500 - $600</span>
                            </li>
                          </ul>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. In porttitor ligula et dolor dignissim, sit
                            amet efficitur felis maximus. Suspendisse metus
                            magna, tempus eu ultrices et, maximus id tellus. Ut
                            eu lacinia ante, id facilisis enim. s. ut suscipit
                            urna sollicitudin at... view more{" "}
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
                          <a href="#">
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
                    </div>
                    {/*post-bar end*/}
                  </div>
                  {/*posts-section end*/}
                </div>
                {/*main-ws-sec end*/}
                <div className="col-xl-3 col-lg-3 col-md-12">
                  <div className="right-sidebar">
                    <div className="widget widget-about bid-place">
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#applyjob"
                        data-whatever="@mdo"
                      >
                        Place a Bid
                      </button>
                    </div>
                    {/*widget-about end*/}
                    <div className="widget widget-projectid">
                      <h3>Project ID : 123456789</h3>
                      <p>Report Project</p>
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
                            <a href="#">5.00 of 5 Reviews</a>
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
                            <img src="images/social3.png" alt="image" />
                          </li>
                          <li>
                            <img src="images/social5.png" alt="image" />
                          </li>
                          <li>
                            <img src="images/social1.png" alt="image" />
                          </li>
                          <li>
                            <img src="images/social4.png" alt="image" />
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
              <div className="col-12">
                <div className="freelancerbiding">
                  <div className="row">
                    <div className="col-md-4 col-sm-12">
                      <h3>Freelancers Bidding (4)</h3>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div className="repcent">
                        <h3>
                          Reputation
                          <i className="la la-angle-down" />
                        </h3>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div className="bidrit">
                        <h3>Bid (USD)</h3>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-4 col-sm-12">
                      <div className="usy-dt">
                        <img src="images/resources/jass.png" alt="" />
                        <div className="usy-name">
                          <h3>Jass Singh</h3>
                          <span>
                            <img src="images/icon9.png" alt="" />
                            India
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div className="repcent">
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
                        </ul>
                        <span>4.5</span>
                        <p>3 Reviews</p>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div className="bidrit">
                        <h3>$510</h3>
                        <p>In 10 Days</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-4 col-sm-12">
                      <div className="usy-dt">
                        <img src="images/resources/jassica.jpg" alt="" />
                        <div className="usy-name">
                          <h3>Jassica William</h3>
                          <span>
                            <img src="images/icon9.png" alt="" />
                            New York
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div className="repcent">
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
                        </ul>
                        <span>5</span>
                        <p>12 Reviews</p>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div className="bidrit">
                        <h3>$510</h3>
                        <p>In 10 Days</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-4 col-sm-12">
                      <div className="usy-dt">
                        <img src="images/resources/rock.jpg" alt="" />
                        <div className="usy-name">
                          <h3>Afzal Ahmad</h3>
                          <span>
                            <img src="images/icon9.png" alt="" />
                            India
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div className="repcent">
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
                        </ul>
                        <span>4.5</span>
                        <p>2 Reviews</p>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div className="bidrit">
                        <h3>$510</h3>
                        <p>In 10 Days</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-4 col-sm-12">
                      <div className="usy-dt">
                        <img src="images/resources/smith.png" alt="" />
                        <div className="usy-name">
                          <h3>Rock Smith</h3>
                          <span>
                            <img src="images/icon9.png" alt="" />
                            Australia
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div className="repcent noreview">
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
                        </ul>
                        <span>No rating</span>
                        <p>0 Reviews</p>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div className="bidrit">
                        <h3>$510</h3>
                        <p>In 10 Days</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
            {/* main-section-data end*/}
          </div>
        </div>
      </main>
      <footer>
        <div className="footy-sec mn no-margin">
          <Footer />
        </div>
      </footer>
      {/*footer end*/}
    </div>
    {/*post-project-popup end*/}
    {/*theme-layout end*/}
  </>
);

export default Projectview;
