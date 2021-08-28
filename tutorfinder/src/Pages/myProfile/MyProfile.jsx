import React from 'react'
import './MyProfile.css';
//Components

import { useState, useEffect } from 'react';
import MainProfileCard from '../../Components/Cards/MainProfileCard/MainProfileCard';


function MyProfile(props) {

    const [accountsDetails, setAccountsDetails] = useState([])
    useEffect(() => {
        fetch('/api/myProfile/getAccountsDetails')
            .then(res => res.json())
            .then(data => {
                setAccountsDetails(data)
            })
    }, [])


    return (
        <div id="My_Profile_Container">

            <div id="My_Profile_Body">
                <MainProfileCard details={accountsDetails} />
            </div>

            <Link id="My_Profile_Edit" to={{
                pathname: "/editProfile",
                aboutProps: { accountsDetails }
            }}>
                עריכת פרופיל
            </Link>


        </div>

    );

}
export default MyProfile;