import React, { useState, useEffect } from 'react';
import Filters from '../../Components/Utilities/Filters/Filters'
import MiniProfileCard from '../../Components/Cards/MiniProfileCard/MiniProfileCard'

import './MatchingTeachers.css'


function MatchingTeachers(props) {
  // console.log(props.location.aboutProps.name)
  // .name;
  const subSubject=props.location.aboutProps
  const teachingPlaces=props;
  const [teachers,setTeachers]=useState([]);
  useEffect(() => {
    fetch('/api/matchingTeachers/getTeachers', {
        method: 'POST',
        body: JSON.stringify({ teachingPlaces,subSubject }),
        headers: {
            "Content-Type": "application/json"
        }
    })  
        .then(res => res.json())
        .then(data => {
          if(data.length>0){
            if(data[0]._id===true){
            setTeachers(data[0].teachers)
          }
        }else{
            alert(data.message)
          }
          
          
        })

}, [subSubject,teachingPlaces])

return (
  <div dir="rtl" className="matchingTeachers__wrapper">
    <div className="matchingTeachers__miniProfileCard">
    <MiniProfileCard teachers={teachers} />
    </div>
  </div>
)


}



export default MatchingTeachers;