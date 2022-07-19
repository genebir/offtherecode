import Footer from "./Layout/Footer";

const Forumpost = () => (
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
    <link
      rel="stylesheet"
      type="text/css"
      href="css/jquery.mCustomScrollbar.min.css"
    />
    <link rel="stylesheet" type="text/css" href="lib/slick/slick.css" />
    <link rel="stylesheet" type="text/css" href="lib/slick/slick-theme.css" />
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <link rel="stylesheet" type="text/css" href="css/responsive.css" />
    <div className="wrapper">
      <header>
        <div className="container">
          <div className="header-data">
            <div className="logo pd-btm">
              <a href="index.html" title="">
                <img src="images/logo.png" alt="" />
              </a>
            </div>
            {/*logo end*/}
            <div className="forum-bar">
              <h2>Forum</h2>
              <ul>
                <li>
                  <a href="#" title="">
                    Tags
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    Users
                  </a>
                </li>
                <li>
                  <a href="#" title="" className="ask-question">
                    Ask a question
                  </a>
                </li>
              </ul>
            </div>
            {/*search-bar end*/}
            <div className="login_register">
              <ul>
                <li>
                  <a href="sign-in.html" title="">
                    Login
                  </a>
                </li>
                <li>
                  <a href="sign-in.html" title="">
                    Register
                  </a>
                </li>
              </ul>
            </div>
            {/*login_register end*/}
            <div className="search-bar st2">
              <form>
                <input type="text" name="search" placeholder="Search..." />
                <button type="submit">
                  <i className="la la-search" />
                </button>
              </form>
            </div>
            {/*search-bar end*/}
          </div>
          {/*header-data end*/}
        </div>
      </header>
      <section className="forum-sec">
        <div className="container">
          <div className="forum-links">
            <ul>
              <li className="active">
                <a href="#" title="">
                  Latest
                </a>
              </li>
              <li>
                <a href="#" title="">
                  Unanswered
                </a>
              </li>
              <li>
                <a href="#" title="">
                  Treading
                </a>
              </li>
              <li>
                <a href="#" title="">
                  Popular This Week
                </a>
              </li>
              <li>
                <a href="#" title="">
                  Popular of Month
                </a>
              </li>
            </ul>
          </div>
          {/*forum-links end*/}
          <div className="forum-links-btn">
            <a href="#" title="">
              <i className="fa fa-bars" />
            </a>
          </div>
        </div>
      </section>
      <section className="forum-page">
        <div className="container">
          <div className="forum-questions-sec">
            <div className="row">
              <div className="col-lg-8">
                <div className="forum-post-view">
                  <div className="usr-question">
                    <div className="usr_img">
                      <img src="images/resources/usrr-img1.png" alt="" />
                    </div>
                    <div className="usr_quest">
                      <h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </h3>
                      <span>
                        <i className="fa fa-clock-o" />3 min ago
                      </span>
                      <ul className="react-links">
                        <li>
                          <a href="#" title="">
                            <i className="fa fa-heart" /> Vote 150
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            <i className="fa fa-share-alt" /> Share
                          </a>
                        </li>
                      </ul>
                      <ul className="quest-tags">
                        <li>
                          <a href="#" title="">
                            Work
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            Php
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            Design
                          </a>
                        </li>
                      </ul>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse at libero elit. Mauris ultrices sed lorem
                        nec efficitur. Donec sit amet facilisis lorem, quis
                        facilisis tellus. Nullam mollis dignissim nisi sit amet
                        tempor. Nullam sollicitudin neque a felis commodo
                        gravida at sed nunc. In justo nunc, sagittis sed
                        venenatis at, dictum vel erat. Curabitur at quam ipsum.
                        Quisque eget nibh aliquet, imperdiet diam pharetra,
                        dapibus lacus. Sed tincidunt sapien in dui imperdiet
                        eleifend. Ut ut sagittis purus, non tristique elit.
                        Quisque tincidunt metus eget ligula sodales luctus.
                        Donec convallis ex at dui convallis malesuada. Orci
                        varius natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Ut pretium euismod
                        mollis. Pellentesque convallis gravida ante eu pretium.
                        Integer rutrum mi nec purus tincidunt, nec rhoncus
                        mauris porttitor. Donec id tellus at leo gravida
                        egestas. Suspendisse consequat mi vel euismod efficitur.
                        Donec sed elementum libero.
                      </p>
                      <p>
                        {" "}
                        Etiam rutrum ut urna eu tempus. Curabitur suscipit quis
                        lorem vel dictum. Aliquam erat volutpat. Pellentesque
                        volutpat viverra pulvinar. Mauris ac sapien ac metus
                        tincidunt volutpat eu eu purus. Suspendisse pharetra
                        quis quam id auctor. Pellentesque feugiat venenatis
                        urna, vitae suscipit enim volutpat vitae. Nunc egestas
                        tortor est, at sodales ligula auctor efficitur.
                      </p>
                      <div className="comment-section">
                        <h3>03 Comments</h3>
                        <div className="comment-sec">
                          <ul>
                            <li>
                              <div className="comment-list">
                                <div className="bg-img">
                                  <img
                                    src="images/resources/bg-img1.png"
                                    alt=""
                                  />
                                </div>
                                <div className="comment">
                                  <h3>John Smith</h3>
                                  <span>
                                    <img src="images/clock.png" alt="" /> 3 min
                                    ago
                                  </span>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Suspendisse at libero elit.
                                    Mauris ultrices sed lorem nec efficitur.
                                  </p>
                                </div>
                              </div>
                              {/*comment-list end*/}
                            </li>
                            <li>
                              <div className="comment-list">
                                <div className="bg-img">
                                  <img
                                    src="images/resources/bg-img2.png"
                                    alt=""
                                  />
                                </div>
                                <div className="comment">
                                  <h3>John Doe</h3>
                                  <span>
                                    <img src="images/clock.png" alt="" /> 3 min
                                    ago
                                  </span>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Aliquam luctus hendrerit
                                    metus, ut ullamcorper quam finibus at.
                                  </p>
                                </div>
                              </div>
                              {/*comment-list end*/}
                            </li>
                            <li>
                              <div className="comment-list">
                                <div className="bg-img">
                                  <img
                                    src="images/resources/bg-img4.png"
                                    alt=""
                                  />
                                </div>
                                <div className="comment">
                                  <h3>John Doe</h3>
                                  <span>
                                    <img src="images/clock.png" alt="" /> 3 min
                                    ago
                                  </span>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Aliquam luctus hendrerit
                                    metus, ut ullamcorper quam finibus at.
                                  </p>
                                </div>
                              </div>
                              {/*comment-list end*/}
                            </li>
                          </ul>
                        </div>
                        {/*comment-sec end*/}
                      </div>
                    </div>
                    {/*usr_quest end*/}
                  </div>
                  {/*usr-question end*/}
                </div>
                {/*forum-post-view end*/}
                <div className="post-comment-box">
                  <h3>03 Comments</h3>
                  <div className="user-poster">
                    <div className="usr-post-img">
                      <img src="images/resources/bg-img2.png" alt="" />
                    </div>
                    <div className="post_comment_sec">
                      <form>
                        <textarea placeholder="Your Answer" defaultValue={""} />
                        <button type="submit">Post Answer</button>
                      </form>
                    </div>
                    {/*post_comment_sec end*/}
                  </div>
                  {/*user-poster end*/}
                </div>
                {/*post-comment-box end*/}
                <div className="next-prev">
                  <a href="#" title="" className="fl-left">
                    Preview
                  </a>
                  <a href="#" title="" className="fl-right">
                    Next
                  </a>
                </div>
                {/*next-prev end*/}
              </div>
              <div className="col-lg-4">
                <div className="widget widget-feat">
                  <ul>
                    <li>
                      <i className="fa fa-heart" />
                      <span>1185</span>
                    </li>
                    <li>
                      <i className="fa fa-comment" />
                      <span>1165</span>
                    </li>
                    <li>
                      <i className="fa fa-share-alt" />
                      <span>1120</span>
                    </li>
                    <li>
                      <i className="fa fa-eye" />
                      <span>1009</span>
                    </li>
                  </ul>
                </div>
                {/*widget-feat end*/}
                <div className="widget widget-user">
                  <h3 className="title-wd">Top User of the Week</h3>
                  <ul>
                    <li>
                      <div className="usr-msg-details">
                        <div className="usr-ms-img">
                          <img src="images/resources/m-img1.png" alt="" />
                        </div>
                        <div className="usr-mg-info">
                          <h3>Jessica William</h3>
                          <p>Graphic Designer </p>
                        </div>
                        {/*usr-mg-info end*/}
                      </div>
                      <span>
                        <img src="images/price1.png" alt="" />
                        1185
                      </span>
                    </li>
                    <li>
                      <div className="usr-msg-details">
                        <div className="usr-ms-img">
                          <img src="images/resources/m-img2.png" alt="" />
                        </div>
                        <div className="usr-mg-info">
                          <h3>John Doe</h3>
                          <p>PHP Developer</p>
                        </div>
                        {/*usr-mg-info end*/}
                      </div>
                      <span>
                        <img src="images/price2.png" alt="" />
                        1165
                      </span>
                    </li>
                    <li>
                      <div className="usr-msg-details">
                        <div className="usr-ms-img">
                          <img src="images/resources/m-img3.png" alt="" />
                        </div>
                        <div className="usr-mg-info">
                          <h3>Poonam</h3>
                          <p>Wordpress Developer </p>
                        </div>
                        {/*usr-mg-info end*/}
                      </div>
                      <span>
                        <img src="images/price3.png" alt="" />
                        1120
                      </span>
                    </li>
                    <li>
                      <div className="usr-msg-details">
                        <div className="usr-ms-img">
                          <img src="images/resources/m-img4.png" alt="" />
                        </div>
                        <div className="usr-mg-info">
                          <h3>Bill Gates</h3>
                          <p>C &amp; C++ Developer </p>
                        </div>
                        {/*usr-mg-info end*/}
                      </div>
                      <span>
                        <img src="images/price4.png" alt="" />
                        1009
                      </span>
                    </li>
                  </ul>
                </div>
                {/*widget-user end*/}
                <div className="widget widget-adver">
                  <img src="images/resources/adver-img.png" alt="" />
                </div>
                {/*widget-adver end*/}
              </div>
            </div>
          </div>
          {/*forum-questions-sec end*/}
        </div>
      </section>
      {/*forum-page end*/}
      <footer>
        <div className="footy-sec mn no-margin">
          <Footer />
        </div>
      </footer>
      <div className="overview-box" id="question-box">
        <div className="overview-edit">
          <h3>Ask a Question</h3>
          <form>
            <input
              type="text"
              name="question"
              placeholder="Type Question Here"
            />
            <input type="text" name="tags" placeholder="Tags" />
            <textarea placeholder="Description" defaultValue={""} />
            <button type="submit" className="save">
              Submit
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

export default Forumpost;
