const HomeProfile = ({ Data, myprofile }) => {
  return (
    <div className="user-data full-width">
      <div className="user-profile">
        <div className="username-dt">
          <div className="usr-pic">
            <img src="images/resources/user-pic.png" alt="" />
          </div>
        </div>
        {/*username-dt end*/}
        <div className="user-specs">
          {Data && <h3>{Data.feed_user_nick}</h3>}
          <span>Graphic Designer at Self Employed</span>
        </div>
      </div>
      {/*user-profile end*/}
      <ul className="user-fw-status">
        <li>
          <h4>Following</h4>
          <span>{Data.feed_user_fno}</span>
        </li>
        <li>
          <h4>Followers</h4>
          <span>{Data.feed_pno}</span>
        </li>
        <li>
          <a title="#!" onClick={myprofile}>
            View Profile
          </a>
        </li>
      </ul>
    </div>
  );
};

export default HomeProfile;
