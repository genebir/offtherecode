const Status = () => {
  return (
    <div>
      <div
        className="tab-pane fade show active"
        id="nav-status"
        role="tabpanel"
        aria-labelledby="nav-status-tab"
      >
        <div className="acc-setting">
          <h3>Profile Status</h3>
          <div className="profile-bx-details">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="profile-bx-info">
                  <div className="pro-bx">
                    <img src="images/pro-icon1.png" alt="" />
                    <div className="bx-info">
                      <h3>$5,145</h3>
                      <h5>Total Income</h5>
                    </div>
                    {/*bx-info end*/}
                  </div>
                  {/*pro-bx end*/}
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                </div>
                {/*profile-bx-info end*/}
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="profile-bx-info">
                  <div className="pro-bx">
                    <img src="images/pro-icon2.png" alt="" />
                    <div className="bx-info">
                      <h3>$4,745</h3>
                      <h5>Widthraw</h5>
                    </div>
                    {/*bx-info end*/}
                  </div>
                  {/*pro-bx end*/}
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                </div>
                {/*profile-bx-info end*/}
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="profile-bx-info">
                  <div className="pro-bx">
                    <img src="images/pro-icon3.png" alt="" />
                    <div className="bx-info">
                      <h3>$1,145</h3>
                      <h5>Sent</h5>
                    </div>
                    {/*bx-info end*/}
                  </div>
                  {/*pro-bx end*/}
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                </div>
                {/*profile-bx-info end*/}
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="profile-bx-info">
                  <div className="pro-bx">
                    <img src="images/pro-icon4.png" alt="" />
                    <div className="bx-info">
                      <h3>130</h3>
                      <h5>Total Projects</h5>
                    </div>
                    {/*bx-info end*/}
                  </div>
                  {/*pro-bx end*/}
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                </div>
                {/*profile-bx-info end*/}
              </div>
            </div>
          </div>
          {/*profile-bx-details end*/}
          <div className="pro-work-status">
            {/* <h4>Work Status  -  Last Months Working Status</h4> */}
          </div>
          {/*pro-work-status end*/}
        </div>
        {/*acc-setting end*/}
      </div>
    </div>
  );
};

export default Status;
