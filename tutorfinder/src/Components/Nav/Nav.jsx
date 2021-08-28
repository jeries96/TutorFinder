import React from 'react'
import './Nav.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import Cookies from "js-cookie";
import {Menu,MenuItem,MenuButton, MenuDivider} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';



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
                    <Menu menuButton={<MenuButton>Open menu</MenuButton>}>
                        <MenuItem>
                            <i className="material-icons">content_cut</i>Cut
                        </MenuItem>
                        <MenuItem>
                            <i className="material-icons">content_copy</i>Copy
                        </MenuItem>
                        <MenuItem>
                            <i className="material-icons">content_paste</i>Paste
                        </MenuItem>
                        <MenuDivider />
                        <MenuItem href="https://github.com/szhsin/react-menu/">
                            <img src="octocat.png" alt="" role="presentation" />GitHub
                        </MenuItem>
                    </Menu>
                    Hover and ac

                    <Link to="/">
                        <li > <h1 className='title-logo'> Moreem</h1> </li>
                    </Link>


                </ul>
            </div>
        </div>
    );

}

export default Nav;