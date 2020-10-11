import React from 'react';

import './MainProfileCard.css'

function MainProfileCard(props) {

  return (
    <div dir="rtl" className="MainProfileCard__Wrapper">
      <div className="MainProfileCard__Header">
        <div className="MainProfileCard__Header__ProfilePicture_holder" >
          <img className="MainProfileCard__Header__ProfilePicture" src="https://prod-takelessons.netdna-ssl.com/document/profile_241617_pi_f8356e0e08cf2c1767580cedc0ab7f9e8ee156e4.jpg.webp?v=1599093909" alt="profilepicture" /></div>
        <div className="MainProfileCard__Header__ProfileInfo_holder" >
          <h2 className="MainProfileCard__Header__ProfileInfo_Name" >נסטיה רורו</h2>
          <div>rating</div>
          <div>באינטרנט</div>
        </div>
        <div className="MainProfileCard__Header__TeachingLocation_holder">
          <h6 className="MainProfileCard__Header__TeachingLocation_Title">מיקומי הוראה:
            </h6>
          <div className="MainProfileCard__Header__TeachingLocation_locations">
            <div className="MainProfileCard__Header__TeachingLocation_location">באינטרנט</div>
            <div className="MainProfileCard__Header__TeachingLocation_location">בית הסטודנטים</div>
            <div className="MainProfileCard__Header__TeachingLocation_location">בית המורה</div>
          </div>
        </div>

      </div>
    </div>

  );
}

export default MainProfileCard;