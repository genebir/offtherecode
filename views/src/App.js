import Home from "./page/Home";
import { Routes, Route } from "react-router-dom";
import Companies from "./page/Companies";
import Companyprofile from "./page/Company-profile";
import Selfprofile from "./page/Selfprofile";
import Userprofile from "./page/Userprofile";
import Profile from "./page/Profile";
import Message from "./page/Message";
import About from "./page/About";
import Jobs from "./page/Jobs";
import Projects from "./page/Projects";
import Signin from "./page/Signin";
import Profilesetting from "./page/Profilesetting";
import Forum from "./page/Forum";
import Helpcenter from "./page/Helpcenter";
import { useContext } from "react";
import AuthContext from "./store/auth-context";

const App = () => {
  const ctx = useContext(AuthContext);
  return (
    <div>
      <Routes>
        <Route path="/" element={ctx.isLoggedIn ? <Home /> : <Signin />} />
        <Route path="/about" element={<About />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/companies/profile" element={<Companyprofile />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/help" element={<Helpcenter />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/message" element={<Message />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/users" element={<Userprofile />} />
        <Route path="/profile/self" element={<Selfprofile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/setting" element={<Profilesetting />} />
      </Routes>
    </div>
  );
};

export default App;
