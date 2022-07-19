import HelpCenterHeader from "./Component/FooterContent/HelpCenterHeader";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

const Helpcenter = (props) => (
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

    {/*header end*/}
    <HelpCenterHeader
      home={props.home}
      companies={props.companies}
      projects={props.wiki}
      profiles={props.profiles}
      jobs={props.jobs}
      messages={props.messages}
      settings={props.settings}
      closeFooterContent={props.closeFooterContent}
    />
    <main>
      <div className="main-section">
        <div className="container">
          <div className="main-section-data">
            <div className="row">
              <div className="col-lg-3 col-md-12">
                <div className="filter-secs">
                  <div className="filter-heading">
                    <h3>Home</h3>
                  </div>
                  {/*filter-heading end*/}
                  <div className="paddy help-paddy">
                    <div className="filter-dd">
                      <div className="filter-ttl filter--tt2">
                        <div className="dropdown">
                          <a
                            href="#"
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            Getting Started
                          </a>
                          <div className="dropdown-menu">
                            <a href="#" className="dropdown-item top--1 ">
                              Searching of Workwise
                            </a>
                            <a href="#" className="dropdown-item">
                              Email from Workwise
                            </a>
                            <a href="#" className="dropdown-item">
                              Managing Your Feed
                            </a>
                            <a href="#" className="dropdown-item">
                              Post a Job
                            </a>
                            <a href="#" className="dropdown-item">
                              Post a Project
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="filter-dd">
                      <div className="filter-ttl filter--tt2">
                        <div className="dropdown">
                          <a
                            href="#"
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            Manage Your Account
                          </a>
                          <div className="dropdown-menu">
                            <a href="#" className="dropdown-item top--1 ">
                              Account Access
                            </a>
                            <a href="#" className="dropdown-item">
                              Account Setting
                            </a>
                            <a href="#" className="dropdown-item">
                              Privacy
                            </a>
                            <a href="#" className="dropdown-item">
                              Notification
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="filter-dd">
                      <div className="filter-ttl filter--tt2">
                        <div className="dropdown">
                          <a
                            href="#"
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            Build Your Profile
                          </a>
                          <div className="dropdown-menu">
                            <a href="#" className="dropdown-item top--1 ">
                              Build User Profile
                            </a>
                            <a href="#" className="dropdown-item">
                              Build Company Profile
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="filter-dd">
                      <div className="filter-ttl filter--tt2">
                        <a href="#">Work with Clients</a>
                      </div>
                    </div>
                    <div className="filter-dd">
                      <div className="filter-ttl filter--tt2">
                        <a href="#">Get Paid</a>
                      </div>
                    </div>
                    <div className="filter-dd">
                      <div className="filter-ttl filter--tt2">
                        <a href="#">Discovering Peoples</a>
                      </div>
                    </div>
                    <div className="filter-dd">
                      <div className="filter-ttl filter--tt2">
                        <a href="#">Billiing &amp; Payments</a>
                      </div>
                    </div>
                    <div className="filter-dd">
                      <div className="filter-ttl accountnone filter--tt2">
                        <a href="#">Reset Your Account</a>
                      </div>
                    </div>
                  </div>
                </div>
                {/*filter-secs end*/}
              </div>
              <div className="col-lg-9 col-md-12">
                <div className="helpforum">
                  <div className="row">
                    <div className="col-lg-9 col-md-12">
                      <h3>Visit Our Help Forum</h3>
                      <p>
                        View, ask, or answer questions about using LinkedIn. Our
                        moderators and community can help!
                      </p>
                    </div>
                    <div className="col-lg-3 col-md-12">
                      <a href="#">Visit Help Forum</a>
                    </div>
                  </div>
                </div>
                {/* end-helpforum */}
                <div className="actions">
                  <div className="actionstitle">
                    <h3>
                      <img src="images/resources/icon1.png" alt="image" />{" "}
                      Popular Actions
                    </h3>
                    <hr />
                  </div>
                  <div className="actionstext">
                    <div className="row">
                      <div className="col-md-6 col-sm-12">
                        <a href="#">Change or add email address</a>
                        <a href="#">Reset your password</a>
                        <a href="#">Close your account</a>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <a href="#">Manage emails you get from Workwise</a>
                        <a href="#">Get Paid</a>
                        <a href="#">Build Your Profiles</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="actions">
                  <div className="actionstitle">
                    <h3>
                      <img src="images/resources/icon2.png" alt="image" />{" "}
                      Suggested for you
                    </h3>
                    <hr />
                  </div>
                  <div className="actionstext">
                    <div className="row">
                      <div className="col-12">
                        <a href="#">Workwise Homepage - FAQ</a>
                        <hr />
                        <a href="#">Workwise Public Profile Visibility</a>
                        <hr />
                        <a href="#">Editing Your Profile</a>
                        <hr />
                        <a href="#">
                          Merging or Closing Duplicate Accounts on LinkedIn
                        </a>
                        <hr />
                      </div>
                    </div>
                  </div>
                </div>
                {/* endactione */}
                <div className="helpform">
                  <img src="images/resources/formicon.png" alt="image" />
                  <h3>Help Forum</h3>
                  <p>
                    Have questions? LinkedIn knowledge you want
                    <br /> to share? Head over to the{" "}
                  </p>
                  <a href="#">Workwise Help Forum</a>
                </div>
              </div>
            </div>
          </div>
          {/* main-section-data end*/}
        </div>
      </div>
    </main>
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
  </>
);

export default Helpcenter;
