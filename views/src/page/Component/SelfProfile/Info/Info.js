const Info = (props) => {
  return (
    <div>
      <div
        className={
          props.state === 2
            ? "product-feed-tab animated fadeIn current"
            : "product-feed-tab animated fadeIn"
        }
        id="info-dd"
      >
        <div className="user-profile-ov">
          <h3>
            <a href="#" title="" className="overview-open">
              Overview
            </a>{" "}
            <a href="#" title="" className="overview-open">
              <i className="fa fa-pencil" />
            </a>
          </h3>
          <p>{props.data[1].myinfo}</p>
        </div>
        {/*user-profile-ov end*/}

        <div className="user-profile-ov">
          <h3>
            <a href="#" title="" className="skills-open">
              Skills
            </a>{" "}
            <a href="#" title="" className="skills-open">
              <i className="fa fa-pencil" />
            </a>{" "}
            <a href="#">
              <i className="fa fa-plus-square" />
            </a>
          </h3>
          <ul>
            <li>{props.data[5].myskill}</li>
          </ul>
        </div>
        {/*user-profile-ov end*/}
      </div>
    </div>
  );
};

export default Info;
