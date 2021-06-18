import React from "react";
import "../styles/Signup.css";
import Header from "../layout/Header";
import SideBar from "../layout/SideBar";

const Signup = ()  => {
  return (
    <div className="signup-section">
        <Header />
        <div className="signup-content">
            <div className="Signup-header">
                Sign Up
            </div>
            <div className="signup-form">
                <form className="signin-form-field">
                <label className="label-signup-fullname">Fullname<input type="text" className="signup-fullname" /></label>
                <label className="label-signup-mail">Email Address<input type="email" className="signup-mail" /></label>
                <label className="label-signup-mat">Mat-no/Reg no<input type="text" className="signup-mat-no" /></label>
                <label className="label-signup-faculty">Faculty<input type="text" className="signup-faculty" /></label>
                <label className="label-signup-department">Department<input type="text" className="signup-department" /></label>
                <label className="label-signup-level">Level<input type="number" className="signup-level" /></label>
                <label className="label-signup-phone">Phone no.<input type="phone" className="signup-phone" /></label>
                <label className="label-signup-pass">Password<input type="password" className="signup-password" /></label>
                <label className="label-signup-picture">Profile Pic<input type="file" className="signup-picture" /></label>
                <button className="signup-button">Sign Up</button>
                <div className="already-reg-message">Already registered. <a className="signup-link-signin">Sign In</a></div>
                </form>
            </div>
        </div>
        <SideBar />
    </div>
  );
}

export default Signup;