import React, { useEffect, useState } from "react";
import { Dropdown, Rating } from "semantic-ui-react";
import Cookies from "js-cookie";
import { Link, useHistory } from 'react-router-dom';

import tick from '../../utils/tick.png'
import clear from '../../utils/clear.png'
import './Table.css'
import DashboardCards from "./../DashboardCards/DashboardCards"
import Footer from "../Footer/Footer";
import dateFormat from "dateformat";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { Box } from "@material-ui/core";
import RatingStar from "../Utilities/Rating/RatingStar";


const Table = (props) => {
    const { status, setPendingLessons, setExistingLessons, data, existingLessons, upComing, setUpComing, pending, setPending } = props
    const [setRating, rating] = useState(0)
    const [setIsReadOnly, readOnly] = useState(false)
    const [setShowRating, showRating] = useState(true)


    const submit = (value, index)=> {
         confirmAlert({
          title: 'Confirm to submit',
          message: 'Are you sure to do this.',
          buttons: [
            {
              label: 'Yes',
              onClick: () => handleApprove(value, index)
            },
            {
              label: 'No',
            }
          ]
        })};
    
    const deny = (value, index)=> {
        confirmAlert({
         title: 'Confirm to submit',
         message: 'Are you sure to do this.',
         buttons: [
           {
             label: 'Yes',
             onClick: () => handleDeny(value, index)
           },
           {
             label: 'No',
           }
         ]
       })};
    
       const submitRating = (value, index)=> {
        confirmAlert({
         title: 'Confirm to submit',
         message: 'Are you sure to do this.',
         buttons: [
           {
             label: 'Yes',
             onClick: () => handleRating(value, index)
           },
           {
             label: 'No',
           }
         ]
       })};

    function handleApprove(value, index) {
        const updateDataBase = data[index]
        fetch('/api/schedule/updatePendingFalse', {
            method: "POST",
            body: JSON.stringify({updateDataBase}),
            headers: {
              "Content-Type": "application/json",
            },
          })

          fetch('/api/schedule/addToExistingLesson', {
            method: "POST",
            body: JSON.stringify({updateDataBase}),
            headers: {
              "Content-Type": "application/json",
            },
          })
        let newArray = []
        for (let i = 0; i < data.length; i++) {
            if (i !== index) {
                newArray.push(data[i])
            }
            else {
                existingLessons.push(data[i])
            }
        }
        setPendingLessons(newArray)
        setExistingLessons(existingLessons)
        setUpComing(upComing + 1)
        setPending(pending - 1)
    }

    function handleDeny(value, index) {
        const updateDataBase = data[index]
        fetch('/api/schedule/updatePendingFalse', {
            method: "POST",
            body: JSON.stringify({updateDataBase}),
            headers: {
              "Content-Type": "application/json",
            },
          })
            
        let newArray = []
        console.log(data[index])
        for (let i = 0; i < data.length; i++) {
            if (i !== index) {
                newArray.push(data[i])
            }
        }
        setPendingLessons(newArray)
        setPending(pending - 1)
    }

    function handleRating(value, index) {      
      setShowRating(false)
      }
  
    return (
        <div class="table-wrapper">
            <table dir='rtl' class="fl-table">

                <thead>

                    <tr className='fl-table-header'>
                        <th>תאריך</th>
                        <th>שעה</th>
                        <th>שם המורה</th>
                        <th>שם הסטודנט</th>
                        <th>אימייל המורה</th>
                        {status &&
                            <th>סטטוס</th>}
                        <th>ציון</th>
                    </tr>

                </thead>

                <tbody>
                    {data.length > 0 &&
                        data.map((value, index) => {
                            return (
                                <tr>
                                    <td> {dateFormat(value.time, "mediumDate")}</td>
                                    <td> {dateFormat(value.time, "HH:MM")}</td>
                                    <td>{value.teacherName}</td>
                                    <td>{value.student}</td>
                                    <td>{value.teacher}</td>
                                    {status &&
                                        <td className='approval_buttons'> 
                                            <div onClick={() => submit(value, index)}><img src={tick} /> </div>
                                            <div onClick={() => deny(value, index)}><img src={clear} /></div>
                                        </td>}
                                    <td><RatingStar onClick={() => deny(value, index)} value={value}/></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );

}

export default Table;