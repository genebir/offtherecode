import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container">
      <ul>
        <li>
          <Link to="/help" title="">
            Help Center
          </Link>
        </li>
        <li>
          <Link to="/about" title="">
            About
          </Link>
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
        <li>
          <Link to="/forum" title="">
            Forum
          </Link>
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
  );
};

export default Footer;
