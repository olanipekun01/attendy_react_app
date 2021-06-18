import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = ()  => {
  return (
    <div className="App">
        <h1 className="app_header"><Link className="nav_link" to="/">Student Dashboard</Link></h1>
        <nav className="nav_bar">
            <div className="signin-signup">
              <Link className='nav_link anchor-signin' to="/signin">Sign In</Link>/
            <Link className="nav_link anchor-signup" to="/signup">Sign Up</Link></div>
        </nav>
    </div>
  );
}

export default Header;