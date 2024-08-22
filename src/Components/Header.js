import React, { useContext, useState } from "react";
import "../Style/Header.css";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const ToHome = () => {
    navigate("/");
  };


  return (
    <div className="header-wrapper">
      <div
        className="header-left"
        onClick={ToHome}
        style={{ cursor: "pointer" }}
      >
        <span style={{ color: "green" }}>Tea</span>Vision
      </div>
      <div className="header-right">
        <div className="menu">
          <Link to='/category' className="menu-items">
            Category
          </Link>
          <Link to='/fiber' className="menu-items">
            Fiber
          </Link>
          <Link to='/strock' className="menu-items">
            Strocks
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
