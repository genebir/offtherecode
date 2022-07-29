const FindPassword = () => {
  return (
    <form style={{ marginBottom: "1rem" }}>
      <div className="cp-field">
        <h5>Old Password</h5>
        <div className="cpp-fiel">
          <input type="text" name="old-password" placeholder="Old Password" />
          <i className="fa fa-lock" />
        </div>
      </div>
      <div className="cp-field">
        <h5>New Password</h5>
        <div className="cpp-fiel">
          <input type="text" name="new-password" placeholder="New Password" />
          <i className="fa fa-lock" />
        </div>
      </div>
      <div className="cp-field">
        <h5>Repeat Password</h5>
        <div className="cpp-fiel">
          <input
            type="text"
            name="repeat-password"
            placeholder="Repeat Password"
          />
          <i className="fa fa-lock" />
        </div>
      </div>
      <div className="btns">
        <a href="#!">Save Setting</a>
        <a href="#!">Restore Setting</a>
      </div>
      {/*save-stngs end*/}
    </form>
  );
};

export default FindPassword;
