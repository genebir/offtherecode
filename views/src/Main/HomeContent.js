import { Link } from "react-router-dom";
import React from "react";

const HomeContent = () => {
  return (
    <React.Fragment>
      <h1>로그인 후 피드입니다</h1>
      <Link to="/board">
        <button>집단지성의 세계로</button>
      </Link>
      <Link to="/mypage">
        <button>마이페이지 입장하기</button>
      </Link>
    </React.Fragment>
  );
};

export default HomeContent;
