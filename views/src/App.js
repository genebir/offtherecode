import { Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./Main/Home";
import Login from "./Login/Login";
import Signup from "./Login/Signup";
import Mypage from "./Login/Mypage";
import Board from "./Board/Board";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/board" element={<Board />} />
      </Routes>
      <Routes></Routes>
    </React.Fragment>
  );
}

export default App;
