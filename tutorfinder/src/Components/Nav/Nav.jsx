import React from 'react'
import './Nav.css';
import {Link} from "react-router-dom";
function Nav (){


    return (
    <div>
        <div className="navigation">
            <ul className="navigation__menu">
                <Link to="/">
                <li id="navigation__logo"> TutorFinder </li>
                </Link>

                <Link to="/SignIn">
                <li id="navigation__signIn"> SignIn  </li>
                </Link>
            </ul>
        </div>
    </div>
    );

}

export default Nav;