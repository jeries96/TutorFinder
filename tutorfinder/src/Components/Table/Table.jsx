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

    let [data, setData] = useState([]);

    useEffect(() => {
        setData([
            { studentName: 'nimer', date: '15/06/1997', teacherName: "yousef", teacherEmail: "yy", status: false },
            { studentName: 'js', date: '15/06/1997', teacherName: "yousef", teacherEmail: "yy", status: false },
            { studentName: 'a', date: '15/06/1997', teacherName: "yousef", teacherEmail: "yy", status: false },
            { studentName: 'sssss', date: '15/06/1997', teacherName: "yousef", teacherEmail: "yy", status: false }
        ]
        )
    }, [])

    function handleApprove(value, index) {

        let newArray = []

        for (let i = 0; i < data.length; i++) {
            if (i !== index) {
                newArray.push(data[i])
            }

        }

        setData(newArray)
    }

    function handleDeny() {
        console.log('Deny')

    }
    return (
            <div class="table-wrapper">
                <table dir='rtl' class="fl-table">

                    <thead>

                        <tr className='fl-table-header'>
                            <th>תאריך</th>
                            <th>שם הסטודנט</th>
                            <th>שם המורה</th>
                            <th>אימייל המורה</th>
                            <th>סטטוס</th>
                        </tr>

                    </thead>

                    <tbody>
                        {
                            data.map((value, index) => {
                                return (
                                    <tr>
                                        <td>{value.date}</td>
                                        <td>{value.studentName}</td>
                                        <td>{value.teacherName}</td>
                                        <td>{value.teacherEmail}</td>
                                        <td>
                                            <button onClick={() => handleApprove(value, index)}><img src={tick} /> </button>
                                            <button onClick={handleDeny}><img src={clear} /></button>
                                        </td>
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