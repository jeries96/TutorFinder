import * as React from 'react';
import './Schedule.css';
import leftArrow from '../../../utils/left-arrow.png'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DayTimePicker from '@mooncake-dev/react-day-time-picker';
import Cookies from "js-cookie";

function Schedule(props) {
    var secret = 'abcdefghujklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*()_+';
    const jwt = require("jsonwebtoken");
    const [availableTeacherTime, setAvailableTeacherTime] = useState([]);
    let teacher = false;
    let subSubject = ""
    if (props.location.aboutProps) {
        teacher = props.location.aboutProps.teacher
        subSubject = props.location.aboutProps.subSubject
    }
    useEffect(() => {
        // const loginToken =  Cookies.get('loginToken')
        // console.log(loginToken)
        // const decodedToken = jwt.verify(loginToken, secret);
        // const email = decodedToken.email
        const email = "nemrsh1@gmail.com"

        fetch('/api/schedule/getScheduleTableTeacher', {
            method: 'POST',
            body: JSON.stringify({ email }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.length > 0) {
                    if (data.success === true) {
                        setAvailableTeacherTime(data.data[0].availableTime)
                    }
                }
            })

    }, [])

    const array = [
        new Date('Sep 24, 2021  17:45:00'),
        new Date('Sep 16, 2021  18:45:00'),
        new Date('Sep 16, 2021  19:00:00'),
    ]

    const [isScheduled, setIsScheduled] = useState(false);

    function timeSlotValidator(slotTime) {
        let isValid = true

        availableTeacherTime.map((date, index) => {
            if (slotTime.getTime() == date.getTime()) {
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
                <Link to={{ pathname: "/profile", aboutProps: { teacher: teacher, subSubject: subSubject } }}>
                    <img src={leftArrow} />
                </Link>
            </div>
        </div>
    );

}

export default Schedule;