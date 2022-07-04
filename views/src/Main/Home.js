import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";
import HomeContent from "./HomeContent";
import Notloginhome from "./Notloginhome";
import "./Home.css";

const Home = () => {
  const [Login, setLogin] = useState();
  const SetId = () => {
    sessionStorage.setItem("id", "value");
    var length = sessionStorage.length;
    console.log(length);
    return setLogin(length);
  };
  const RemoveId = () => {
    sessionStorage.removeItem("id");
    var length = sessionStorage.length;
    console.log(length);
    return setLogin(length);
  };
  return (
    <React.Fragment>
      <div className="container">
        <h1>여기는 Home입니다</h1>
        <button onClick={SetId}>임시로그인</button>
        <button onClick={RemoveId}>로그아웃</button>
      </div>
      {Login === 0 ? (
        <Notloginhome />
      ) : (
        <Layout>
          <HomeContent />
        </Layout>
      )}
    </React.Fragment>
  );
};

export default Home;
