import React , {useState} from 'react'
import './ForgotPassword.css'
import {Link ,useHistory} from "react-router-dom";

function ForgotPassword(){
    const history=useHistory()
    
    let currentEmail='';
    
    const [display,setDisplay]=useState("emailAuth");
    const[error,setError]=useState("")
    
    function HandleEmailAuth(event){
        event.preventDefault();
        let {email}=event.target.elements;
        email=email.value;
        currentEmail=email.value;
        fetch('/api/users/forgotPassword', {
            method: "POST",
            body: JSON.stringify({email}),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if(data.success==true) {
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
        let email=currentEmail
        fetch('/api/users/checkValidKey', {
            method: "POST",
            body: JSON.stringify({email,key}),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if(data.success==true) {
                    setDisplay("newPassword")     
                }
                else {
                    setError(data.error)
                }
            });
    }

    function HandleNewPassword (event) {
        event.preventDefault();
        let {code}=event.target.elements;
        code=code.value;
        fetch('/api/users/updatePassword ', {
            method: "POST",
            body: JSON.stringify({currentEmail,code}),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if(data.success==true) {
                history.push('/HomePage')
            }
                else {
                    setError(data.error)
                }
            });
    }

    

    
    

    return (
        
        <div dir="rtl" className="ForgotPassword__Wrapper"> 
         { display == "emailAuth" && 
           <form className="ForgotPasswordForm" onSubmit={HandleEmailAuth}>

            <h2 className="ForgotPassword__Title"> שחזור סיסמה </h2>
            
            <div className="container">

            <input 
            type="email" 
            id="ForgotPassword__textInput" 
            placeholder="דואר אלקטרוני" 
            name="email" 
            required />
            <h4 className="errorMsg">{error}</h4>
            <button className="ForgotPassword__button--submit" type="submit">שחזר</button>
                 
            <Link to="/SignIn"><h3 id="ForgotPassword__button--alreadyHaveAccount">יש לך חשבון קיים?</h3></Link> 
                 
            </div>

        </form>

    }

    { display == "codeAuth" &&
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

{ display == "newPassword" &&
        <form className="ForgotPasswordForm" onSubmit={HandleNewPassword}>

            <h2 className="ForgotPassword__Title"> שחזור סיסמה </h2>
            <div className="container">

            <input 
            type="password" 
            id="ForgotPassword__textInput" 
            placeholder="סיסמה חדשה" 
            name="password" 
            required />

            <input 
            type="password" 
            id="ForgotPassword__textInput" 
            placeholder="סיסמה עוד פעם" 
            name="password" 
            required />
            
            <h4 className="errorMsg">{error}</h4>

            <button className="ForgotPassword__button--submit" type="submit">שחזר</button>
                  
                 
            </div>

            

</form> }



        </div>
    )
}

export default ForgotPassword;
