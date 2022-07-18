const Blocking = () => {
  return (
    <div>
      <div
        className="tab-pane fade show active"
        id="blockking"
        role="tabpanel"
        aria-labelledby="nav-blockking-tab"
      >
        <div className="helpforum">
          <div className="row">
            <div className="col-12 security">
              <h3>Blocking</h3>
              <hr />
            </div>
            <div className="row">
              <div className="col-12">
                <h4>Blocking</h4>
                <p>See your list,and make changes if you'd like</p>
                <div className="bloktext">
                  <p>You are not bloking anyone</p>
                  <p>
                    Need to blok or report someone? Go to the profile of the
                    person you want to blok and select "Blok or Report" from the
                    drowp-down menu at the top of the profile summery
                  </p>
                  <p>
                    Note: After you have blocked the person, Any previous
                    profile views of yours and of the other person will
                    disappear from each of your "Who's viewed your profile"
                    sections.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blocking;
