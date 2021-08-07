import React from 'react'
import image from '../../utils/emek.jpg'
import './MainPageProfile.css';

function MainPageProfile() {


    return(
         <div dir="rtl" className="HomePage__Profile">
         <div className = "image">
             <img id='image' src={image} />
        </div>
</div>
);

}

export default MainPageProfile;