import React from 'react'
import './Nav.css';
import {Link} from "react-router-dom";
function Nav (){


    return (
    <div dir="rtl">
        <div className="navigation">
            <ul className="navigation__menu">
                <Link to="/SignIn">
                <li id="navigation__signIn"> התחבר  </li>
                </Link>
                <Link to="/">
                <li id="navigation__logo"> Moorem </li>
                </Link>

               
            </ul>
        </div>
    </div>
    );

}

export default Nav;