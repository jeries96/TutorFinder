import React from 'react';
import { Link } from 'react-router-dom';
import './MiniProfileCard.css'
import leftArrow from '../../../utils/left-arrow.png'

import RatingStar from '../../Utilities/Rating/RatingStar'
function MiniProfileCard(props) {
  const teachers = props
  const {subSubject} = props  

  return (
      <div>
        <div id='GOBACK__Button'>
          <Link to='/'>
          <img id='backarrowImage' src={leftArrow} />
          </Link>
        </div>
       {teachers.teachers.length>0 && teachers.teachers.map((teacher,index)=>{
         return( <div key={index} dir="rtl" className="MiniProfileCard__Wrapper" >
      <div className="MiniProfileCard__Header__ProfilePicture_holder" >
        <img className="MiniProfileCard__Header__ProfilePicture" src={teacher.userPersonalInfo.personalPhoto} alt="profilepicture" /></div>
      <div className="MiniProfileCard__Header__ProfileInfo_holder" >
        <h2 className="MiniProfileCard__Header__ProfileInfo_Name" >{teacher.userPersonalInfo.firstName} {teacher.userPersonalInfo.lastName} </h2>
        <div><RatingStar value={4}/></div>
        <div>באינטרנט</div>
      </div>
      <div className="MiniProfileCard__Header__TeachingLocation_holder">
        <h6 className="MiniProfileCard__Header__TeachingLocation_Title">מיקומי הוראה:
            </h6>
        <div className="MiniProfileCard__Header__TeachingLocation_locations">
        {teacher.teaching.teachingPlaces.length>0 && teacher.teaching.teachingPlaces.map((place,index)=>{
        return(<div key={index} className="MiniProfileCard__Header__TeachingLocation_location">{place}</div>)
        }) }
        </div>
      </div>

        <Link  className="MiniProfileCard__Button" to={{pathname:"/profile",
                                                            aboutProps:{teacher: teacher, subSubject: subSubject} }}>
        ראה פרופיל מלא
        </Link>
        <p className="MiniProfileCard__Bio">
        {teacher.userLifeActivity.biography}
        </p>
      </div> )})}
      </div>

  )


  




}

export default MiniProfileCard;