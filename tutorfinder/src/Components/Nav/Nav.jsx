import React from 'react'
import './Nav.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import Cookies from "js-cookie";
import 'semantic-ui-css/semantic.min.css'
import Menu from '../Utilities/menu'


function Nav() {
  var secret = 'abcdefghujklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*()_+';
  const jwt = require("jsonwebtoken");
  const [userName, setUserName] = useState("invalid")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    let token = Cookies.get('loginToken');

    if (token != undefined) {
            const decodedToken = jwt.verify(token, secret);
      setUserName(decodedToken.name)
      setIsLoggedIn(true)
    }
  }, [isLoggedIn])



  const handleLogOut = () => {
    Cookies.remove("loginToken")
    setIsLoggedIn(false)
  }
  return (
    <div dir="rtl">
      <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center">
      
    <Link to='/'>
      <h1 className="logo me-auto"><a href="index.html">Mentor</a></h1>
     </Link>
      <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a>
      {
        isLoggedIn && 
        <li className="get-started-btn">
        <Menu user={userName}/>
        </li>
      }
      {
        isLoggedIn === false &&
      <Link to='/SignIn'>
      <a className="get-started-btn">התחבר</a>
      </Link>
}

    </div>
  </header>
    </div>
  );

}

export default Nav;