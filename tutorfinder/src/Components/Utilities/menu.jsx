import React, { useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import Cookies from "js-cookie";
import {useHistory } from 'react-router-dom';

import jwt from "jsonwebtoken";



const Menu = (props) => {
  let pendingLessons = []
  let existingLessons = []
  let currentUser = ""

  let userEmail = ""
  let userRole = ""



  useEffect(() => {
    let token = Cookies.get('loginToken');
    if (token != null) {
      const decoded = jwt.decode(token);
      userEmail = decoded.username
      userRole = decoded.role
    }
    fetch('/api/users/getCurrentUserDetails', {
      method: 'POST',
      body: JSON.stringify({userEmail}),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          console.log(data)
          currentUser = data.currentUser
        }
      })

    fetch('/api/schedule/getPendingLessons', {
      method: 'POST',
      body: JSON.stringify({userEmail, userRole}),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          if (data.data.length > 0) {
            pendingLessons = data.data[0].pendingLessonsList
          }
        }
      })
    

    fetch('/api/schedule/getExistingLessons', {
      method: 'POST',
      body: JSON.stringify({ userEmail, userRole }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          if (data.data.length > 0) {
            existingLessons = data.data[0].existingLessonsList
          }
        }
      })
  })

  const history = useHistory()
  const { user } = props
  const handleLogOut = () => {
    Cookies.remove("loginToken")
    history.push('/')
    window.location.reload(false)
  }
  const handleEditProfile = () => {
    history.push
      ({
        pathname: "/editprofile",
        state: { currentUser}
      })
  }
  const handleDashboard = () => {
    history.push
      ({
        pathname: "/dashboard",
        state: { pendingLessons: pendingLessons, existingLessons: existingLessons, userRole: userRole}
      })
  }
  // useEffect(() => {
  //   const loginToken =  Cookies.get('loginToken')
  //   console.log(loginToken)
  //   const decodedToken = jwt.verify(loginToken, secret);
  //   const username = decodedToken.name
  const friendOptions = [
    {
      key: user,
      text: user,
      value: user
    },
    {
      key: "edit ",
      text: "עריכת פרופיל",
      value: "EDIT",
      onClick: handleEditProfile
    },
    {
      key: "dashboard ",
      text: "אזור אישי",
      value: "Dashboard",
      onClick: handleDashboard
    },
    {
      key: "Log Out ",
      text: "התנתק",
      value: "LOGOUT",
      onClick: handleLogOut
    }
  ];
  // }, [])

  return (
    <span>
      <Dropdown
        inline
        options={friendOptions}
        defaultValue={friendOptions[0].value}
      />
    </span>
  )
};

export default Menu;