import React from 'react';
import './SignUp.css'
import {Link} from 'react-router-dom';

function SignUp (){

    return (
        <div dir="rtl" className="SignUpForm__Wrapper">
        <form className="SignUpForm">

         <h2 className="SignUpForm__Title">הרשמה  </h2>
         <div className="container">
         <br></br>
         <input type="text" className="SignUpForm__textInput" placeholder="שם פרטי" name="name" required />
         <input type="text" className="SignUpForm__textInput" placeholder="שם משפחה" name="Lastname" required />
         
         <input type="email" className="SignUpForm__textInput" placeholder="דואר אלקטרוני" name="email" required />
         
         <input type="password" id="SignUpForm__passwordInput" placeholder="סיסמה" name="password" required />
         <br></br>
         
          
         <button className="SignUpForm__button--register" type="submit">הירשם </button>
              <br></br> 
              <Link to="/SignIn"><h3 id="SignUpForm__button--alreadyHaveAccount">יש לך חשבון קיים?</h3></Link> 
               
         </div>

         

     </form>

     </div>

    );
}


export default SignUp;