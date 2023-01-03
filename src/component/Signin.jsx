import React from "react";
// import "../styles/Signin.css";
import Header from "../layout/Header";
import SideBar from "../layout/SideBar";

const Signin = ()  => {
  return (
    <div className="signin-section">
        <Header />
        <div className="signin-content">
            <div className="Signin-header">
                Sign In
            </div>
            <div className="signin-form">
                <form className="form-field">
                <label className="label-signin-mat">Mat-no/Reg no<input type="text" className="signin-mat-no" /></label>
                <label className="label-signin-pass">Password<input type="text" className="signin-password" /></label>
                <button className="signin-button">Sign In</button>
                <div className="not-reg-message">Not registered. <a className="signin-link-signup">Sign up</a></div>
                </form>
            </div>
        </div>
        <SideBar />
    </div>
  );
}

export default Signin;