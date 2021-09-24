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
        <h1>Learning Today , Leading Tomorrow</h1>
        <h2>We are team of talented designers making websites with Bootstrap</h2>
        <Link to='/SignIn'>  <a href="courses.html" className="btn-get-started">SIGN IN </a> </Link>
        </div>
  </section>
</div>
);

}

export default MainPageProfile;