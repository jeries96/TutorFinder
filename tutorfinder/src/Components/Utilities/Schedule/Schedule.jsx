import * as React from 'react';
import './Schedule.css';
import leftArrow from '../../../utils/left-arrow.png'
import { Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import DayTimePicker from '@mooncake-dev/react-day-time-picker';
import Cookies from "js-cookie";

function Schedule() {
    var secret = 'abcdefghujklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*()_+';
    const jwt = require("jsonwebtoken");
    const [availableTeacherTime, setAvailableTeacherTime] = useState([]);
   
    useEffect(() => {
            const loginToken =  Cookies.get('loginToken')
            console.log(loginToken)
            const decodedToken = jwt.verify(loginToken, secret);
            const email = decodedToken.email

        fetch('/api/matchingTeachers/getTeachersAvailableTime', {
            method: 'POST',
            body: JSON.stringify({ email }),
            headers: {
                "Content-Type": "application/json"
            }
        })  
            .then(res => res.json())
            .then(data => {
              if(data.length>0){
                if(data[0]._id===true){
                    setAvailableTeacherTime(data[0].availableTime)
              }
            }else{
                alert(data.message)
              }
            })
    
    },[])
    
    const array = [
                   new Date('Sep 24, 2021  17:45:00'),
                   new Date('Sep 16, 2021  18:45:00'),
                   new Date('Sep 16, 2021  19:00:00'),
                   ]

    const [isScheduled, setIsScheduled] = useState(false);
    
    function timeSlotValidator(slotTime) {
        let isValid = true
        
        availableTeacherTime.map( (date,index) => {
           if (slotTime.getTime() == date.getTime()){
                isValid = false
           }
        })

        return isValid;
        
        // Add send email function. 
      }


    const handleScheduled = date => {
        console.log(date)
        setIsScheduled(true);
    }
        return (
            <div className="dateTimePicker">
              <DayTimePicker
              timeSlotSizeMinutes={60}
              isDone={isScheduled}
              timeSlotValidator={timeSlotValidator}
              onConfirm={handleScheduled}
              />   
            
            <div id="GOBACK__Button_LOCATOR">
                <Link to="/profile">
                    <img src={leftArrow} />
                </Link>
            </div>
            </div>
    );
  
}

export default Schedule;