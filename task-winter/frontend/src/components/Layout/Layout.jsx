import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Header />
      <main style={{ padding: "60px 0" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
