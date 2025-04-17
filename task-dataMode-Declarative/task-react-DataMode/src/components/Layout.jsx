import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <div>
      <Header/>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
