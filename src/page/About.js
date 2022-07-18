import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

const About = () => (
  <>
    <meta charSet="UTF-8" />
    <title>WorkWise Html Template</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <link rel="stylesheet" type="text/css" href="css/animate.css" />
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="css/flatpickr.min.css" />
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
    <Header />
    {/*header end*/}
    <section className="banner">
      <div className="bannerimage">
        <img src="images/about.png" alt="image" />
      </div>
      <div className="bennertext">
        <div className="innertitle">
          <h2>
            World's largest freelancing and job portal
            <br />
            social networking marketplace.
          </h2>
          <p>
            We connect over 3 Million employers and freelancers globally from
            over 237
            <br /> countries, regions, and territories
          </p>
        </div>
      </div>
      <span className="banner-title">About us</span>
    </section>
    <section className="Company-overview">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <h2>Company Overview</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              felis massa, commodo sed fringilla id, dignissim ut eros. Aliquam
              at lacinia diam, eget scelerisque massa. Nunc ut porta ante.
              Praesent blandit, neque nec hendrerit luctus, sem urna imperdiet
              ligula, eu egestas purus massa dictum arcu. Integer cursus enim
              nec magna dapibus laoreet. Donec egestas fringilla risus quis
              volutpat. Aliquam semper massa ut sollicitudin consectetur.
              Suspendisse ac iaculis ligula. Duis ut velit id nisi vulputate
              dapibus.
            </p>
          </div>
          <div className="col-md-6 col-sm-12">
            <img src="images/about3.png" alt="image" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
          />
          <a href="https://www.pureblack.de" />
        </div>
      </div>
    </section>
    <section className="services">
      <div className="container">
        <div className="video">
          <iframe
            className="video-iframe"
            src="https://www.youtube.com/embed/jzCwiu22C_c"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen=""
          />
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div className="blog">
              <img src="images/blog.png" alt="image" />
              <h2>Our Blog</h2>
              <a href="#">View Blog</a>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="blog">
              <img src="images/career.png" alt="image" />
              <h2>Career Opportunites</h2>
              <a href="#">Join Our Team</a>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="blog">
              <img src="images/forum.png" alt="image" />
              <h2>Help Forum</h2>
              <a href="#">Visit Help Forum</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div className="footy-sec mn no-margin">
        <Footer />
      </div>
    </footer>
    {/*footer end*/}
  </>
);

export default About;
