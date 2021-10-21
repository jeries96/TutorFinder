import React from "react";
import './Footer.css'
import facebook from '../../utils/facebook.png'
import instagram from '../../utils/instagram.png'
import web from '../../utils/world-wide-web.png'
const Footer = () => (
    <div dir='rtl' className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="text">
                        <h3>המכללה האקדמית עמק יזרעאל </h3>
                    </div>
                    <div className="col item social"><a href="https://www.facebook.com/yvc.ac/"><i><img className='facebook-icon' src={facebook} /></i></a>
                        <a href="https://www.instagram.com/yezreelvalleycollege/?hl=en"><i><img className='facebook-icon' src={instagram} /></i></a>
                        <a href="https://www.yvc.ac.il/"><i><img className='facebook-icon' src={web} /></i></a>
                    </div>
                </div>
                <p className="copyright">Mentor Team © 2021</p>
            </div>
        </footer>
    </div>
);

export default Footer;