const Privacy = () => {
  return (
    <div>
      <div
        className="tab-pane fade show active"
        id="privacy"
        role="tabpanel"
        aria-labelledby="nav-privacy-tab"
      >
        <div className="privac">
          <div className="row">
            <div className="col-12">
              <h3>Privacy</h3>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12">
              <div className="dropdown privacydropd">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  Who can see your email address
                </a>
                <div className="dropdown-menu">
                  <p>Choose who can see your email address on your profile</p>
                  <div className="row">
                    <div className="col-md-9 col-sm-12">
                      <form className="radio-form">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck1"
                          >
                            Everyone
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck2"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck2"
                          >
                            Friends
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck3"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck3"
                          >
                            Only Me
                          </label>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-3 col-sm-12">
                      <p style={{ float: "right" }}>Everyone</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12">
              <div className="dropdown privacydropd">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  Who can see your Friends
                </a>
                <div className="dropdown-menu">
                  <p>Choose who can see your list of connections</p>
                  <div className="row">
                    <div className="col-md-9 col-sm-12">
                      <form className="radio-form">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck4"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck4"
                          >
                            Everyone
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck5"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck5"
                          >
                            Friends
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck6"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck6"
                          >
                            Only Me
                          </label>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-3 col-sm-12">
                      <p style={{ float: "right" }}>Everyone</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12">
              <div className="dropdown privacydropd">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  Manage who can discover your profile from your email address
                </a>
                <div className="dropdown-menu">
                  <p>
                    Choose who can discover your profile if they are not
                    connected to you but have your email address
                  </p>
                  <div className="row">
                    <div className="col-md-9 col-sm-12">
                      <form className="radio-form">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck7"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck7"
                          >
                            Everyone
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck8"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck8"
                          >
                            Friends
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck9"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck9"
                          >
                            Only Me
                          </label>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-3 col-sm-12">
                      <p style={{ float: "right" }}>Everyone</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12">
              <div className="dropdown privacydropd">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  Search history
                </a>
                <div className="dropdown-menu">
                  <p>Clear all previous searches performed on LinkedIn</p>
                  <div className="row">
                    <div className="col-12">
                      <form className="radio-form">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="customCheck10"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck10"
                          >
                            Clear All History
                          </label>
                        </div>
                      </form>
                      <div className="privabtns">
                        <a href="#">Clear All History</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12">
              <div className="dropdown privacydropd">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  Sharing your profile when you click apply
                </a>
                <div className="dropdown-menu">
                  <p>
                    Chose if you want to share your full profile with the job
                    poster when you're taken off linkedin after clicking apply{" "}
                  </p>
                  <div className="row">
                    <div className="col-md-9 col-sm-12">
                      <form className="radio-form">
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="customRadio5"
                            name="customRadio"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customRadio5"
                          >
                            Yes
                          </label>
                        </div>
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="customRadio6"
                            name="customRadio"
                            className="custom-control-input"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customRadio6"
                          >
                            Yes
                          </label>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-3 col-sm-12">
                      <p style={{ float: "right" }}>Yes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12">
              <div className="privabtns">
                <a href="#">Save</a>
                <a href="#">Cancel</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
