import React, { useEffect, useState } from "react";
import { Dropdown } from "semantic-ui-react";
import Cookies from "js-cookie";
import { Link, useHistory } from 'react-router-dom';


import './DashboardCards.css'


const DashboardCards = (props) => {
    return (
        <div>
            <div class="main-section">
                <div className="dashbord">
                    <div className="icon-section">
                        <small>Classes</small>
                        <p>11</p>
                    </div>
                    <div className="detail-section">
                        <p>
                            last month
                        </p>
                    </div>
                </div>
                <div className="dashbord dashbord-green">
                    <div className="icon-section">
                        <small>Account</small>
                        <p>7</p>
                    </div>
                    <div className="detail-section">
                        <p>HEEEY</p>
                    </div>
                </div>
                <div class="dashbord dashbord-red">
                    <div class="icon-section">
                        <small>Account</small>
                        <p>$ 256</p>
                    </div>
                    <div class="detail-section">
                        <a href="#">More Info </a>
                    </div>
                </div>
                <div class="dashbord dashbord-orange">
                    <div class="icon-section">
                        <small>Alert</small>
                        <p>9 New</p>
                    </div>
                    <div class="detail-section">
                        <a href="#">More Info </a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default DashboardCards;