import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  currenttoken: () => {},
  onLogout: () => {},
  onLogin: (email, token) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.clear();
    sessionStorage.clear();
    setIsLoggedIn(false);
  };

  const loginHandler = (email, token, nick) => {
    localStorage.setItem("isLoggedIn", "1");
    localStorage.setItem("token", token);
    sessionStorage.setItem("Email", email);
    sessionStorage.setItem("nick", nick);
    setIsLoggedIn(true);
  };

  const currenttoken = (token) => {
    let headers = new Headers({
      "Content-Type": "application/json",
    });
    console.log(headers);

    headers.append("Authorization", "Bearer " + token);
    console.log(headers);
    localStorage.setItem("appendtoken", headers);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
        currenttoken: currenttoken,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
