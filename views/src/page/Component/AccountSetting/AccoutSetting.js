const AccountSetting = () => {
  return (
    <div>
      <div
        className="tab-pane fade show active"
        id="nav-acc"
        role="tabpanel"
        aria-labelledby="nav-acc-tab"
      >
        <div className="acc-setting">
          <h3>Account Setting</h3>
          <form>
            <div className="notbar">
              <h4>Notification Sound</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                pretium nulla quis erat dapibus, varius hendrerit neque
                suscipit. Integer in ex euismod, posuere lectus id
              </p>
              <div className="toggle-btn">
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customSwitch1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customSwitch1"
                  />
                </div>
              </div>
            </div>
            {/*notbar end*/}
            <div className="notbar">
              <h4>Notification Email</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                pretium nulla quis erat dapibus, varius hendrerit neque
                suscipit. Integer in ex euismod, posuere lectus id
              </p>
              <div className="toggle-btn">
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customSwitch2"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customSwitch2"
                  />
                </div>
              </div>
            </div>
            {/*notbar end*/}
            <div className="notbar">
              <h4>Chat Message Sound</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                pretium nulla quis erat dapibus, varius hendrerit neque
                suscipit. Integer in ex euismod, posuere lectus id
              </p>
              <div className="toggle-btn">
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customSwitch3"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customSwitch3"
                  />
                </div>
              </div>
            </div>
            {/*notbar end*/}
            <div className="save-stngs">
              <ul>
                <li>
                  <button type="submit">Save Setting</button>
                </li>
                <li>
                  <button type="submit">Restore Setting</button>
                </li>
              </ul>
            </div>
            {/*save-stngs end*/}
          </form>
        </div>
        {/*acc-setting end*/}
      </div>
    </div>
  );
};

export default AccountSetting;
