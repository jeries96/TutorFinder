import React, { useState, useEffect } from 'react';
import {useHistory} from "react-router-dom";

import './EditProfile.css'

const serverProfileUpdate = {
  firstName: null,
  lastName: null,
  bio: null,
  userEmail: null
}

function EditProfile(props) {
  const history=useHistory()

  const [userRole, setUserRole] = useState("student")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [bio, setBio] = useState("")

  useEffect(() => {
    if (props.location.state !== undefined) {
      setFirstName(props.location.state.currentUser.userPersonalInfo.firstName)
      setLastName(props.location.state.currentUser.userPersonalInfo.lastName)
      serverProfileUpdate.lastName = (props.location.state.currentUser.userPersonalInfo.lastName)

      setBio(props.location.state.currentUser.userLifeActivity.biography)
      setUserRole(props.location.state.currentUser.userInfo.role)
      serverProfileUpdate.userEmail = (props.location.state.currentUser.userInfo.email)
    }
  })
  

  function handleEditProfile(event) {
    event.preventDefault();
    const { userName, lastName } = event.target.elements;
    serverProfileUpdate.firstName = userName.value;
    serverProfileUpdate.lastName = lastName.value;
    const email = serverProfileUpdate.userEmail
    console.log(email)
    if (userRole === 'teacher') {
      const { bio } = event.target.elements;
      serverProfileUpdate.bio = bio.value;
    }

    fetch('/api/users/updateProfileInfo', {
      method: "POST",
      body: JSON.stringify({ serverProfileUpdate }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    history.push("/")
  }

  return (
    <div dir="rtl" className="editprofile__Wrapper">

      <div className="wrapper fadeInDown">
        <div id="formContent">

          <form className="editprofile" onSubmit={handleEditProfile}>

            <h2 className="editprofile__Title">עריכת פרופיל  </h2>
            <div className="container">

              <div className="editprofile__personalInput">
                <div className="editprofile__inputs">
                  <input type="text" className="editprofile__textInput" placeholder="שם פרטי" name="userName" defaultValue={firstName} required />
                </div>

                <div className="editprofile__inputs">
                  <input type="text" className="editprofile__textInput" placeholder="שם משפחה" name="lastName" defaultValue={lastName} required />
                </div>
                {userRole === 'teacher' &&
                  <div className="editprofile__inputs">
                    <textarea type="text" className="editprofile__textInput" placeholder="ביוגרפי" name="bio" defaultValue={bio} />
                  </div>}
              </div>

              <div className="editprofile__personalInput">
              </div>

              <div className="editprofile__personalInput">
                <div className="SignUpForm__inputs">

                </div>
              </div>

              <button className="editprofile__button--register" type="submit">שמור  </button>

            </div>



          </form>

        </div>
      </div>
    </div>

  );
}


export default EditProfile;