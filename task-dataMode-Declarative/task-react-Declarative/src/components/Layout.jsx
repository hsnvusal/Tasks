import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav style={{ display: "flex", gap: "10px", padding: "10px" }}>
        <Link to="/">Məhsullar</Link>
        <Link to="/favorites">Favorilər</Link>
        <Link to="/basket">Səbət</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
};

export default Layout;
