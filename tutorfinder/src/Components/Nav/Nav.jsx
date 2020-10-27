import React from 'react'
import './Nav.css';
import {Link} from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import Cookies from "js-cookie";


function Nav (){


const [isLoggedIn,setIsLoggedIn]= useState(false)
useEffect(() => {
    let token = Cookies.get('loginToken');
 if(token!=undefined){
     setIsLoggedIn(true)
 }
}, [isLoggedIn])



const handleLogOut =()=>{
    Cookies.remove("loginToken")
    setIsLoggedIn(false)
}
    return (
    <div dir="rtl">
        <div className="navigation">
            <ul className="navigation__menu">
                {isLoggedIn===false && 
                <Link to="/SignIn">
                <li id="navigation__signIn"> התחבר  </li>
                </Link>}
                {isLoggedIn && <li  onClick={handleLogOut} id="navigation__signIn"> התנתק  </li>}
                <Link to="/">
                <li > <img id="navigation__logo" src="https://s8.gifyu.com/images/MooreemLogo.jpg" alt="MooreemLogo.png"/> </li>
                </Link>

               
            </ul>
        </div>
    </div>
    );

}

export default Nav;