import React from "react";
import { Route, Routes } from "react-router-dom";
import Chat from "./Chat";
import "./MessageForm.css";

export const AppContext = React.createContext();

const MessageForm = (props) => {
  return (
    <div className="App">
      <Chat />
    </div>
  );
};

export default MessageForm;
