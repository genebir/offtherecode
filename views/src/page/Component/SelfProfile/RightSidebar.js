const RightSidebar = () => {
  return (
    <div>
      <div className="right-sidebar">
        <div className="message-btn">
          <a href="profile-account-setting.html" title="">
            <i className="fas fa-cog" /> Setting
          </a>
        </div>
        <div className="widget widget-portfolio">
          <div className="wd-heady">
            <h3>Portfolio</h3>
            <img src="images/photo-icon.png" alt="" />
          </div>
          <div className="pf-gallery">
            <ul>
              <li>
                <a href="#" title="">
                  <img src="images/resources/pf-gallery1.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#" title="">
                  <img src="images/resources/pf-gallery2.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#" title="">
                  <img src="images/resources/pf-gallery3.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#" title="">
                  <img src="images/resources/pf-gallery4.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#" title="">
                  <img src="images/resources/pf-gallery5.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#" title="">
                  <img src="images/resources/pf-gallery6.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#" title="">
                  <img src="images/resources/pf-gallery7.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#" title="">
                  <img src="images/resources/pf-gallery8.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#" title="">
                  <img src="images/resources/pf-gallery9.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#" title="">
                  <img src="images/resources/pf-gallery10.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#" title="">
                  <img src="images/resources/pf-gallery11.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#" title="">
                  <img src="images/resources/pf-gallery12.png" alt="" />
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
  );
};

export default RightSidebar;
