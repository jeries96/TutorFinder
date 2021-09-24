import React from 'react'
import image from '../../utils/emek.jpg'
import './MainPageProfile.css';
import { Link } from "react-router-dom";


function MainPageProfile() {


    return(
         <div dir="rtl" className="HomePage__Profile">
         {/* <div className = "image">
             <img id='image' src={image} />
        </div> */}
        <section id="hero" className="d-flex justify-content-center align-items-center">
         <div className="container position-relative" data-aos="zoom-in" data-aos-delay="100">
        <h1>צברו כישורים, תיהנו, ובנו לכם ידע טוב יותר</h1>
        <h2>להתחברות או להרשמה, תלחצו על הכפתורים  למטה </h2>
        <Link to='/SignIn'>  <a href="courses.html" className="btn-get-started">התחבר </a> </Link>
        <Link to='/SignUp'>  <a href="courses.html" className="btn-get-started-right-side">הירשם </a> </Link>
        </div>
  </section>
</div>
);

}

export default MainPageProfile;