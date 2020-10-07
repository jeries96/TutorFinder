import React from 'react'
import './Nav.css';

function Nav (){
    
    return (
    <div>
        <div className="navigation">
            <ul className="navigation__menu">
                <li id="navigation__logo"> TutorFinder </li>
                <li id="navigation__signIn"> Sign IN  </li>
            </ul>
        </div>
    </div>)
    ;

}

export default Nav;