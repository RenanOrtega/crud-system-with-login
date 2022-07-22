import React, { useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import "../styles/components/sidebar.sass";

const Sidebar = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div
        className={`menu-toggle ${isActive ? "is-active" : ""}`}
        onClick={handleToggle}
      >
        <div className="hamburger">
          <span></span>
        </div>
      </div>
      <aside className={`sidebar ${isActive ? "is-active" : ""}`}>
        <h3>Menu</h3>
        <nav className="menu">
          <a href="" className="menu-item is-active">
            Home
          </a>
          <a href="" className="menu-item">
            About
          </a>
          <a href="" className="menu-item">
            Portfolio
          </a>
          <a href="" className="menu-item">
            Contact
          </a>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
