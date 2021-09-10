import React from 'react'
import './Nav.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import Cookies from "js-cookie";
import 'semantic-ui-css/semantic.min.css'
import Menu from '../Utilities/menu'


import { Dropdown } from "semantic-ui-react";

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
      <div className="navigation">
      {isLoggedIn && 
                        <li className="navigation_user_status">
                          <Menu user={userName}/>
                        </li>
                        }
        <ul className="navigation__menu">
          {isLoggedIn === false &&
            <Link to="/SignIn">
              <li className="navigation_user_status"> התחבר  </li>
            </Link>}


          <Link to="/">
            <li className='title-logo'> מורים </li>
          </Link>
        </ul>
      </div>
    </div>
  );

}

export default Nav;