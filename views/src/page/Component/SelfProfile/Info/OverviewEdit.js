const OverviewEdit = () => {
  return (
    <div>
      <div className="overview-box" id="overview-box">
        <div className="overview-edit">
          <h3>Overview</h3>
          <span>5000 character left</span>
          <form>
            <textarea defaultValue={""} />
            <button type="submit" className="save">
              Save
            </button>
            <button type="submit" className="cancel">
              Cancel
            </button>
          </form>
          <a href="#" title="" className="close-box">
            <i className="la la-close" />
          </a>
        </div>
        {/*overview-edit end*/}
      </div>
      {/*overview-box end*/}
    </div>
  );
};

export default OverviewEdit;
