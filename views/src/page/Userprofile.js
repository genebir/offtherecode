import { useEffect, useReducer } from "react";
import UserFeed from "./Component/Userprofile/UserFeed";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

const Userprofile = () => {
  const DUMMY_DATA = [
    { userprofile: "userprofile data" },
    { userfeeddata: "userfeeddata" },
    { userwikidata: "userwikidata" },
    { userinfo: "userinfo" },
    { username: "username" },
    { userskill: "userskill" },
  ];

  const userprofileBanner = (states, action) => {
    switch (action.type) {
      case "Feed":
        return (states = 1);
      case "Info":
        return (states = 2);
      case "Wiki":
        return (states = 3);
    }
  };

  // 상대프로필 초기 데이터 가져오기
  useEffect(() => {
    fetch("", {
      method: "GET",
    });
  }, []);
  const [state, dispatch] = useReducer(userprofileBanner, 1);

  const Feed = () => {
    dispatch({
      type: "Feed",
    });
  };

  const Info = () => {
    dispatch({
      type: "Info",
    });
  };

  const Wiki = () => {
    dispatch({
      type: "Wiki",
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
                        <h3>{DUMMY_DATA[4].username}</h3>
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
                            <li
                              data-tab="feed-dd"
                              className={state === 1 ? "active" : null}
                            >
                              <a href="#!" title="" onClick={Feed}>
                                <img src="images/ic1.png" alt="" />
                                <span>Feed</span>
                              </a>
                            </li>
                            <li
                              data-tab="info-dd"
                              className={state === 2 ? "active" : null}
                            >
                              <a href="#!" title="" onClick={Info}>
                                <img src="images/ic2.png" alt="" />
                                <span>Info</span>
                              </a>
                            </li>
                            <li
                              data-tab="portfolio-dd"
                              className={state === 3 ? "active" : null}
                            >
                              <a href="#!" title="" onClick={Wiki}>
                                <img src="images/ic3.png" alt="" />
                                <span>Wiki</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/* tab-feed end*/}
                      </div>
                      {/*user-tab-sec end*/}
                      <div
                        className={
                          state === 1
                            ? "product-feed-tab current"
                            : "product-feed-tab"
                        }
                        id="feed-dd"
                      >
                        <div className="posts-section">
                          {state === 1 && <UserFeed />}
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
                      <div
                        className={
                          state === 2
                            ? "product-feed-tab current"
                            : "product-feed-tab"
                        }
                        id="info-dd"
                      >
                        <div className="user-profile-ov">
                          <h3>Overview</h3>
                          <p>{DUMMY_DATA[3].userinfo}</p>
                        </div>
                        {/*user-profile-ov end*/}
                        <div className="user-profile-ov">
                          <h3>Skills</h3>
                          <ul>
                            <li>{DUMMY_DATA[5].userskill}</li>
                          </ul>
                        </div>
                        {/*user-profile-ov end*/}
                      </div>
                      {/*product-feed-tab end*/}
                      <div
                        className={
                          state === 3
                            ? "product-feed-tab current"
                            : "product-feed-tab"
                        }
                        id="portfolio-dd"
                      >
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
};

export default Userprofile;
