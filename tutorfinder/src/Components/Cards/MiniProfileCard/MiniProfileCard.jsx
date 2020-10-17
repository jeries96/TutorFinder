import React from 'react';
import { Link } from 'react-router-dom';
import './MiniProfileCard.css'


function MiniProfileCard(props) {
  const teachers = props
  return (
      <div>
       {teachers.teachers.length>0 && teachers.teachers.map((teacher,index)=>{
         return( <div key={index} dir="rtl" className="MiniProfileCard__Wrapper" >
      <div className="MiniProfileCard__Header__ProfilePicture_holder" >
        <img className="MiniProfileCard__Header__ProfilePicture" src={teacher.userPersonalInfo.personalPhoto} alt="profilepicture" /></div>
      <div className="MiniProfileCard__Header__ProfileInfo_holder" >
        <h2 className="MiniProfileCard__Header__ProfileInfo_Name" >{teacher.userPersonalInfo.firstName} {teacher.userPersonalInfo.lastName} </h2>
        <div>{teacher.ratings.overallRate}</div>
        <div>באינטרנט</div>
      </div>
      <div className="MiniProfileCard__Header__TeachingLocation_holder">
        <h6 className="MiniProfileCard__Header__TeachingLocation_Title">מיקומי הוראה:
            </h6>
        <div className="MiniProfileCard__Header__TeachingLocation_locations">
        {/* {teacher.teaching.teachingPlaces.length>0 && teacher.teaching.teachingPlaces.map((place,index)=>{
        return(<div key={index} className="MiniProfileCard__Header__TeachingLocation_location">{place}</div>)
        }) } */}
        </div>
      </div>
      <Link to="profile" className="MiniProfileCard__Button">
        ראה פרופיל מלא
        </Link>
        <div className="MiniProfileCard__Bio">
        {teacher.userLifeActivity.biography}
        </div>
      </div> )})}
      </div>

  )


  




}

export default MiniProfileCard;