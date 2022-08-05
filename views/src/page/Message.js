import React from "react";
import { RecoilRoot } from "recoil";
import { recoilPersist } from "recoil-persist";
import "./Component/Message/Message.css";
import * as serviceWorker from "./serviceWorker";
import MessageForm from "./Component/Message/MeesageForm";

const { RecoilPersist, updateState } = recoilPersist([], {
  key: "recoil-persist",
  storage: sessionStorage,
});

const Message = () => {
  <div>
    <RecoilRoot initializeState={updateState}>
      <RecoilPersist />
      <MessageForm />
    </RecoilRoot>
  </div>;
};

serviceWorker.unregister();

export default Message;
