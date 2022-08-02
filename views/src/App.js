import { Routes, Route } from "react-router-dom";
import Message from "./page/Message";
import Signin from "./page/Signin";
import { useContext } from "react";
import AuthContext from "./store/auth-context";

import Home from "./page/Home";

const App = () => {
  const ctx = useContext(AuthContext);
  return (
    <div>
      <Routes>
        <Route path="/" element={ctx.isLoggedIn ? <Home /> : <Signin />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/chat" element={(props) => <Message {...props} />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/companies/profile" element={<Companyprofile />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/help" element={<Helpcenter />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/message" element={<Message />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/users" element={<Userprofile />} />
        <Route path="/profile/self" element={<Selfprofile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/setting" element={<Profilesetting />} /> */}
      </Routes>
    </div>
  );
};

export default App;
