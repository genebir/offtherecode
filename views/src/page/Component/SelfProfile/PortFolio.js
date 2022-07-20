const PortFolio = (props) => {
  return (
    <div>
      <div
        className={
          props.state === 5
            ? "product-feed-tab animated fadeIn current"
            : "product-feed-tab animated fadeIn"
        }
        id="portfolio-dd"
      >
        <div className="portfolio-gallery-sec">
          <h3>Portfolio</h3>
          <div className="portfolio-btn">
            <a href="#" title="">
              <i className="fas fa-plus-square" /> Add Portfolio
            </a>
          </div>
          <div className="gallery_pf">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                <div className="gallery_pt">
                  <img src="images/resources/pf-img1.jpg" alt="" />
                  <a href="#" title="">
                    <img src="images/all-out.png" alt="" />
                  </a>
                </div>
                {/*gallery_pt end*/}
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                <div className="gallery_pt">
                  <img src="images/resources/pf-img2.jpg" alt="" />
                  <a href="#" title="">
                    <img src="images/all-out.png" alt="" />
                  </a>
                </div>
                {/*gallery_pt end*/}
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                <div className="gallery_pt">
                  <img src="images/resources/pf-img3.jpg" alt="" />
                  <a href="#" title="">
                    <img src="images/all-out.png" alt="" />
                  </a>
                </div>
                {/*gallery_pt end*/}
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                <div className="gallery_pt">
                  <img src="images/resources/pf-img4.jpg" alt="" />
                  <a href="#" title="">
                    <img src="images/all-out.png" alt="" />
                  </a>
                </div>
                {/*gallery_pt end*/}
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                <div className="gallery_pt">
                  <img src="images/resources/pf-img5.jpg" alt="" />
                  <a href="#" title="">
                    <img src="images/all-out.png" alt="" />
                  </a>
                </div>
                {/*gallery_pt end*/}
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                <div className="gallery_pt">
                  <img src="images/resources/pf-img6.jpg" alt="" />
                  <a href="#" title="">
                    <img src="images/all-out.png" alt="" />
                  </a>
                </div>
                {/*gallery_pt end*/}
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                <div className="gallery_pt">
                  <img src="images/resources/pf-img7.jpg" alt="" />
                  <a href="#" title="">
                    <img src="images/all-out.png" alt="" />
                  </a>
                </div>
                {/*gallery_pt end*/}
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                <div className="gallery_pt">
                  <img src="images/resources/pf-img8.jpg" alt="" />
                  <a href="#" title="">
                    <img src="images/all-out.png" alt="" />
                  </a>
                </div>
                {/*gallery_pt end*/}
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                <div className="gallery_pt">
                  <img src="images/resources/pf-img9.jpg" alt="" />
                  <a href="#" title="">
                    <img src="images/all-out.png" alt="" />
                  </a>
                </div>
                {/*gallery_pt end*/}
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-6">
                <div className="gallery_pt">
                  <img src="images/resources/pf-img10.jpg" alt="" />
                  <a href="#" title="">
                    <img src="images/all-out.png" alt="" />
                  </a>
                </div>
                {/*gallery_pt end*/}
              </div>
            </div>
          </div>
          {/*gallery_pf end*/}
        </div>
        {/*portfolio-gallery-sec end*/}
      </div>
    </div>
  );
};

export default PortFolio;
