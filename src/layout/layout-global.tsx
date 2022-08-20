import React from "react";

import Header from "../components/global/header";
import Footer from "../components/global/footer";
import Contact from "../components/global/contact";

const LayoutGlobal = ({ children }: any) => {
  return (
    <>
      <Header></Header>
      <main className="page">{children}</main>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default LayoutGlobal;
