import React from 'react'
import './Nav.css';

import {useHistory} from "react-router-dom";
function Nav (){
    let History=useHistory();

    function HandleSignIn(e){
        e.preventDefault();
        History.push('/SignIn')
    }

    return (
    <div>
        <div className="navigation">
            <ul className="navigation__menu">
                <li id="navigation__logo"> TutorFinder </li>
                <li id="navigation__signIn" onClick={HandleSignIn}> Sign IN  </li>
            </ul>
        </div>
    </div>
    );

}

export default Nav;