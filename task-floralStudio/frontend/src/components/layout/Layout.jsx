import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
const Layout = () => {
  return (
    <>
      <Header />
      <main style={{ padding: "60px 0px" }}>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default Layout;
