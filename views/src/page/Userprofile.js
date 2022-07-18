import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

const Userprofile = () => (
  <>
    <meta charSet="UTF-8" />
    <title>WorkWise Html Template</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <link rel="stylesheet" type="text/css" href="css/animate.css" />
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
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
    <div className="wrapper">
      <Header />
      {/*header end*/}
      <section className="cover-sec">
        <img src="images/resources/cover-img.jpg" alt="" />
      </section>
      <main>
        <div className="main-section">
          <div className="container">
            <div className="main-section-data">
              <div className="row">
                <div className="col-lg-3">
                  <div className="main-left-sidebar">
                    <div className="user_profile">
                      <div className="user-pro-img">
                        <img src="images/resources/user-pro-img.png" alt="" />
                      </div>
                      {/*user-pro-img end*/}
                      <div className="user_pro_status">
                        <ul className="flw-hr">
                          <li>
                            <a href="#" title="" className="flww">
                              <i className="la la-plus" /> Follow
                            </a>
                          </li>
                          <li>
                            <a href="#" title="" className="hre">
                              Hire
                            </a>
                          </li>
                        </ul>
                        <ul className="flw-status">
                          <li>
                            <span>Following</span>
                            <b>34</b>
                          </li>
                          <li>
                            <span>Followers</span>
                            <b>155</b>
                          </li>
                        </ul>
                      </div>
                      {/*user_pro_status end*/}
                      <ul className="social_links">
                        <li>
                          <a href="#" title="">
                            <i className="la la-globe" /> www.example.com
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            <i className="fa fa-facebook-square" />{" "}
                            Http://www.facebook.com/john...
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            <i className="fa fa-twitter" />{" "}
                            Http://www.Twitter.com/john...
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            <i className="fa fa-google-plus-square" />{" "}
                            Http://www.googleplus.com/john...
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            <i className="fa fa-behance-square" />{" "}
                            Http://www.behance.com/john...
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            <i className="fa fa-pinterest" />{" "}
                            Http://www.pinterest.com/john...
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            <i className="fa fa-instagram" />{" "}
                            Http://www.instagram.com/john...
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            <i className="fa fa-youtube" />{" "}
                            Http://www.youtube.com/john...
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/*user_profile end*/}
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
                  </div>
                  {/*main-left-sidebar end*/}
                </div>
                <div className="col-lg-6">
                  <div className="main-ws-sec">
                    <div className="user-tab-sec">
                      <h3>John Doe</h3>
                      <div className="star-descp">
                        <span>Graphic Designer at Self Employed</span>
                        <ul>
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
                      </div>
                      {/*star-descp end*/}
                      <div className="tab-feed">
                        <ul>
                          <li data-tab="feed-dd" className="active">
                            <a href="#" title="">
                              <img src="images/ic1.png" alt="" />
                              <span>Feed</span>
                            </a>
                          </li>
                          <li data-tab="info-dd">
                            <a href="#" title="">
                              <img src="images/ic2.png" alt="" />
                              <span>Info</span>
                            </a>
                          </li>
                          <li data-tab="portfolio-dd">
                            <a href="#" title="">
                              <img src="images/ic3.png" alt="" />
                              <span>Portfolio</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* tab-feed end*/}
                    </div>
                    {/*user-tab-sec end*/}
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
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Aliquam luctus hendrerit metus, ut
                              ullamcorper quam finibus at. Etiam id magna sit
                              amet...{" "}
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
                                  <i className="fas fa-comment-alt" /> Comments
                                  15
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
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Aliquam luctus hendrerit metus, ut
                              ullamcorper quam finibus at. Etiam id magna sit
                              amet...{" "}
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
                                  <i className="fas fa-comment-alt" /> Comments
                                  15
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
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Aliquam luctus hendrerit metus, ut
                              ullamcorper quam finibus at. Etiam id magna sit
                              amet...{" "}
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
                                  <i className="fas fa-comment-alt" /> Comments
                                  15
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
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Aliquam luctus hendrerit metus, ut
                              ullamcorper quam finibus at. Etiam id magna sit
                              amet...{" "}
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
                                  <i className="fas fa-comment-alt" /> Comments
                                  15
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
                    <div className="product-feed-tab" id="info-dd">
                      <div className="user-profile-ov">
                        <h3>Overview</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque tempor aliquam felis, nec condimentum
                          ipsum commodo id. Vivamus sit amet augue nec urna
                          efficitur tincidunt. Vivamus consectetur aliquam
                          lectus commodo viverra. Nunc eu augue nec arcu
                          efficitur faucibus. Aliquam accumsan ac magna
                          convallis bibendum. Quisque laoreet augue eget augue
                          fermentum scelerisque. Vivamus dignissim mollis est
                          dictum blandit. Nam porta auctor neque sed congue.
                          Nullam rutrum eget ex at maximus. Lorem ipsum dolor
                          sit amet, consectetur adipiscing elit. Donec eget
                          vestibulum lorem.
                        </p>
                      </div>
                      {/*user-profile-ov end*/}
                      <div className="user-profile-ov st2">
                        <h3>Experience</h3>
                        <h4>Web designer</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque tempor aliquam felis, nec condimentum
                          ipsum commodo id. Vivamus sit amet augue nec urna
                          efficitur tincidunt. Vivamus consectetur aliquam
                          lectus commodo viverra.{" "}
                        </p>
                        <h4>UI / UX Designer</h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque tempor aliquam felis, nec condimentum
                          ipsum commodo id.
                        </p>
                        <h4>PHP developer</h4>
                        <p className="no-margin">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque tempor aliquam felis, nec condimentum
                          ipsum commodo id. Vivamus sit amet augue nec urna
                          efficitur tincidunt. Vivamus consectetur aliquam
                          lectus commodo viverra.{" "}
                        </p>
                      </div>
                      {/*user-profile-ov end*/}
                      <div className="user-profile-ov">
                        <h3>Education</h3>
                        <h4>Master of Computer Science</h4>
                        <span>2015 - 2018</span>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque tempor aliquam felis, nec condimentum
                          ipsum commodo id. Vivamus sit amet augue nec urna
                          efficitur tincidunt. Vivamus consectetur aliquam
                          lectus commodo viverra.{" "}
                        </p>
                      </div>
                      {/*user-profile-ov end*/}
                      <div className="user-profile-ov">
                        <h3>Location</h3>
                        <h4>India</h4>
                        <p>151/4 BT Chownk, Delhi </p>
                      </div>
                      {/*user-profile-ov end*/}
                      <div className="user-profile-ov">
                        <h3>Skills</h3>
                        <ul>
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
                          <li>
                            <a href="#" title="">
                              Photoshop
                            </a>
                          </li>
                          <li>
                            <a href="#" title="">
                              Illustrator
                            </a>
                          </li>
                          <li>
                            <a href="#" title="">
                              Corel Draw
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/*user-profile-ov end*/}
                    </div>
                    {/*product-feed-tab end*/}
                    <div className="product-feed-tab" id="portfolio-dd">
                      <div className="portfolio-gallery-sec">
                        <h3>Portfolio</h3>
                        <div className="gallery_pf">
                          <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                              <div className="gallery_pt">
                                <img
                                  src="images/resources/pf-img1.jpg"
                                  alt=""
                                />
                                <a href="#" title="">
                                  <img src="images/all-out.png" alt="" />
                                </a>
                              </div>
                              {/*gallery_pt end*/}
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                              <div className="gallery_pt">
                                <img
                                  src="images/resources/pf-img2.jpg"
                                  alt=""
                                />
                                <a href="#" title="">
                                  <img src="images/all-out.png" alt="" />
                                </a>
                              </div>
                              {/*gallery_pt end*/}
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                              <div className="gallery_pt">
                                <img
                                  src="images/resources/pf-img3.jpg"
                                  alt=""
                                />
                                <a href="#" title="">
                                  <img src="images/all-out.png" alt="" />
                                </a>
                              </div>
                              {/*gallery_pt end*/}
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                              <div className="gallery_pt">
                                <img
                                  src="images/resources/pf-img4.jpg"
                                  alt=""
                                />
                                <a href="#" title="">
                                  <img src="images/all-out.png" alt="" />
                                </a>
                              </div>
                              {/*gallery_pt end*/}
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                              <div className="gallery_pt">
                                <img
                                  src="images/resources/pf-img5.jpg"
                                  alt=""
                                />
                                <a href="#" title="">
                                  <img src="images/all-out.png" alt="" />
                                </a>
                              </div>
                              {/*gallery_pt end*/}
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                              <div className="gallery_pt">
                                <img
                                  src="images/resources/pf-img6.jpg"
                                  alt=""
                                />
                                <a href="#" title="">
                                  <img src="images/all-out.png" alt="" />
                                </a>
                              </div>
                              {/*gallery_pt end*/}
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                              <div className="gallery_pt">
                                <img
                                  src="images/resources/pf-img7.jpg"
                                  alt=""
                                />
                                <a href="#" title="">
                                  <img src="images/all-out.png" alt="" />
                                </a>
                              </div>
                              {/*gallery_pt end*/}
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                              <div className="gallery_pt">
                                <img
                                  src="images/resources/pf-img8.jpg"
                                  alt=""
                                />
                                <a href="#" title="">
                                  <img src="images/all-out.png" alt="" />
                                </a>
                              </div>
                              {/*gallery_pt end*/}
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                              <div className="gallery_pt">
                                <img
                                  src="images/resources/pf-img9.jpg"
                                  alt=""
                                />
                                <a href="#" title="">
                                  <img src="images/all-out.png" alt="" />
                                </a>
                              </div>
                              {/*gallery_pt end*/}
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                              <div className="gallery_pt">
                                <img
                                  src="images/resources/pf-img10.jpg"
                                  alt=""
                                />
                                <a href="#" title="">
                                  <img src="images/all-out.png" alt="" />
                                </a>
                              </div>
                              {/*gallery_pt end*/}
                            </div>
                          </div>
                        </div>
                        {/*gallery_pf end*/}
                      </div>
                      {/*portfolio-gallery-sec end*/}
                    </div>
                    {/*product-feed-tab end*/}
                  </div>
                  {/*main-ws-sec end*/}
                </div>
                <div className="col-lg-3">
                  <div className="right-sidebar">
                    <div className="message-btn">
                      <a href="#" title="">
                        <i className="fa fa-envelope" /> Message
                      </a>
                    </div>
                    <div className="widget widget-portfolio">
                      <div className="wd-heady">
                        <h3>Portfolio</h3>
                        <img src="images/photo-icon.png" alt="" />
                      </div>
                      <div className="pf-gallery">
                        <ul>
                          <li>
                            <a href="#" title="">
                              <img
                                src="images/resources/pf-gallery1.png"
                                alt=""
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="">
                              <img
                                src="images/resources/pf-gallery2.png"
                                alt=""
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="">
                              <img
                                src="images/resources/pf-gallery3.png"
                                alt=""
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="">
                              <img
                                src="images/resources/pf-gallery4.png"
                                alt=""
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="">
                              <img
                                src="images/resources/pf-gallery5.png"
                                alt=""
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="">
                              <img
                                src="images/resources/pf-gallery6.png"
                                alt=""
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="">
                              <img
                                src="images/resources/pf-gallery7.png"
                                alt=""
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="">
                              <img
                                src="images/resources/pf-gallery8.png"
                                alt=""
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="">
                              <img
                                src="images/resources/pf-gallery9.png"
                                alt=""
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="">
                              <img
                                src="images/resources/pf-gallery10.png"
                                alt=""
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="">
                              <img
                                src="images/resources/pf-gallery11.png"
                                alt=""
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#" title="">
                              <img
                                src="images/resources/pf-gallery12.png"
                                alt=""
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/*pf-gallery end*/}
                    </div>
                    {/*widget-portfolio end*/}
                  </div>
                  {/*right-sidebar end*/}
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
      <div className="overview-box" id="create-portfolio">
        <div className="overview-edit">
          <h3>Create Portfolio</h3>
          <form>
            <input type="text" name="pf-name" placeholder="Portfolio Name" />
            <div className="file-submit">
              <input type="file" name="file" />
            </div>
            <div className="pf-img">
              <img src="images/resources/np.png" alt="" />
            </div>
            <input
              type="text"
              name="website-url"
              placeholder="htp://www.example.com"
            />
            <button type="submit" className="save">
              Save
            </button>
            <button type="submit" className="cancel">
              Cancel
            </button>
          </form>
          <a href="#" title="" className="close-box">
            <i className="la la-close" />
          </a>
        </div>
        {/*overview-edit end*/}
      </div>
      {/*overview-box end*/}
    </div>
    {/*theme-layout end*/}
  </>
);

export default Userprofile;
