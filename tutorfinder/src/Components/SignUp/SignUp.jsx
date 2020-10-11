import React from 'react';
import './SignUp.css'
import {Link} from 'react-router-dom';


// Components : 
import Select from 'react-select';


function SignUp (){
    const collegeOptions = [
        { value: "EmekYezrel", label: "מכללת עמק יזרעל" },
        { value: "ortBrauda", label: "מכללת אורט בראודה" }
      ]
    return (
        <div dir="rtl" className="SignUpForm__Wrapper">
        <form className="SignUpForm">

         <h2 className="SignUpForm__Title">הרשמה  </h2>
         <div className="container">
        
         <div className="SignUpForm__inputs">
         <h4> שם פרטי <b className="required">*</b></h4>
         <input type="text" className="SignUpForm__textInput" placeholder="שם פרטי" name="name" required />
         </div>
         
         <div className="SignUpForm__inputs">
         <h4> שם משפחה <b className="required">*</b></h4>
         <input type="text" className="SignUpForm__textInput" placeholder="שם משפחה" name="Lastname" required />
         </div>
         
         <div className="SignUpForm__inputs">
         <h4> דואר אלקטרוני <b className="required">*</b></h4>
         <input type="email" className="SignUpForm__textInput" placeholder="דואר אלקטרוני" name="email" required />
         </div>
         
         <div className="SignUpForm__inputs">
         <h4> סיסמה <b className="required">*</b> </h4>
         <input type="password" className="SignUpForm__passwordInput" placeholder="סיסמה" name="password" required />
         </div>
        
         <div className="SignUpForm__inputs">
         <h4>  שוב סיסמה <b className="required">*</b> </h4>
         <input type="password" className="SignUpForm__passwordInput" placeholder="סיסמה עוד פעם" name="repeatPassword" required />
         </div>
       
        <div className="SignUpForm__inputs">
        <h4> מקום לימודים </h4>
         <Select 
         className="SignUpForm__collegeOptions"
         options={collegeOptions}
         placeholder="תבחר באיזה מכללה" />
          </div>
        
         
          
         <button className="SignUpForm__button--register" type="submit">הירשם </button>
              
         <Link to="/SignIn"><h3 id="SignUpForm__button--alreadyHaveAccount">יש לך חשבון קיים?</h3></Link> 
               
         </div>

         

     </form>

     </div>

    );
}


export default SignUp;