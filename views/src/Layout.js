import React from "react";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Header />
      <main>{props.children}</main>

      <Footer />
    </React.Fragment>
  );
};

export default Layout;
