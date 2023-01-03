import React from "react";
// import "../styles/Hero.css";
import ImageCard from "../public/IMG_20200701_121956_538.jpg"
import SideBar from "../layout/SideBar";
import Header from "../layout/Header";


const Hero = () => {
  // var x = document.getElementById("marked")
  // var check = document.getElementById("myCheck")
  // var newCheck = "Marked"
  // var checkFunc = () = {
  //   if(x.checked == true) {
  //     check.TextContent = newCheck
  //   }
  //
    return (
      <div>
        <Header />
        <div className="hero_section">
            <div className="greetings">
              <div>
                <h2>Hello Sophia!</h2>
                <p>Today We are just getting started with this. 
                    And i will work you react.js development.</p>
                <div className="read_more">Read More..</div></div>
              <img src={ImageCard} alt="" className="greetings_image-card" />
            </div>
            <div className="mark_attendance_card">
              <div className="course_title">
                        Course Title: Biochemical Reseach
              <div className="course_code"> Course Code: BCH 316</div>
              </div>
              <div class="venue">Venue: LH1 phase2</div>
  
              <div type-=""class="sign_attendance">Mark attendance<input type="checkbox" className="marked" id="marked" name="marked" value="marked" /><span className="myCheck" id="myCheck"></span></div>
           </div>
          
        </div>
        <SideBar />
      </div>
    );
}

export default Hero;