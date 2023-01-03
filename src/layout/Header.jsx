import React, {useState} from "react";
import "../styles/Header.css";
import ImageCard from "../public/IMG_20210819_164230.jpg"
import { Link } from "react-router-dom";

const Header = ()  => {
// let profileImage = document.querySelector('#profileImage');
// let profileNavbarCard = document.querySelector('.profile-navbar-card');

// profileImage.onclick = () => {
//     profileNavbarCard.classList.toggle('active');
// }

// window.onscroll = () => {
//     profileNavbarCard.classList.remove('active');
// }

const [toggle, setToggle] = useState({isToggleOn: true});

var handleClick = () => {

  setToggle( toggle => ({ isToggleOn: !toggle.isToggleOn }));
  
}


  return (
    <div>
          <header className="header_app">
            <h1 className="app_header"><a href="#" class="nav_link">Attendy</a></h1>
            {/* <nav className="nav_bar">
                <div className="signin-signup">
                    <a className='nav_link anchor-signin' href="./signin/signin.html">Sign In</a>/
                     <a className="nav_link anchor-signup" href="./signup/signup.html">Sign Up</a></div>
                </div>
            </nav> */}

            {/* search bar and icon  and profile */}
            <div className="left-side-container">
                <input type="search" placeholder="Search" className="search-box" />
                <label for="search-box" className="fas fa-search"></label>    
                <img src={ImageCard} onClick = {handleClick} width="50px" alt="profile image" id="profileImage" />
            </div>


        </header> 

        <div className={toggle .isToggleOn ? 'profile-navbar-card' : 'profile-navbar-card active'}>
            <a href="#">Home</a>
            <a href="#">Dashboard</a>
            <a href="#">My profile</a>
            <a href="#">Update</a>
            <a href="#">Settings</a>
            <a href="#">Logout</a>
        </div>
    </div>
  );
}

export default Header;