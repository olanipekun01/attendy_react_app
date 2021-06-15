import React from "react";
import "../styles/Header.css";

const Header = ()  => {
  return (
    <div className="App">
        <h1 className="app_header">Student Dashboard</h1>
        <nav className="nav_bar">
            <div className="profile_icon">PROFILE</div>
        </nav>
    </div>
  );
}

export default Header;