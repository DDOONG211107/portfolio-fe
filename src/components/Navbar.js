import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        About Me
      </Link>
      <Link to="/projects" className="nav-link">
        Projects
      </Link>
    </nav>
  );
};

export default Navbar;
