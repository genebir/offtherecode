import { useEffect, useState } from "react";
import Comment from "./Comment";

const Postbar = ({ isUpdateHandler }) => {
  const [Data, setData] = useState([]);
  const [ObjList, setObjList] = useState([]);
  const [side, setSide] = useState(false);

  const fetchdata = async () => {
    try {
      const response = await fetch(
        "http://localhost:8888/feed/detail?feed_pno=1",
        {
          method: "GET",
        }
      ).then((response) => response.json());
      setData(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const deletefeed = async () => {
    const response = await fetch(
      "http://localhost:8888/feed/delete?feed_pno=1",
      {
        method: "GET",
      }
    ).then((response) => response.json());
    setData(response);
  };

  // fetchreply();

  const changeContent = () => {
    setIsContent((event) => !event);
  };
  let ObjkeyList = [];
  ObjkeyList = Object.keys(Data);
  console.log(ObjkeyList[1]);

  let ObjvaluesList = [];
  ObjvaluesList = Object.values(Data);
  console.log(ObjvaluesList);

  // for (var i=0; i<ObjvaluesList.length; i++) {
  //   ObjList.push({"key":ObjkeyList[i]:"value":ObjvaluesList[i]});
  // }

  let likeList = Object.values(Data)[6];

  let replyList = Object.values(Data)[7];

  const likelength = (likeList) => {
    let llength = 0;

    for (let key in likeList) {
      llength++;
    }
    return llength;
  };

  const replylength = (replyList) => {
    let rlength = 0;

    for (let key in replyList) {
      rlength++;
    }
    return rlength;
  };

  const [isContent, setIsContent] = useState(false);

  return (
    <>
      {Data.feed_pno ? (
        <div className="posty">
          <div className="post-bar no-margin">
            <div className="post_topbar">
              <div className="usy-dt">
                <img src="images/resources/us-pc2.png" alt="" />
                <div className="usy-name">
                  <h3>{Data.feed_user_nick}</h3>
                  <span>
                    <img src="images/clock.png" alt="" />
                    {Data.feed_date}
                  </span>
                </div>
              </div>
              <div className="ed-opts">
                <a
                  href="#"
                  title=""
                  className="ed-opts-open"
                  onClick={() => setSide((event) => !event)}
                >
                  <i className="la la-ellipsis-v" />
                </a>
                <ul className={side ? "ed-options active" : "ed-options"}>
                  <li>
                    <a href="#" title="" onClick={isUpdateHandler}>
                      Edit Post
                    </a>
                  </li>
                  <li>
                    <a href="#" title="" onClick={deletefeed}>
                      Delete
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="epi-sec">
              <ul className="descp">
                <li>
                  <img src="images/icon8.png" alt="" />
                  <span>Epic Coder</span>
                </li>
                <li>
                  <img src="images/icon9.png" alt="" />
                  <span>India</span>
                </li>
              </ul>
              <ul className="bk-links">
                <li>
                  <a href="#" title="">
                    <i className="la la-bookmark" />
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    <i className="la la-envelope" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="job_descp">
              <h3>Senior Wordpress Developer</h3>
              <p>{Data.feed_content}</p>
              {/* <ul className="skill-tags"><li>{Data.files}</li></ul> */}
            </div>
            <div className="job-status-bar">
              <ul className="like-com">
                <li>
                  <a href="#">
                    <i className="fas fa-heart" /> Like
                  </a>
                  <img src="images/liked-img.png" alt="" />
                  {/* <span>{Object.keys(Data.likes).length}</span> */}
                  <span>{likelength(likeList)}</span>
                  {/* {Data && console.log(Object.keys(Data.likes).length)} */}
                </li>
                <li>
                  <a href="#" className="com" onClick={changeContent}>
                    <i className="fas fa-comment-alt" /> Comment{" "}
                    {replylength(replyList)}
                  </a>
                </li>
              </ul>
              <a href="#">
                <i className="fas fa-eye" />
                Views 50
              </a>
            </div>
            <a
              href="#!"
              className="plus-ic"
              style={{ marginTop: "10px" }}
              onClick={() => changeContent}
            >
              <i className="la la-plus" />
            </a>
          </div>
          {/*post-bar end*/}
          {isContent && <Comment replyList={replyList} />}
          {/*comment-section end*/}
        </div>
      ) : null}
    </>
  );
};

export default Postbar;
