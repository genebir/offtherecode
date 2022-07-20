const AskForum = (props) => {
  const submitHandler = () => {};
  return (
    <div className="wrapper overlay">
      <div
        className={props.isPost ? "overview-box open" : "overview-box"}
        id="question-box"
      >
        <div className="overview-edit">
          <h3>Ask a Question</h3>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              name="question"
              placeholder="Type Question Here"
            />
            <input type="text" name="tags" placeholder="Tags" />
            <textarea placeholder="Description" defaultValue={""} />
            <button type="submit" className="save">
              Submit
            </button>
            <button className="cancel" onClick={props.postHandler}>
              Cancel
            </button>
          </form>
          <a
            href="#!"
            title=""
            className="close-box"
            onClick={props.postHandler}
          >
            <i className="la la-close" />
          </a>
        </div>
        {/*overview-edit end*/}
      </div>
    </div>
  );
};

export default AskForum;
