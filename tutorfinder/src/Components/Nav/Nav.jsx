import React from 'react'
import './Nav.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import Cookies from "js-cookie";
import 'semantic-ui-css/semantic.min.css'
import Menu from '../Utilities/menu'

import { Dropdown } from "semantic-ui-react";

const friendOptions = [
  {
    key: "Jenny Hess",
    text: "Jenny Hess",
    value: "Jenny Hess",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
    }
  },
  {
    key: "edit ",
    text: "Edit Profile",
    value: "EDIT"
  },
  {
    key: "Log Out ",
    text: "LOGOUT",
    value: "LOGOUT"
  }
];


function Nav() {


    const [isLoggedIn, setIsLoggedIn] = useState(false)
    useEffect(() => {
        let token = Cookies.get('loginToken');
        if (token != undefined) {
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
                <ul className="navigation__menu">
                    {isLoggedIn === false &&
                        <Link to="/SignIn">
                            <li id="navigation__signIn"> התחבר  </li>
                        </Link>}
                        
                        {isLoggedIn && 
                        <li id="navigation__signOut">
                          <Menu />
                        </li>
                        }

                    <Link to="/">
                        <li className='title-logo'> Moreem </li>
                    </Link>
                </ul>
            </div>
        </div>
    );

}

export default Nav;