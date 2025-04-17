import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav style={{display:'flex',gap:'30px',padding:'10px'}}>
      <Link to="/">Məhsullar</Link>
      <Link to="/favorites">Favorilər</Link>
      <Link to="/basket">Səbət</Link>
    </nav>
  );
};

export default Header;
