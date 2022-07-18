const Jobs = () => {
  return (
    <div>
      <div className="product-feed-tab current" id="saved-jobs">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="mange-tab"
              data-toggle="tab"
              href="#mange"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Manage Jobs
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="saved-tab"
              data-toggle="tab"
              href="#saved"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Saved Jobs
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="contact-tab"
              data-toggle="tab"
              href="#applied"
              role="tab"
              aria-controls="applied"
              aria-selected="false"
            >
              Applied Jobs
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="cadidates-tab"
              data-toggle="tab"
              href="#cadidates"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              Applied cadidates
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="mange"
            role="tabpanel"
            aria-labelledby="mange-tab"
          >
            <div className="posts-bar">
              <div className="post-bar bgclr">
                <div className="wordpressdevlp">
                  <h2>Senior Wordpress Developer</h2>
                  <p>
                    <i className="la la-clock-o" />
                    Posted on 30 August 2018
                  </p>
                </div>
                <br />
                <div className="row no-gutters">
                  <div className="col-md-6 col-sm-12">
                    <div className="cadidatesbtn">
                      <button type="button" className="btn btn-primary">
                        <span className="badge badge-light">3</span>
                        Candidates
                      </button>
                      <a href="#">
                        <i className="far fa-edit" />
                      </a>
                      <a href="#">
                        <i className="far fa-trash-alt" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <ul className="bk-links bklink">
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
                </div>
              </div>
            </div>
            <div className="posts-bar">
              <div className="post-bar bgclr">
                <div className="wordpressdevlp">
                  <h2>Senior Php Developer</h2>
                  <p>
                    <i className="la la-clock-o" /> Posted on 29 August 2018
                  </p>
                </div>
                <br />
                <div className="row no-gutters">
                  <div className="col-md-6 col-sm-12">
                    <div className="cadidatesbtn">
                      <button type="button" className="btn btn-primary">
                        <span className="badge badge-light">3</span>
                        Candidates
                      </button>
                      <a href="#">
                        <i className="far fa-edit" />
                      </a>
                      <a href="#">
                        <i className="far fa-trash-alt" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <ul className="bk-links bklink">
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
                </div>
              </div>
            </div>
            <div className="posts-bar">
              <div className="post-bar bgclr">
                <div className="wordpressdevlp">
                  <h2>Senior UI UX Designer</h2>
                  <div className="row no-gutters">
                    <div className="col-md-6 col-sm-12">
                      <p className="posttext">
                        <i className="la la-clock-o" />
                        Posted on 5 June 2018
                      </p>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <p>
                        <i className="la la-clock-o" />
                        Expiried on 5 October 2018
                      </p>
                    </div>
                  </div>
                </div>
                <br />
                <div className="row no-gutters">
                  <div className="col-md-6 col-sm-12">
                    <div className="cadidatesbtn">
                      <button type="button" className="btn btn-primary">
                        <span className="badge badge-light">3</span>
                        Candidates
                      </button>
                      <a href="#">
                        <i className="far fa-trash-alt" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <ul className="bk-links bklink">
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
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="saved"
            role="tabpanel"
            aria-labelledby="saved-tab"
          >
            <div className="post-bar">
              <div className="p-all saved-post">
                <div className="usy-dt">
                  <div className="wordpressdevlp">
                    <h2>Senior Wordpress Developer</h2>
                    <p>
                      <i className="la la-clock-o" />
                      Posted on 30 August 2018
                    </p>
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
              <ul className="savedjob-info saved-info">
                <li>
                  <h3>Applicants</h3>
                  <p>10</p>
                </li>
                <li>
                  <h3>Job Type</h3>
                  <p>Full Time</p>
                </li>
                <li>
                  <h3>Salary</h3>
                  <p>$600 - Mannual</p>
                </li>
                <li>
                  <h3>Posted : 5 Days Ago</h3>
                  <p>Open</p>
                </li>
                <div className="devepbtn saved-btn">
                  <a className="clrbtn" href="#">
                    Unsaved
                  </a>
                  <a className="clrbtn" href="#">
                    Message
                  </a>
                </div>
              </ul>
            </div>
            <div className="post-bar">
              <div className="p-all saved-post">
                <div className="usy-dt">
                  <div className="wordpressdevlp">
                    <h2>Senior PHP Developer</h2>
                    <p>
                      <i className="la la-clock-o" />
                      Posted on 30 August 2018
                    </p>
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
              <ul className="savedjob-info saved-info">
                <li>
                  <h3>Applicants</h3>
                  <p>10</p>
                </li>
                <li>
                  <h3>Job Type</h3>
                  <p>Full Time</p>
                </li>
                <li>
                  <h3>Salary</h3>
                  <p>$600 - Mannual</p>
                </li>
                <li>
                  <h3>Posted : 5 Days Ago</h3>
                  <p>Open</p>
                </li>
                <div className="devepbtn saved-btn">
                  <a className="clrbtn" href="#">
                    Unsaved
                  </a>
                  <a className="clrbtn" href="#">
                    Message
                  </a>
                </div>
              </ul>
            </div>
            <div className="post-bar">
              <div className="p-all saved-post">
                <div className="usy-dt">
                  <div className="wordpressdevlp">
                    <h2>UI UX Designer</h2>
                    <p>
                      <i className="la la-clock-o" />
                      Posted on 30 August 2018
                    </p>
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
              <ul className="savedjob-info saved-info">
                <li>
                  <h3>Applicants</h3>
                  <p>10</p>
                </li>
                <li>
                  <h3>Job Type</h3>
                  <p>Full Time</p>
                </li>
                <li>
                  <h3>Salary</h3>
                  <p>$600 - Mannual</p>
                </li>
                <li>
                  <h3>Posted : 5 Days Ago</h3>
                  <p>Open</p>
                </li>
                <div className="devepbtn saved-btn">
                  <a className="clrbtn" href="#">
                    Unsaved
                  </a>
                  <a className="clrbtn" href="#">
                    Message
                  </a>
                </div>
              </ul>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="applied"
            role="tabpanel"
            aria-labelledby="applied-tab"
          >
            <div className="post-bar">
              <div className="p-all saved-post">
                <div className="usy-dt">
                  <div className="wordpressdevlp">
                    <h2>Senior Wordpress Developer</h2>
                    <p>
                      <i className="la la-clock-o" />
                      Posted on 30 August 2018
                    </p>
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
              <ul className="savedjob-info saved-info">
                <li>
                  <h3>Applicants</h3>
                  <p>10</p>
                </li>
                <li>
                  <h3>Job Type</h3>
                  <p>Full Time</p>
                </li>
                <li>
                  <h3>Salary</h3>
                  <p>$600 - Mannual</p>
                </li>
                <li>
                  <h3>Posted : 5 Days Ago</h3>
                  <p>Open</p>
                </li>
                <div className="devepbtn saved-btn">
                  <a className="clrbtn" href="#">
                    Applied
                  </a>
                  <a className="clrbtn" href="#">
                    Message
                  </a>
                  <a href="#">
                    <i className="far fa-trash-alt" />
                  </a>
                </div>
              </ul>
            </div>
            <div className="post-bar">
              <div className="p-all saved-post">
                <div className="usy-dt">
                  <div className="wordpressdevlp">
                    <h2>Senior PHP Developer</h2>
                    <p>
                      <i className="la la-clock-o" />
                      Posted on 30 August 2018
                    </p>
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
              <ul className="savedjob-info saved-info">
                <li>
                  <h3>Applicants</h3>
                  <p>10</p>
                </li>
                <li>
                  <h3>Job Type</h3>
                  <p>Full Time</p>
                </li>
                <li>
                  <h3>Salary</h3>
                  <p>$600 - Mannual</p>
                </li>
                <li>
                  <h3>Posted : 5 Days Ago</h3>
                  <p>Open</p>
                </li>
                <div className="devepbtn saved-btn">
                  <a className="clrbtn" href="#">
                    Applied
                  </a>
                  <a className="clrbtn" href="#">
                    Message
                  </a>
                  <a href="#">
                    <i className="far fa-trash-alt" />
                  </a>
                </div>
              </ul>
            </div>
            <div className="post-bar">
              <div className="p-all saved-post">
                <div className="usy-dt">
                  <div className="wordpressdevlp">
                    <h2>UI UX Designer</h2>
                    <p>
                      <i className="la la-clock-o" />
                      Posted on 30 August 2018
                    </p>
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
              <ul className="savedjob-info saved-info">
                <li>
                  <h3>Applicants</h3>
                  <p>10</p>
                </li>
                <li>
                  <h3>Job Type</h3>
                  <p>Full Time</p>
                </li>
                <li>
                  <h3>Salary</h3>
                  <p>$600 - Mannual</p>
                </li>
                <li>
                  <h3>Posted : 5 Days Ago</h3>
                  <p>Open</p>
                </li>
                <div className="devepbtn saved-btn">
                  <a className="clrbtn" href="#">
                    Applied
                  </a>
                  <a className="clrbtn" href="#">
                    Message
                  </a>
                  <a href="#">
                    <i className="far fa-trash-alt" />
                  </a>
                </div>
              </ul>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="cadidates"
            role="tabpanel"
            aria-labelledby="cadidates-tab"
          >
            <div className="post-bar">
              <div className="post_topbar applied-post">
                <div className="usy-dt">
                  <img src="images/resources/us-pic.png" alt="" />
                  <div className="usy-name">
                    <h3>John Doe</h3>
                    <div className="epi-sec epi2">
                      <ul className="descp descptab bklink">
                        <li>
                          <img src="images/icon8.png" alt="" />
                          <span>Epic Coder</span>
                        </li>
                        <li>
                          <img src="images/icon9.png" alt="" />
                          <span>India</span>
                        </li>
                      </ul>
                    </div>
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
                        Accept
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
                <div className="job_descp noborder">
                  <div className="star-descp review profilecnd">
                    <ul className="bklik">
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
                      <a href="#" title="">
                        5.0 of 5 Reviews
                      </a>
                    </ul>
                  </div>
                  <div className="devepbtn appliedinfo noreply">
                    <a className="clrbtn" href="#">
                      Accept
                    </a>
                    <a className="clrbtn" href="#">
                      View Profile
                    </a>
                    <a className="clrbtn" href="#">
                      Message
                    </a>
                    <a href="#">
                      <i className="far fa-trash-alt" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="post-bar">
              <div className="post_topbar  applied-post">
                <div className="usy-dt">
                  <img src="images/resources/us-pic.png" alt="" />
                  <div className="usy-name">
                    <h3>John Doe</h3>
                    <div className="epi-sec epi2">
                      <ul className="descp descptab bklink">
                        <li>
                          <img src="images/icon8.png" alt="" />
                          <span>Epic Coder</span>
                        </li>
                        <li>
                          <img src="images/icon9.png" alt="" />
                          <span>India</span>
                        </li>
                      </ul>
                    </div>
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
                        Accept
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
                <div className="job_descp noborder">
                  <div className="star-descp review profilecnd">
                    <ul className="bklik">
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
                      <a href="#" title="">
                        5.0 of 5 Reviews
                      </a>
                    </ul>
                  </div>
                  <div className="devepbtn appliedinfo noreply">
                    <a className="clrbtn" href="#">
                      Accept
                    </a>
                    <a className="clrbtn" href="#">
                      View Profile
                    </a>
                    <a className="clrbtn" href="#">
                      Message
                    </a>
                    <a href="#">
                      <i className="far fa-trash-alt" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="post-bar">
              <div className="post_topbar applied-post">
                <div className="usy-dt">
                  <img src="images/resources/us-pic.png" alt="" />
                  <div className="usy-name">
                    <h3>John Doe</h3>
                    <div className="epi-sec epi2">
                      <ul className="descp descptab bklink">
                        <li>
                          <img src="images/icon8.png" alt="" />
                          <span>Epic Coder</span>
                        </li>
                        <li>
                          <img src="images/icon9.png" alt="" />
                          <span>India</span>
                        </li>
                      </ul>
                    </div>
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
                        Accept
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
                <div className="job_descp noborder">
                  <div className="star-descp review profilecnd">
                    <ul className="bklik">
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
                      <a href="#" title="">
                        5.0 of 5 Reviews
                      </a>
                    </ul>
                  </div>
                  <div className="devepbtn appliedinfo noreply">
                    <a className="clrbtn" href="#">
                      Accept
                    </a>
                    <a className="clrbtn" href="#">
                      View Profile
                    </a>
                    <a className="clrbtn" href="#">
                      Message
                    </a>
                    <a href="#">
                      <i className="far fa-trash-alt" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
