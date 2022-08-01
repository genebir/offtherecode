import { useState } from "react";

const AskForum = (props) => {
  const submitHandler = () => {};
  const [codeList, setCodeList] = useState([]);
  const [enteredCode, setEnteredCode] = useState("");

  const EnteredKey = (evt) => {
    // tab누르면 4칸 띄우기 기능이 안먹힌다.
    var code = evt.which ? evt.which : evt.keyCode;
    if (code === 9) {
      setEnteredCode("   ");
    }
  };

  const addList = () => {
    const listForm = (
      <>
        <textarea
          placeholder="코드 첨부"
          defaultValue={""}
          style={{ zIndex: "1" }}
          value={enteredCode}
          onChange={(e) => setEnteredCode(e.currentTarget.value)}
          onKeyDown={EnteredKey}
        ></textarea>
        <i
          class="fa-solid fa-xmark-large"
          style={{
            height: "20vh",
            margin: "0",
            padding: "0",
            border: "0",
            fontSize: "100%",
            font: "inherit",
            verticalAlign: "baseline",
            zIndex: "9999999999999999999999999999",
          }}
        />
      </>
    );
    return setCodeList([...codeList, listForm]);
  };

  return (
    <div className="wrapper overlay">
      <div
        className={props.isPost ? "overview-box open" : "overview-box"}
        id="question-box"
      >
        <div
          className="overview-edit"
          style={{ height: `70vh`, overflow: "auto" }}
        >
          <h3>Ask a Question</h3>
          <form onSubmit={submitHandler}>
            <input type="text" name="question" placeholder="Title" />
            <input type="text" name="tags" placeholder="Tags" />
            <textarea placeholder="질문" defaultValue={""} />
            <textarea
              placeholder="코드 첨부"
              defaultValue={""}
              onChange={(e) => setEnteredCode(e.currentTarget.value)}
              onKeyDown={EnteredKey}
            />
            {codeList}
            <button type="submit" className="save" tabIndex="-1">
              Submit
            </button>
            <button
              className="cancel"
              onClick={props.postHandler}
              tabIndex="-1"
            >
              Cancel
            </button>
            <button
              type="button"
              style={{ background: "#b3a2b8", color: "white" }}
              onClick={addList}
              tabIndex="-1"
            >
              Import
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
