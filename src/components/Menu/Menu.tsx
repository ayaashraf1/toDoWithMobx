import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <>
      <ul id="menu-container">
        <li>
          <Link to="/">To-do</Link>
        </li>
        <li>
          <Link to="/aboutProject">About Project</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default Menu;
