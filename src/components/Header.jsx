import React from "react";
import "../styles/header.css";

function HeaderComp() {
  return (
    <>
      <header>
        <a href="#" className="logo">
          Dev Cinema
        </a>
        <ul className="nav">
          <li>
            <a href="#" className="nav-link" active={true}>
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link" active={false}>
              About
            </a>
          </li>
          <li>
            <a href="#" className="nav-link" active={false}>
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="nav-link" active={false}>
              LOGO
            </a>
          </li>
        </ul>
        <div className="search">
          <input type="text" placeholder="search..." />
          <i class="searchIcon fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="button button2">
        <i class="fa-solid fa-right-to-bracket"></i> sign-in
        </div>
      </header>
    </>
  );
}

export default HeaderComp;
