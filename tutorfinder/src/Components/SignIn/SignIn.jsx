import React from 'react'
import './SignIn.css'
import {Link} from "react-router-dom";

function SignIn(){


    
    return (
        <div dir="rtl" className="SignInForm__Wrapper">   
           <form className="SignInForm">

            <h2 className="SignInForm__Title">ברוך הבא</h2>
            <div className="container">
            <br></br>
            <input type="text" id="SignInForm__textInput" placeholder="שם משתמש" name="name" required />
            
            <input type="password" id="SignInForm__passwordInput" placeholder="סיסמה" name="password" required/>
                
            <br></br>
            
             
            <button className="SignInForm__button--submit" type="submit">התחבר</button>
                 <br></br> 
                 <h3 >עדיין לא נרשמת?<Link to="/SignUp"> <b id="SignInForm__button--signUp">להרשמה</b></Link> </h3>
                 <Link><b id="SignInForm__button--forgotPassword">שכחתי סיסמה</b></Link> 
            </div>

            

        </form>

        </div>
    )
}

export default SignIn;