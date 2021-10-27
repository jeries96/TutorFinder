import React, { useState } from 'react';
import './SignUp.css'
import { Link, useHistory } from 'react-router-dom';


// Components : 
import Select from 'react-select';

const serverSignUp = {
  firstName: null,
  lastName: null,
  email: null,
  password: null,
  role: null,
  subject: null,
}

const passwordMatch = { password: null, repeatPassword: null }

function SignUp() {
  const history = useHistory()
  const [isDisabled, setIsDisabled] = useState(true)

  const [validatePassword, setValidatePassword] = useState("")
  const [error, setError] = useState("")
  const subjectOptions = [
    { value: "epidemiology", label: "אפידמיולוגיה" },
    { value: "pharmacology", label: "פרמקולוגיה" },
    { value: "microbiology", label: "מיקרוביולוגיה" },
    { value: "characterizationAndDesign", label: "אפיון ותכן" },
    { value: "Logic Design", label: "תכן לוגי" },
    { value: "Network protection", label: "הגנה ברשתות" },
    { value: "operatingSystems", label: "מערכות הפעלה" },
  ]
  const RoleOptions = [
    { label: "סטודנט", value: "student" },
    { label: "מורה", value: "teacher" },
  ]



  function savePassword(event) {
    let password = event.target.value
    passwordMatch.password = password
  }
  function saveRepeatPassword(event) {
    let repeatPassword = event.target.value
    passwordMatch.repeatPassword = repeatPassword
  }
  function checkPassword() {
    if (passwordMatch.password === passwordMatch.repeatPassword) {
      setValidatePassword('תואם')
      return true
    } else {
      setValidatePassword('לא תואם')
      return false
    }
  }
  function handleRole(role) {
    if (role.value == 'teacher') {
      setIsDisabled(false)
    }
    else {
      setIsDisabled(true)
    }
  }

  function HandleSignUp(event) {
    event.preventDefault();
    if (checkPassword() !== true) {
      setError('שתי הסיסמאות חיבבים להיות זהים')
    } else {
      const { userName, lastName, email, password, role, subject } = event.target.elements;
      serverSignUp.firstName = userName.value;
      serverSignUp.lastName = lastName.value;
      serverSignUp.email = email.value;
      serverSignUp.role = role.value;

      if (role.value == 'teacher') {
        if (subject != undefined) {
          serverSignUp.subject = subject.value;
        }
        if (subject == "") {
          serverSignUp.subject = null;
        }
      }
      else {
          serverSignUp.subject = null;
        }
      

      // if(phone.value!==""){
      //   serverSignUp.phoneNumber=phone.value;
      // }
      // if(area.value!==""){
      //   serverSignUp.location=area.value;
      // }
      // if(education.value!==""){
      //   serverSignUp.education=education.value;
      // }
      serverSignUp.password = password.value;

      fetch('/api/users/createUser', {
        method: "POST",
        body: JSON.stringify({ serverSignUp }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success === true) {
            history.push('/SignIn')
          } else {
            setError(data.error)
          }
        });
    }
  }



  return (
    <div dir="rtl" className="SignUpForm__Wrapper">

      <div className="wrapper fadeInDown">
        <div id="formContent">

          <form className="SignUpForm" onSubmit={HandleSignUp}>

            <h2 className="SignUpForm__Title">הרשמה  </h2>
            <div className="container">

              <div className="SignUpForm__personalInput">
                <div className="SignUpForm__inputs">
                  <input type="text" className="SignUpForm__textInput" placeholder="שם פרטי" name="userName" required />
                </div>

                <div className="SignUpForm__inputs">
                  <input type="text" className="SignUpForm__textInput" placeholder="שם משפחה" name="lastName" required />
                </div>
              </div>

              <div className="SignUpForm__personalInput">
                <div className="SignUpForm__inputs">
                  <input type="email" className="SignUpForm__textInput" placeholder="דואר אלקטרוני" name="email" required />
                </div>

                {/* <div className="SignUpForm__inputs">
         <h4> מספר פלפון </h4>
         <input type="tel"  className="SignUpForm__textInput" name="phone" maxlength={10} pattern="[0-9]{3}[0-9]{3}[0-9]{4}" placeholder="מספר פלאפון"  />
         </div> */}
              </div>

              <div className="SignUpForm__personalInput">
                <div className="SignUpForm__inputs">

                  <input
                    onChange={savePassword}
                    type="password"
                    className="SignUpForm__passwordInput"
                    placeholder="סיסמה"
                    name="password"
                    required />
                </div>

                <div className="SignUpForm__inputs">

                  <input
                    onChange={saveRepeatPassword}
                    onKeyUp={checkPassword}
                    type="password"
                    className="SignUpForm__passwordInput"
                    placeholder="תאשר סיסמה"
                    name="repeatPassword"
                    required />
                  <h5 id="SignUp__checkPasswordInput">{validatePassword}</h5>
                </div>

                <div className="SignUpForm__inputs">

                  <Select options={RoleOptions}
                    onChange={handleRole}
                    className='role-options-select'
                    name="role"
                    defaultValue={RoleOptions[0]}
                    required />

                </div>

                <div className="SignUpForm__inputs">

                  <Select options={subjectOptions}
                    className='role-options-select'
                    name="subject"
                    placeholder='בחר נושא לימוד'
                    isDisabled={isDisabled}
                    required />

                </div>
              </div>


              <h4>{error} </h4>
              <button className="SignUpForm__button--register" type="submit">הירשם </button>

              <Link to="/SignIn"><h3 className="underlineHover">יש לך חשבון קיים?</h3></Link>

            </div>



          </form>

        </div>
      </div>
    </div>

  );
}


export default SignUp;