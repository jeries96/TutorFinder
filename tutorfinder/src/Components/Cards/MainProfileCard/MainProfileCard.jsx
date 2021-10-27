import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import leftArrow from '../../../utils/left-arrow.png'
import Cookies from "js-cookie";

import './MainProfileCard.css'
import RatingStar from '../../Utilities/Rating/RatingStar'
function MainProfileCard(props) {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(() => {
    let token = Cookies.get('loginToken');

    if (token != undefined) {
      setIsLoggedIn(true)
    }
  }, [isLoggedIn])

  let teacher = false;
  let subSubject = ""
  if (props.location.aboutProps) {
    teacher = props.location.aboutProps.teacher
    subSubject = props.location.aboutProps.subSubject
  }

  return (
    <div dir="rtl" className="MainProfileCard__container">
      {teacher &&
        <div className="MainProfileCard__Wrapper">
          <div className="MainProfileCard__Header">
            <div className="MainProfileCard__Header__ProfilePicture_holder" >
              <img className="MainProfileCard__Header__ProfilePicture" src={teacher.userPersonalInfo.personalPhoto} alt="profilepicture" /></div>
            <div className="MainProfileCard__Header__ProfileInfo_holder" >
              <h2 className="MainProfileCard__Header__ProfileInfo_Name" >{teacher.userPersonalInfo.firstName} {teacher.userPersonalInfo.lastName}</h2>
              <div><RatingStar value={teacher.ratings.overallRate} /></div>
            </div>
            <div className="MainProfileCard__Header__TeachingLocation_holder">
              <h6 className="MainProfileCard__Header__TeachingLocation_Title">מיקומי הוראה:
              </h6>
              <div className="MainProfileCard__Header__TeachingLocation_locations">
                {teacher.teaching.teachingPlaces.length > 0 && teacher.teaching.teachingPlaces.map((place, index) => {
                  return (<div key={index} className="MainProfileCard__Header__TeachingLocation_location">{place}</div>)
                })}
              </div>
              {
                isLoggedIn &&
                <Link to={{ pathname: "/calendar", aboutProps: { teacher: teacher, subSubject: subSubject } }}>
                  <button id='make-appoitment'> הזמנת שיעור</button>
                </Link>
              }
            </div>

          </div>
          <div id='GOBACK__Button'>
            <Link to={{ pathname: "/teachers", aboutProps: { name: subSubject.name } }}>
              <img id='backarrowImage' src={leftArrow} />
            </Link>
          </div>

          <ul className="MainProfileCard__Navigator">
            <li id="bio" className="MainProfileCard__Navigator__option">ביוגרפיה</li>
          </ul>
          <div> <h3>{teacher.userPersonalInfo.firstName} {teacher.userPersonalInfo.lastName} </h3><p className="MainProfileCard__Bio">{teacher.userLifeActivity.biography}</p> </div>
        </div>}

    </div>
  );
}

export default MainProfileCard;