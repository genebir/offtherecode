const Reviews = (props) => {
  return (
    <div>
      <div
        className={
          props.state === 6
            ? "product-feed-tab animated fadeIn current"
            : "product-feed-tab animated fadeIn"
        }
        id="rewivewdata"
      >
        <section />
        <div className="posts-section">
          <div className="post-bar reviewtitle">
            <h2>Wiki</h2>
          </div>
          {/*post-bar end*/}
          <div className="post-bar ">
            <div className="post_topbar">
              <div className="usy-dt">
                <img src="images/resources/bg-img3.png" alt="" />
                <div className="usy-name">
                  <h3>Rock William</h3>
                  <div className="epi-sec epi2">
                    <ul className="descp review-lt">
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
            </div>
            <div className="job_descp mngdetl">
              <div className="star-descp review">
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
                <a href="#" title="">
                  5.0 of 5 Reviews
                </a>
              </div>
              <div className="reviewtext">
                <p>{props.MY_WIKI[1].my_wikicontent}</p>
                <hr />
              </div>
              <div className="post_topbar post-reply">
                <div className="usy-dt">
                  <img src="images/resources/bg-img4.png" alt="" />
                  <div className="usy-name">
                    <h3>{props.MY_WIKI[3].my_wikiaddwriter}</h3>
                    <div className="epi-sec epi2">
                      <p>
                        <i className="la la-clock-o" />3 min ago
                      </p>
                      <p className="tahnks">
                        {props.MY_WIKI[4].my_wikiaddwritercontent}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="post_topbar rep-post rep-thanks">
                <hr />
                <div className="usy-dt">
                  <img src="images/resources/bg-img4.png" alt="" />
                  <input className="reply" type="text" placeholder="Reply" />
                  <a className="replybtn" href="#">
                    Send
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*post-bar end*/}
        </div>
        {/*posts-section end*/}
      </div>
    </div>
  );
};

export default Reviews;
