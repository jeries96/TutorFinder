import React, { useState, useEffect } from 'react';
import MiniProfileCard from '../../Components/Cards/MiniProfileCard/MiniProfileCard'

import './MatchingTeachers.css'


function MatchingTeachers(props) {
  let subSubject = props.location.aboutProps
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch('/api/matchingTeachers/getTeachers', {
      method: 'POST',
      body: JSON.stringify({ subSubject }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
          if (data[0]._id === true) {
            setTeachers(data[0].teachers)
          }
        } else {
          alert(data.message)
        }


      })

  }, [subSubject])


  return (
    <div dir="rtl" className="matchingTeachers__wrapper">
      <div className="matchingTeachers__miniProfileCard">
        <MiniProfileCard teachers={teachers} subSubject={subSubject} />
      </div>
    </div>
  )


}



export default MatchingTeachers;