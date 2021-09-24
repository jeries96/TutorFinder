import React from 'react'
import image from '../../utils/emek.jpg'
import './MainPageProfile.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import Cookies from "js-cookie";


function MainPageProfile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    let token = Cookies.get('loginToken');

    if (token != undefined) {
      setIsLoggedIn(true)
    }
  }, [isLoggedIn])


  return (
    <div dir="rtl" className="HomePage__Profile">
      {/* <div className = "image">
             <img id='image' src={image} />
        </div> */}
      <section id="hero" className="d-flex justify-content-center align-items-center">
        <div className="container position-relative" data-aos="zoom-in" data-aos-delay="100">
          <h1>צברו כישורים, תיהנו, ובנו לכם ידע טוב יותר</h1>
          <h2>להתחברות או להרשמה, תלחצו על הכפתורים  למטה </h2>


          {
            isLoggedIn === false &&
            <div>
              <Link to='/SignIn'>  <a href="courses.html" className="btn-get-started">התחבר </a> </Link>
              <Link to='/SignUp'>  <a href="courses.html" className="btn-get-started-right-side">הירשם </a> </Link>
            </div>
          }

        </div>

      </section>
    </div>
  );

}

export default MainPageProfile;