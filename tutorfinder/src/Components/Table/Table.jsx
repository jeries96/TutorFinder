import React from "react";

import tick from '../../utils/tick.png'
import clear from '../../utils/clear.png'
import './Table.css'
import dateFormat from "dateformat";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import RatingStar from "../Utilities/Rating/RatingStar";
import {Link} from "react-router-dom";



const Table = (props) => {
  const date = new Date()
  const { status, ratings, setPendingLessons, setExistingLessons, data, existingLessons, upComing, setUpComing, pending, setPending, userRole } = props

  const submit = (value, index) => {
    confirmAlert({
      title: 'אישור שיעור',
      message: 'האם אתה מאשר קבלת השיעור?',
      buttons: [
        {
          label: 'כן',
          onClick: () => handleApprove(value, index)
        },
        {
          label: 'לא',
        }
      ]
    })
  };

  const deny = (value, index) => {
    confirmAlert({
      title: 'דחיית השיעור',
      message: 'האם אתה רוצה לדחות השיעור?',
      buttons: [
        {
          label: 'כן',
          onClick: () => handleDeny(value, index)
        },
        {
          label: 'לא',
        }
      ]
    })
  };

  function handleApprove(value, index) {
    const updateDataBase = data[index]
    fetch('/api/schedule/updatePendingFalse', {
      method: "POST",
      body: JSON.stringify({ updateDataBase }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    fetch('/api/schedule/addToExistingLesson', {
      method: "POST",
      body: JSON.stringify({ updateDataBase }),
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

  function handleDeny(index) {
    const updateDataBase = data[index]
    fetch('/api/schedule/updatePendingFalse', {
      method: "POST",
      body: JSON.stringify({ updateDataBase }),
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

  return (
    <div className='table-wrapper'>
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
            {ratings &&
              <th>ציון</th>}
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
                  {userRole === "teacher" && status &&
                    <td className='approval_buttons'>
                      <div onClick={() => submit(value, index)}><img src={tick} alt="tick" /> </div>
                      <div onClick={() => deny(value, index)}><img src={clear} alt="clear" /></div>
                    </td>}
                  {userRole === "student" && status &&
                    <td>
                      מחכה לאישור
                    </td>}
                  {ratings && date < new Date(value.time) &&
                    <td>
                      <button className='surveyButtonDisabled' disabled='true'> משוב
                        <span class="tooltiptext">אין אפשרות לתת משוב לפני קבלת השיעור</span>
                      </button>
                    </td>
                  }
                  {ratings && date > new Date(value.time) &&
                    <td>
                      <Link to='/survey'>
                        <button className='surveyButton'> משוב </button>
                      </Link>
                    </td>
                  }

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