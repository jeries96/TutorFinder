import React from 'react'
import './Nav.css';
import { Link, useHistory } from "react-router-dom";
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

    if (token !== undefined) {
      const decodedToken = jwt.verify(token, secret);
      setUserName(decodedToken.name)
      setIsLoggedIn(true)
    }
  }, [isLoggedIn])



  const handleLogOut = () => {
    Cookies.remove("loginToken")
    setIsLoggedIn(false)
  }
  const history = useHistory()
  const handleRefresh = () => {
    history.push('/')
    window.location.reload(false)
  }
  return (  
    <div dir="rtl">
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">

          <Link onClick={handleRefresh} to='/'>
            <h1 className="logo me-auto">Mentor</h1>
          </Link>
          <div className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid" /></div>
          {
            isLoggedIn &&
            <li className="get-started-btn">
              <Menu user={userName} />
            </li>
          }
          {
            isLoggedIn === false &&
            <div>
            <Link to='/SignIn'>
              <div className="get-started-btn">התחבר</div>
            </Link>
            </div>
          }

        </div>
      </header>
    </div>
  );

}

export default Nav;