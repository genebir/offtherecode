const SecurityAndLogin = () => {
  return (
    <div>
      <div
        className="tab-pane fade show active"
        id="security-login"
        role="tabpanel"
        aria-labelledby="security"
      >
        <div className="privacy security">
          <div className="row">
            <div className="col-12">
              <h3>Security and Login</h3>
              <hr />
              <h3>Two - Step Verification</h3>
              <p>
                Help protect your account by enabling extra layers of security.
              </p>
              <hr />
              <h3>Security question</h3>
              <i className="la la-edit" />
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Conform your identity with a question only you know the answer
                  to
                </label>
              </div>
              <hr />
              <h3>Security question</h3>
              <p>Before can you set a new security question,</p>
              <hr />
              <h3>Current Question</h3>
              <p>Q: Your favorite actor?</p>
              <br />
              <h3>New Question</h3>
              <form>
                <div className="form-group">
                  <select
                    className="form-control"
                    id="exampleFormControlSelect1"
                    style={{
                      WebkitAppearance: "menulist-button",
                    }}
                  >
                    <option>Please Select New Question</option>
                    <option>Select Second Queston</option>
                  </select>
                </div>
              </form>
              <h3>Answer</h3>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder=" Answer here"
                  />
                </div>
              </form>
              <div className="checkbox">
                <div className="form-check">
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      id="customRadio1"
                      name="customRadio"
                      className="custom-control-input"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customRadio1"
                    >
                      I understand my account will be locked if I am unable to
                      answer this question
                    </label>
                  </div>
                </div>
                <div className="form-check">
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      id="customRadio2"
                      name="customRadio"
                      className="custom-control-input"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customRadio2"
                    >
                      Remember this device
                    </label>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </div>
          <div className="btns">
            <a href="#">Save</a>
            <a href="#">Cancel</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityAndLogin;
