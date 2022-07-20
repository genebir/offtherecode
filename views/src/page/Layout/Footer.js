const Footer = (props) => {
  return (
    <div className="footy-sec mn no-margin">
      <div className="container">
        <ul>
          <li onClick={props.openFooterContent}>
            <a href="#!" title="" onClick={props.helpcenter}>
              Help Center
            </a>
          </li>
          <li onClick={props.openFooterContent}>
            <a href="#!" title="" onClick={props.about}>
              About
            </a>
          </li>
          <li>
            <a href="#" title="">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" title="">
              Community Guidelines
            </a>
          </li>
          <li>
            <a href="#" title="">
              Cookies Policy
            </a>
          </li>
          <li>
            <a href="#" title="">
              Career
            </a>
          </li>
          <li onClick={props.openFooterContent}>
            <a href="#!" title="" onClick={props.forum}>
              Forum
            </a>
          </li>
          <li>
            <a href="#" title="">
              Language
            </a>
          </li>
          <li>
            <a href="#" title="">
              Copyright Policy
            </a>
          </li>
        </ul>
        <p>
          <img src="images/copy-icon2.png" alt="" />
          Copyright 2019
        </p>
        <img className="fl-rgt" src="images/logo2.png" alt="" />
      </div>
    </div>
  );
};

export default Footer;
