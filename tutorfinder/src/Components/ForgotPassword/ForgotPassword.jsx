import React , {useState} from 'react'
import './ForgotPassword.css'
import {Link ,useHistory} from "react-router-dom";

function ForgotPassword(){
    const history=useHistory()

    const [display,setDisplay]=useState("emailAuth");

    
    function HandleEmailAuth(event){
        event.preventDefault();
        let {email}=event.target.elements;
        email=email.value;
        setDisplay("codeAuth")
        /*fetch('/api/users/forgotPassword', {
            method: "POST",
            body: JSON.stringify({email}),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                /*if(data.success) {
                history.push('/HomePage')
            }
                else {
                    alert('wrong password / username')
                }*/
            //});
    }

    function HandleCodeAuth (event) {
        event.preventDefault();
        let {code}=event.target.elements;
        code=code.value;
        setDisplay("newPassword")
        /*fetch('/api/users/forgotPassword', {
            method: "POST",
            body: JSON.stringify({code}),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                /*if(data.success) {
                history.push('/HomePage')
            }
                else {
                    alert('wrong password / username')
                }*/
            //});
    }

    function HandleNewPassword (event) {
        event.preventDefault();
        let {code}=event.target.elements;
        code=code.value;
        /*fetch('/api/users/forgotPassword', {
            method: "POST",
            body: JSON.stringify({code}),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                /*if(data.success) {
                history.push('/HomePage')
            }
                else {
                    alert('wrong password / username')
                }*/
            //});
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
            name="code" 
            required />

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

            

            <button className="ForgotPassword__button--submit" type="submit">שחזר</button>
                  
                 
            </div>

            

</form> }



        </div>
    )
}

export default ForgotPassword;
