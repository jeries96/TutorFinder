import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Filters from '../../Components/Utilities/Filters/Filters'
import MiniProfileCard from '../../Components/Cards/MiniProfileCard/MiniProfileCard'

import './MatchingTeachers.css'


function MatchingTeachers(props) {
  const subSubject=props;
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
          if(data[0]._id===true){
            setTeachers(data[0].teachers)
          }
          else{
          console.log(data.message)
          }
        })

}, [subSubject,teachingPlaces])


return (
  <div dir="rtl" className="matchingTeachers__wrapper">
    <div className="matchingTeachers__Filters"> <Filters /> </div>
    <div className="matchingTeachers__miniProfileCard">
    <MiniProfileCard teachers={teachers} />
    </div>
  </div>
)


}



export default MatchingTeachers;