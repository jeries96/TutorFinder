import React ,{useState} from 'react';
import './SignUp.css'
import {Link} from 'react-router-dom';


// Components : 
import Select from 'react-select';

const serverSignUp={firstName:null,  
                    email:null,
                    password:null }

const passwordMatch={password:null , repeatPassword:null}

function SignUp (){
    const [validatePassword,setValidatePassword] = useState("")
    const [error,setError] = useState("")
    const collegeOptions = [
        { value: "EmekYezrel", label: "מכללת עמק יזרעל" },
        { value: "ortBrauda", label: "מכללת אורט בראודה" },
        { value: "other", label: "אחר" }
      ]
      const areaLocationOptions = [
        {
          label: "צפון",
          options: [
            { label: "חיפה והסביבה", value: "value_1" },
            { label: "קריות והסביבה", value: "value_2" },
            { label: "עכו-נהריה והסביבה", value: "value_1" },
            { label: "גליל עליון", value: "value_2" },
            { label: "כנרת והסביבה", value: "value_1" },
            { label: "נצרת", value: "value_2" },
            { label: "שפרעם", value: "value_2" },
            { label: "ראש פינה ", value: "value_1" },
            { label: "גליל תחתון", value: "value_2" },
          ]
        },
        {
            label : "דרום",
            options :[
        { label: "באר שבע", value: "value_3" },
        { label: "אילת וערבה ", value: "value_4" },
        { label: "ישובי הנגב ", value: "value_4" },
        { label: " דרום ים המלח ", value: "value_4" },
            ]},
            {
                label : "מרכז",
                options :[
            { label: "תל אביב", value: "value_3" },
            { label: "חולון-בת ים ", value: "value_4" },
            { label: "רמת גן-גבעתיים ", value: "value_4" },
            { label: "פתח תקווה והסביבה ", value: "value_4" },
            { label: " ראשון לציון והסביבה ", value: "value_4" },
                ]},
      ];

     function savePassword (event) {
       let password=event.target.value
       passwordMatch.password=password
       console.log(passwordMatch)
     }
     function saveRepeatPassword (event) {
      let repeatPassword=event.target.value
      passwordMatch.repeatPassword=repeatPassword
      console.log(passwordMatch)
    }
     function checkPassword(){
        if(passwordMatch.password===passwordMatch.repeatPassword){
          setValidatePassword('תואם')
          return true
        }else {
          setValidatePassword('לא תואם')
          return false
        }
     }

      function HandleSignUp (event){
          event.preventDefault();
          if(checkPassword()!== true){
            setError('שתי הסיסמאות חיבבים להיות זהים')
          }else {
          const {userName,email,password}=event.target.elements;
          serverSignUp.firstName=userName.value;
         // serverSignUp.lastName=lastName.value;
          serverSignUp.email=email.value;
          // if(phone.value!==""){
          //   serverSignUp.phoneNumber=phone.value;
          // }
          // if(area.value!==""){
          //   serverSignUp.location=area.value;
          // }
          // if(education.value!==""){
          //   serverSignUp.education=education.value;
          // }
          serverSignUp.password=password.value;
          
        console.log(serverSignUp)
          
          fetch('/api/users/createUser', {
            method: "POST",
            body: JSON.stringify({serverSignUp}),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {console.log(data)});
    }
  }
      
     

    return (
        <div dir="rtl" className="SignUpForm__Wrapper">
        <form className="SignUpForm" onSubmit={HandleSignUp}>

         <h2 className="SignUpForm__Title">הרשמה  </h2>
         <div className="container">
        
         <div className="SignUpForm__personalInput">
         <div className="SignUpForm__inputs">
         <h4> שם פרטי <b className="required">*</b></h4>
         <input type="text" className="SignUpForm__textInput" placeholder="שם פרטי" name="userName" required />
         </div>
         
         {/* <div className="SignUpForm__inputs">
         <h4> שם משפחה <b className="required">*</b></h4>
         <input type="text" className="SignUpForm__textInput" placeholder="שם משפחה" name="lastName" required />
         </div> */}
         </div>
         
         <div className="SignUpForm__personalInput">
         <div className="SignUpForm__inputs">
         <h4> דואר אלקטרוני <b className="required">*</b></h4>
         <input type="email" className="SignUpForm__textInput" placeholder="דואר אלקטרוני" name="email" required />
         </div>
        
         {/* <div className="SignUpForm__inputs">
         <h4> מספר פלפון </h4>
         <input type="tel"  className="SignUpForm__textInput" name="phone" maxlength={10} pattern="[0-9]{3}[0-9]{3}[0-9]{4}" placeholder="מספר פלאפון"  />
         </div> */}
         </div>

         <div className="SignUpForm__personalInput">
         <div className="SignUpForm__inputs">
         <h4> סיסמה <b className="required">*</b> </h4>
       
         <input 
         onChange={savePassword}
         type="password" 
         className="SignUpForm__passwordInput" 
         placeholder="סיסמה" 
         name="password" 
         required />
         </div>
        
         <div className="SignUpForm__inputs">
         <h4>  תאשר סיסמה <b className="required">*</b> </h4>
         
         <input 
         onChange={saveRepeatPassword}
         onKeyUp={checkPassword}
         type="password" 
         className="SignUpForm__passwordInput" 
         placeholder="סיסמה עוד פעם" 
         name="repeatPassword" 
         required />
         <h5 id="SignUp__checkPasswordInput">{validatePassword}</h5>
         </div>

       </div>

         {/* <div className="SignUpForm__SelectorsInput">
         <div className="SignUpForm__inputs">
          <h4> אזור מגורים </h4>
         <Select 
         className="SignUpForm__collegeOptions"
         options={areaLocationOptions}
         placeholder="אזור מגורים"
         name="area" />
        </div>

        <div className="SignUpForm__inputs">
        <h4> מקום לימודים </h4>
         <Select 
         className="SignUpForm__collegeOptions"
         options={collegeOptions}
         placeholder="תבחר באיזה מכללה"
         name="education" />
        </div>
        
        </div> */}

        
         
          <h4>{error} </h4>
         <button className="SignUpForm__button--register" type="submit">הירשם </button>
              
         <Link to="/SignIn"><h3 id="SignUpForm__button--alreadyHaveAccount">יש לך חשבון קיים?</h3></Link> 
               
         </div>

         

     </form>

     </div>

    );
}


export default SignUp;