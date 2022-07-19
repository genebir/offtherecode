const LeftBanner = () => {
  return (
    <div>
      <ul>
        <li className="active">
          <div className="usr-msg-details">
            <div className="usr-ms-img">
              <img src="images/resources/m-img1.png" alt="" />
              <span className="msg-status" />
            </div>
            <div className="usr-mg-info">
              <h3>John Doe</h3>
              <p>
                Lorem ipsum dolor <img src="images/smley.png" alt="" />
              </p>
            </div>
            {/*usr-mg-info end*/}
            <span className="posted_time">1:55 PM</span>
            <span className="msg-notifc">1</span>
          </div>
          {/*usr-msg-details end*/}
        </li>
        <li>
          <div className="usr-msg-details">
            <div className="usr-ms-img">
              <img src="images/resources/m-img2.png" alt="" />
            </div>
            <div className="usr-mg-info">
              <h3>David Vane</h3>
              <p>Vestibulum ac diam..</p>
            </div>
            {/*usr-mg-info end*/}
            <span className="posted_time">1:55 PM</span>
          </div>
          {/*usr-msg-details end*/}
        </li>
        <li>
          <div className="usr-msg-details">
            <div className="usr-ms-img">
              <img src="images/resources/m-img3.png" alt="" />
            </div>
            <div className="usr-mg-info">
              <h3>Nancy Dilan</h3>
              <p>Quam vehicula.</p>
            </div>
            {/*usr-mg-info end*/}
            <span className="posted_time">1:55 PM</span>
          </div>
          {/*usr-msg-details end*/}
        </li>
        <li>
          <div className="usr-msg-details">
            <div className="usr-ms-img">
              <img src="images/resources/m-img4.png" alt="" />
              <span className="msg-status" />
            </div>
            <div className="usr-mg-info">
              <h3>Norman Kenney</h3>
              <p>Nulla quis lorem ut..</p>
            </div>
            {/*usr-mg-info end*/}
            <span className="posted_time">1:55 PM</span>
          </div>
          {/*usr-msg-details end*/}
        </li>
        <li>
          <div className="usr-msg-details">
            <div className="usr-ms-img">
              <img src="images/resources/m-img5.png" alt="" />
              <span className="msg-status" />
            </div>
            <div className="usr-mg-info">
              <h3>James Dilan</h3>
              <p>Vivamus magna just..</p>
            </div>
            {/*usr-mg-info end*/}
            <span className="posted_time">1:55 PM</span>
          </div>
          {/*usr-msg-details end*/}
        </li>
        <li>
          <div className="usr-msg-details">
            <div className="usr-ms-img">
              <img src="images/resources/m-img6.png" alt="" />
            </div>
            <div className="usr-mg-info">
              <h3>Mike Dorn</h3>
              <p>Praesent sapien massa.</p>
            </div>
            {/*usr-mg-info end*/}
            <span className="posted_time">1:55 PM</span>
          </div>
          {/*usr-msg-details end*/}
        </li>
        <li>
          <div className="usr-msg-details">
            <div className="usr-ms-img">
              <img src="images/resources/m-img7.png" alt="" />
            </div>
            <div className="usr-mg-info">
              <h3>Patrick Morison</h3>
              <p>Convallis a pellente...</p>
            </div>
            {/*usr-mg-info end*/}
            <span className="posted_time">1:55 PM</span>
          </div>
          {/*usr-msg-details end*/}
        </li>
      </ul>
    </div>
  );
};

export default LeftBanner;
