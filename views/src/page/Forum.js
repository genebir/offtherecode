import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../store/auth-context";
import AskForum from "./Component/Forum/AskForum";
import ForumBoard from "./Component/Forum/ForumBoard";
import Pagination from "./Component/Forum/Pagination";

const Forum = (props) => {
  const authCtx = useContext(AuthContext);
  const searchref = useRef();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [isPost, setIsPost] = useState(false);
  const [searchList, setSearchList] = useState([]);
  const [forumBoardList, setForumBoardList] = useState([
    {
      title: "1",
    },
    {
      title: "2",
    },
    {
      title: "3",
    },
    {
      title: "4",
    },
    {
      title: "5",
    },
    {
      title: "6",
    },
    {
      title: "7",
    },
  ]);
  const DUMMY_DATA = [];

  const AddData = () => {
    //계속 재계산을 해버리는데 최적화를 위해서는 대책이 필요하다
    for (var i = 0; i < 50; i++) {
      DUMMY_DATA.push({
        title: i,
      });
    }
    return DUMMY_DATA;
  };
  AddData();

  console.log(DUMMY_DATA);

  const PostHandler = () => {
    setIsPost((event) => !event);
  };

  const searchSubmitHandler = (event) => {
    event.preventDefault();
    const enterSearch = searchref.current.value;
    console.log(enterSearch);
    const searchfilter = forumBoardList.filter(
      (item) => item.title === enterSearch
    );

    return setSearchList(searchfilter);
  };

  const ALLWIKI = [
    { wikiwriter: "something writer" },
    { wikicontent: "something content" },
    { wikiwriteskill: "something write skill" },
    { wikiwritedate: "something write date" },
    { wikiaddwriter: "something add writer" },
    { wikiaddwritedate: "something add write date" },
    { wikiaddwritecontent: "something add write content" },
  ];

  const MYWIKI = [
    { wikicontent: "something content" },
    { wikiwritedate: "something write date" },
    { wikiwriteskill: "something write skill" },
    { wikiaddwriter: "something add writer" },
    { wikiaddwritedate: "something add write date" },
    { wikiaddwritecontent: "something add write content" },
  ];

  const NEWWIKI = [
    { newwikicontent: "something new content" },
    { newwikiskill: "something new skill" },
    { newwikidate: "something new date" },
    { newwikicode: "something new code" },
  ];

  useEffect(() => {
    // 위키 초기 데이터 받아오기
    fetch("", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data));
  }, []);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  return (
    <div>
      <meta charSet="UTF-8" />
      <title>WorkWise Html Template</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="" />
      <meta name="keywords" content="" />
      <link rel="stylesheet" type="text/css" href="css/animate.css" />
      <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
      <link rel="stylesheet" type="text/css" href="css/line-awesome.css" />
      <link
        rel="stylesheet"
        type="text/css"
        href="css/line-awesome-font-awesome.min.css"
      />
      <link
        href="vendor/fontawesome-free/css/all.min.css"
        rel="stylesheet"
        type="text/css"
      />
      <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css" />
      <link
        rel="stylesheet"
        type="text/css"
        href="css/jquery.mCustomScrollbar.min.css"
      />
      <link rel="stylesheet" type="text/css" href="lib/slick/slick.css" />
      <link rel="stylesheet" type="text/css" href="lib/slick/slick-theme.css" />
      <link rel="stylesheet" type="text/css" href="css/style.css" />
      <link rel="stylesheet" type="text/css" href="css/responsive.css" />
      <div className={isPost ? "wrapper overlay" : "wrapper"}>
        <header>
          <div className="container">
            <div className="header-data">
              <div className="logo pd-btm" onClick={props.closeforum}>
                <a href="#!" title="">
                  <img src="images/logo.png" alt="" />
                </a>
              </div>
              {/*logo end*/}
              <div className="forum-bar">
                <h2>Forum</h2>
                <ul>
                  <li>
                    <a href="#" title="">
                      Tags
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      Users
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={PostHandler}
                      title=""
                      className="ask-question"
                      style={{ cursor: "pointer" }}
                    >
                      Ask a question
                    </a>
                  </li>
                </ul>
              </div>
              {/*search-bar end*/}
              <div className="login_register">
                {authCtx.isLoggedIn ? (
                  <ul>
                    <li>
                      <Link
                        to="/signin"
                        onClick={authCtx.onLogout}
                        title=""
                        style={{ cursor: "pointer" }}
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                ) : (
                  <ul>
                    <li>
                      <Link to="/signin" title="">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to="/signin" title="">
                        Register
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
              {/*login_register end*/}
              <div className="search-bar st2">
                <form onSubmit={searchSubmitHandler}>
                  <input
                    type="text"
                    name="search"
                    placeholder="Search..."
                    ref={searchref}
                  />
                  <button type="submit">
                    <i className="la la-search" />
                  </button>
                </form>
              </div>
              {/*search-bar end*/}
            </div>
            {/*header-data end*/}
          </div>
        </header>
        <section className="forum-sec">
          <div className="container">
            <div className="forum-links">
              <ul>
                <li className="active">
                  <a href="#" title="">
                    Latest
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    Unanswered
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    Treading
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    Popular This Week
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    Popular of Month
                  </a>
                </li>
              </ul>
            </div>
            {/*forum-links end*/}
            <div className="forum-links-btn">
              <a href="#" title="">
                <i className="fa fa-bars" />
              </a>
            </div>
          </div>
        </section>
        <section className="forum-page">
          <div className="container">
            <div className="forum-questions-sec">
              <div className="row">
                <div className="col-lg-8">
                  <ForumBoard
                    boardlist={forumBoardList}
                    searchList={searchList}
                    posts={currentPosts(DUMMY_DATA)}
                  />
                  <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={DUMMY_DATA.length}
                    paginate={setCurrentPage}
                  />
                </div>
                <div className="col-lg-4">
                  <div className="widget widget-user">
                    <h3 className="title-wd">Top User of the Week</h3>
                    <ul>
                      <li>
                        <div className="usr-msg-details">
                          <div className="usr-ms-img">
                            <img src="images/resources/m-img1.png" alt="" />
                          </div>
                          <div className="usr-mg-info">
                            <h3>Jessica William</h3>
                            <p>Graphic Designer </p>
                          </div>
                          {/*usr-mg-info end*/}
                        </div>
                        <span>
                          <img src="images/price1.png" alt="" />
                          1185
                        </span>
                      </li>
                      <li>
                        <div className="usr-msg-details">
                          <div className="usr-ms-img">
                            <img src="images/resources/m-img2.png" alt="" />
                          </div>
                          <div className="usr-mg-info">
                            <h3>John Doe</h3>
                            <p>PHP Developer</p>
                          </div>
                          {/*usr-mg-info end*/}
                        </div>
                        <span>
                          <img src="images/price2.png" alt="" />
                          1165
                        </span>
                      </li>
                      <li>
                        <div className="usr-msg-details">
                          <div className="usr-ms-img">
                            <img src="images/resources/m-img3.png" alt="" />
                          </div>
                          <div className="usr-mg-info">
                            <h3>Poonam</h3>
                            <p>Wordpress Developer </p>
                          </div>
                          {/*usr-mg-info end*/}
                        </div>
                        <span>
                          <img src="images/price3.png" alt="" />
                          1120
                        </span>
                      </li>
                      <li>
                        <div className="usr-msg-details">
                          <div className="usr-ms-img">
                            <img src="images/resources/m-img4.png" alt="" />
                          </div>
                          <div className="usr-mg-info">
                            <h3>Bill Gates</h3>
                            <p>C &amp; C++ Developer </p>
                          </div>
                          {/*usr-mg-info end*/}
                        </div>
                        <span>
                          <img src="images/price4.png" alt="" />
                          1009
                        </span>
                      </li>
                    </ul>
                  </div>
                  {/*widget-user end*/}
                  <div className="widget widget-adver">
                    <img src="images/resources/adver-img.png" alt="" />
                  </div>
                  {/*widget-adver end*/}
                </div>
              </div>
            </div>
            {/*forum-questions-sec end*/}
          </div>
        </section>
        {/*forum-page end*/}

        <AskForum postHandler={PostHandler} isPost={isPost} NEWWIKI={NEWWIKI} />
        {/*overview-box end*/}
      </div>
      {/*theme-layout end*/}
    </div>
  );
};

export default Forum;
