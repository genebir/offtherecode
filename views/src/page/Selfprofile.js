import { useReducer } from "react";
import Bids from "./Component/SelfProfile/Bids";
import Feed from "./Component/SelfProfile/Feed";
import Info from "./Component/SelfProfile/Info/Info";
import OverviewEdit from "./Component/SelfProfile/Info/OverviewEdit";
import Jobs from "./Component/SelfProfile/Jobs";
import Mybids from "./Component/SelfProfile/Mybids";
import Payment from "./Component/SelfProfile/Payment";
import PortFolio from "./Component/SelfProfile/PortFolio";
import Reviews from "./Component/SelfProfile/Reviews";
import RightSidebar from "./Component/SelfProfile/RightSidebar";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

const selfprofilebanner = (states, action) => {
  switch (action.type) {
    case "FEED":
      return (states = 1);
    case "INFO":
      return (states = 2);
    case "JOBS":
      return (states = 3);
    case "BIDS":
      return (states = 4);
    case "PORTFOLIO":
      return (states = 5);
    case "REVIEWS":
      return (states = 6);
    case "PAYMENT":
      return (states = 7);
    default:
      return (states = 1);
  }
};

const Selfprofile = () => {
  const [state, dispatch] = useReducer(selfprofilebanner, 1);

  const feed = () => {
    dispatch({
      type: "FEED",
    });
  };

  const info = () => {
    dispatch({
      type: "INFO",
    });
  };

  const jobs = () => {
    dispatch({
      type: "JOBS",
    });
  };

  const bids = () => {
    dispatch({
      type: "BIDS",
    });
  };

  const portfolio = () => {
    dispatch({
      type: "PORTFOLIO",
    });
  };

  const reviews = () => {
    dispatch({
      type: "REVIEWS",
    });
  };

  const payment = () => {
    dispatch({
      type: "PAYMENT",
    });
  };
  return (
    <>
      <meta charSet="UTF-8" />
      <title>WorkWise Html Template</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="" />
      <meta name="keywords" content="" />
      <link rel="stylesheet" type="text/css" href="css/animate.css" />
      <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
      <link rel="stylesheet" type="text/css" href="css/flatpickr.min.css" />
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
      <body>
        <div className="wrapper">
          <Header />
          {/*header end*/}
          <section className="cover-sec">
            <img
              src={`${process.env.PUBLIC_URL}/images/resources/cover-img.jpg`}
              alt=""
            />
            <div className="add-pic-box">
              <div className="container">
                <div className="row no-gutters">
                  <div className="col-lg-12 col-sm-12">
                    <input type="file" id="file" />
                    <label htmlFor="file">Change Image</label>
                  </div>
                </div>
              </div>
            </div>
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
                            <img
                              src={`${process.env.PUBLIC_URL}/images/resources/user-pro-img.png`}
                              alt=""
                            />
                            <div className="add-dp" id="OpenImgUpload">
                              <input type="file" id="file" />
                              <label htmlFor="file">
                                <i class="fas fa-camera" />
                              </label>
                            </div>
                          </div>
                          {/*user-pro-img end*/}
                          <div className="user_pro_status">
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
                            <h3>People Viewed Profile</h3>
                            <i className="la la-ellipsis-v" />
                          </div>
                          {/*sd-title end*/}
                          <div className="suggestions-list">
                            <div className="suggestion-usd">
                              <img
                                src={`${process.env.PUBLIC_URL}/images/resources/s1.png`}
                                alt=""
                              />
                              <div className="sgt-text">
                                <h4>Jessica William</h4>
                                <span>Graphic Designer</span>
                              </div>
                              <span>
                                <i className="la la-plus" />
                              </span>
                            </div>
                            <div className="suggestion-usd">
                              <img
                                src={`${process.env.PUBLIC_URL}/images/resources/s2.png`}
                                alt=""
                              />
                              <div className="sgt-text">
                                <h4>John Doe</h4>
                                <span>PHP Developer</span>
                              </div>
                              <span>
                                <i className="la la-plus" />
                              </span>
                            </div>
                            <div className="suggestion-usd">
                              <img
                                src={`${process.env.PUBLIC_URL}/images/resources/s3.png`}
                                alt=""
                              />
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
                        <div className="user-tab-sec rewivew">
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
                            <a href="#" title="">
                              Status
                            </a>
                          </div>
                          {/*star-descp end*/}
                          <div className="tab-feed st2 settingjb">
                            <ul>
                              <li data-tab="feed-dd" className="active">
                                <a title="" onClick={feed}>
                                  <img
                                    src={`${process.env.PUBLIC_URL}/images/ic1.png`}
                                    alt=""
                                  />
                                  <span>Feed</span>
                                </a>
                              </li>
                              <li data-tab="info-dd">
                                <a title="" onClick={info}>
                                  <img
                                    src={`${process.env.PUBLIC_URL}/images/ic2.png`}
                                    alt=""
                                  />
                                  <span>Info</span>
                                </a>
                              </li>
                              <li data-tab="saved-jobs">
                                <a title="" onClick={jobs}>
                                  <img
                                    src={`${process.env.PUBLIC_URL}/images/ic4.png`}
                                    alt=""
                                  />
                                  <span>Jobs</span>
                                </a>
                              </li>
                              <li data-tab="my-bids">
                                <a title="" onClick={bids}>
                                  <img
                                    src={`${process.env.PUBLIC_URL}/images/ic5.png`}
                                    alt=""
                                  />
                                  <span>Bids</span>
                                </a>
                              </li>
                              <li data-tab="portfolio-dd">
                                <a title="" onClick={portfolio}>
                                  <img
                                    src={`${process.env.PUBLIC_URL}/images/ic6.png`}
                                    alt=""
                                  />
                                  <span>Portfolio</span>
                                </a>
                              </li>
                              <li data-tab="rewivewdata">
                                <a title="" onClick={reviews}>
                                  <img
                                    src={`${process.env.PUBLIC_URL}/images/review.png`}
                                    alt=""
                                  />
                                  <span>Reviews</span>
                                </a>
                              </li>
                              <li data-tab="payment-dd">
                                <a title="" onClick={payment}>
                                  <img
                                    src={`${process.env.PUBLIC_URL}/images/ic6.png`}
                                    alt=""
                                  />
                                  <span>Payment</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                          {/* tab-feed end*/}
                        </div>
                        {/*user-tab-sec end*/}
                        {state === 1 ? <Feed /> : null}
                        {state === 2 ? <Info /> : null}
                        {state === 3 ? <Jobs /> : null}
                        {state === 4 ? <Bids /> : null}
                        {state === 5 ? <PortFolio /> : null}
                        {state === 6 ? <Reviews /> : null}
                        {state === 7 ? <Payment /> : null}
                        {/* <Mybids />  본인 피드는 조건 만족시 출력*/}
                      </div>
                      {/*main-ws-sec end*/}
                    </div>
                    <div className="col-lg-3">
                      <RightSidebar />
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
          <OverviewEdit />
          <div className="overview-box" id="experience-box">
            <div className="overview-edit">
              <h3>Experience</h3>
              <form>
                <input type="text" name="subject" placeholder="Subject" />
                <textarea defaultValue={""} />
                <button type="submit" className="save">
                  Save
                </button>
                <button type="submit" className="save-add">
                  Save &amp; Add More
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
          <div className="overview-box" id="education-box">
            <div className="overview-edit">
              <h3>Education</h3>
              <form>
                <input
                  type="text"
                  name="school"
                  placeholder="School / University"
                />
                <div className="datepicky">
                  <div className="row">
                    <div className="col-lg-6 no-left-pd">
                      <div className="datefm">
                        <input
                          type="text"
                          name="from"
                          placeholder="From"
                          className="datepicker"
                        />
                        <i className="fa fa-calendar" />
                      </div>
                    </div>
                    <div className="col-lg-6 no-righ-pd">
                      <div className="datefm">
                        <input
                          type="text"
                          name="to"
                          placeholder="To"
                          className="datepicker"
                        />
                        <i className="fa fa-calendar" />
                      </div>
                    </div>
                  </div>
                </div>
                <input type="text" name="degree" placeholder="Degree" />
                <textarea placeholder="Description" defaultValue={""} />
                <button type="submit" className="save">
                  Save
                </button>
                <button type="submit" className="save-add">
                  Save &amp; Add More
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
          <div className="overview-box" id="location-box">
            <div className="overview-edit">
              <h3>Location</h3>
              <form>
                <div className="datefm">
                  <select>
                    <option>Country</option>
                    <option value="pakistan">Pakistan</option>
                    <option value="england">England</option>
                    <option value="india">India</option>
                    <option value="usa">United Sates</option>
                  </select>
                  <i className="fa fa-globe" />
                </div>
                <div className="datefm">
                  <select>
                    <option>City</option>
                    <option value="london">London</option>
                    <option value="new-york">New York</option>
                    <option value="sydney">Sydney</option>
                    <option value="chicago">Chicago</option>
                  </select>
                  <i className="fa fa-map-marker" />
                </div>
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
          <div className="overview-box" id="skills-box">
            <div className="overview-edit">
              <h3>Skills</h3>
              <ul>
                <li>
                  <a href="#" title="" className="skl-name">
                    HTML
                  </a>
                  <a href="#" title="" className="close-skl">
                    <i className="la la-close" />
                  </a>
                </li>
                <li>
                  <a href="#" title="" className="skl-name">
                    php
                  </a>
                  <a href="#" title="" className="close-skl">
                    <i className="la la-close" />
                  </a>
                </li>
                <li>
                  <a href="#" title="" className="skl-name">
                    css
                  </a>
                  <a href="#" title="" className="close-skl">
                    <i className="la la-close" />
                  </a>
                </li>
              </ul>
              <form>
                <input type="text" name="skills" placeholder="Skills" />
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
          <div className="overview-box" id="create-portfolio">
            <div className="overview-edit">
              <h3>Create Portfolio</h3>
              <form>
                <input
                  type="text"
                  name="pf-name"
                  placeholder="Portfolio Name"
                />
                <div className="file-submit">
                  <input type="file" id="file" />
                  <label htmlFor="file">Choose File</label>
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
      </body>

      {/*theme-layout end*/}
    </>
  );
};

export default Selfprofile;
