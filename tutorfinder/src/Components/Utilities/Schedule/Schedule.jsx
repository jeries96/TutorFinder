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
    let teacherEmail = ""
    let studentEmail = ""
    let teacherName = ""
    if (props.location.aboutProps) {
        teacher = props.location.aboutProps.teacher
        teacherEmail = teacher.userInfo.email
        teacherName = teacher.userPersonalInfo.firstName
        subSubject = props.location.aboutProps.subSubject
    }
    useEffect(() => {
        const loginToken = Cookies.get('loginToken')
        const decodedToken = jwt.verify(loginToken, secret);
        studentEmail = decodedToken.username

        fetch('/api/schedule/getScheduleTableTeacher', {
            method: 'POST',
            body: JSON.stringify({ teacherEmail }),
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

    const [isScheduling, setIsScheduling] = useState(false);
    const [isScheduled, setIsScheduled] = useState(false);
    const [scheduleErr, setScheduleErr] = useState('');

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
        setIsScheduling(true);
        setScheduleErr('');

        fetch('/api/schedule/requestLessonTime', {
            method: 'POST',
            body: JSON.stringify({ studentEmail, teacherEmail, date, teacherName }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success === true) {
                    setIsScheduling(false);
                    setIsScheduled(true)
                }
                else{
                    setScheduleErr("!בעית תקשורת אנא נסה שוב מאוחר יותר");
                }
            })
    }
    return (
        <div className="dateTimePicker">
            <DayTimePicker
                timeSlotSizeMinutes={60}
                isLoading={isScheduling}
                isDone={isScheduled}
                timeSlotValidator={timeSlotValidator}
                onConfirm={handleScheduled}
                confirmText="הזמנת שיעור"
                loadingText="..שולח בקשה להזמנת שיעור"
                doneText="!הזמנתך התקבלה בהצלחה"
                err={scheduleErr}
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