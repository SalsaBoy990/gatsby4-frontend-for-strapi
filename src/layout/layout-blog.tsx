import React from "react";

import Header from "../components/global/header";
import Footer from "../components/global/footer";

const LayoutBlog = ({ children }: any) => {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default LayoutBlog;
