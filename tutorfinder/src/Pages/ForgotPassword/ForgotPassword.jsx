import React , {useState} from 'react'
import './ForgotPassword.css'
import {Link ,useHistory} from "react-router-dom";

let email='';
const passwordMatch={password:null , repeatPassword:null}

function ForgotPassword(){
    const history=useHistory()
    
    
    const [display,setDisplay]=useState("emailAuth");
    const[error,setError]=useState("")
    
    function HandleEmailAuth(event){
        event.preventDefault();
        let {currentEmail}=event.target.elements;
        email=currentEmail.value;
        fetch('/api/users/forgotPassword', {
            method: "POST",
            body: JSON.stringify({email}),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if(data.success===true) {
                    setError("")
                setDisplay("codeAuth")
            }else {
                setError(data.error)
            }
            });
    }

    function HandleCodeAuth (event) {
        event.preventDefault();
        let {key}=event.target.elements;
        key=key.value;
        console.log(email)
        fetch('/api/users/checkValidKey', {
            method: "POST",
            body: JSON.stringify({email,key}),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if(data.success===true) {
                    setError("")
                    setDisplay("newPassword")     
                }
                else {
                    setError(data.error)
                }
            });
    }

    function savePassword (event) {
        let password=event.target.value
        passwordMatch.password=password
      }
      function saveRepeatPassword (event) {
       let repeatPassword=event.target.value
       passwordMatch.repeatPassword=repeatPassword
     }
      function checkPassword(){
         if(passwordMatch.password===passwordMatch.repeatPassword){
           return true
         }else { 
           return false
         }
      }

    function HandleNewPassword (event) {
        event.preventDefault();
        if(checkPassword()!==true){
            alert("הסיסמאות לא זהים")
        }else {
        let {password}=event.target.elements;
        password=password.value;
        console.log(password)
        fetch('/api/users/updatePassword ', {
            method: "PUT",
            body: JSON.stringify({email,password}),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if(data.success===true) {
                history.push('/')
            }
                else {
                    setError(data.error)
                }
            });
    }
    }
  

    
    

    return (
        
        <div dir="rtl" className="ForgotPassword__Wrapper"> 
        <div className="wrapper fadeInDown">
          <div id="formContent">
         { display === "emailAuth" && 
           <form className="ForgotPasswordForm" onSubmit={HandleEmailAuth}>

            <h2 className="ForgotPassword__Title"> שחזור סיסמה </h2>
            
            <div className="container">

            <input 
            type="email" 
            id="ForgotPassword__textInput" 
            placeholder="דואר אלקטרוני" 
            name="currentEmail" 
            required />
            <h4 className="errorMsg">{error}</h4>
            <button className="ForgotPassword__button--submit" type="submit">שחזר</button>
                 
            <Link to="/SignIn"><h3 id="ForgotPassword__button--alreadyHaveAccount">יש לך חשבון קיים?</h3></Link> 
                 
            </div>

        </form>

    }

    { display === "codeAuth" &&
        <form className="ForgotPasswordForm" onSubmit={HandleCodeAuth}>

            <h2 className="ForgotPassword__Title"> שחזור סיסמה </h2>
            <div className="container">

            <input 
            type="text" 
            id="ForgotPassword__textInput" 
            placeholder="אימות קוד" 
            name="key" 
            required />

            <h4 className="errorMsg">{error} </h4>
            <button className="ForgotPassword__button--submit" type="submit">תמשיך</button>
                  
                 
            </div>

            

</form> }

{ display === "newPassword" &&
        <form className="ForgotPasswordForm" onSubmit={HandleNewPassword}>

            <h2 className="ForgotPassword__Title"> שחזור סיסמה </h2>
            <div className="container">

            <input 
            onChange={savePassword}
            type="password" 
            id="ForgotPassword__textInput" 
            placeholder="סיסמה חדשה" 
            name="password" 
            required />

            <input          
            onChange={saveRepeatPassword}
            type="password" 
            id="ForgotPassword__textInput" 
            placeholder="סיסמה עוד פעם" 
            name="repeatPassword" 
            required />
            
            <h4 className="errorMsg">{error}</h4>

            <button className="ForgotPassword__button--submit" type="submit">שחזר</button>
                  
                 
            </div>

            

</form> }


        </div>
        </div>
        </div>
    )
}

export default ForgotPassword;
