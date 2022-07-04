import React from "react";
import { Link } from "react-router-dom";

const Notloginhome = () => {
  return (
    <React.Fragment>
      <h1>로그인이 필요합니다.</h1>
      <Link to="/login">로그인 입장하기</Link>
    </React.Fragment>
  );
};

export default Notloginhome;
