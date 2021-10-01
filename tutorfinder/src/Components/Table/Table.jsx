import React, { useEffect, useState } from "react";
import { Dropdown } from "semantic-ui-react";
import Cookies from "js-cookie";
import { Link, useHistory } from 'react-router-dom';

import tick from '../../utils/tick.png'
import clear from '../../utils/clear.png'
import './Table.css'
import DashboardCards from "./../DashboardCards/DashboardCards"
import Footer from "../Footer/Footer";


const Table = (props) => {
    const { status, setPendingLessons, setExistingLessons, data, existingLessons, upComing, setUpComing, pending, setPending } = props


    function handleApprove(value, index) {
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

    return (
        <div class="table-wrapper">
            <table dir='rtl' class="fl-table">

                <thead>

                    <tr className='fl-table-header'>
                        <th>תאריך</th>
                        <th>שם המורה</th>
                        <th>שם הסטודנט</th>
                        <th>אימייל המורה</th>
                        {status &&
                            <th>סטטוס</th>}
                    </tr>

                </thead>

                <tbody>
                    {data.length > 0 &&
                        data.map((value, index) => {
                            return (
                                <tr>
                                    <td>{value.time}</td>
                                    <td>{value.teacherName}</td>
                                    <td>{value.student}</td>
                                    <td>{value.teacher}</td>
                                    {status &&
                                        <td>
                                            <button onClick={() => handleApprove(value, index)}><img src={tick} /> </button>
                                            <button onClick={() => handleDeny(value, index)}><img src={clear} /></button>
                                        </td>}
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