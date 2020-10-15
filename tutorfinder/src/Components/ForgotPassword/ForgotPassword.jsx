import React from 'react'
import './ForgotPassword.css'
import {Link ,useHistory} from "react-router-dom";

function ForgotPassword(){
    const history=useHistory()

    function HandlePassword(event){
        event.preventDefault();
        let {email}=event.target.elements;
        email=email.value;
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
                /*if(data.success) {
                history.push('/HomePage')
            }
                else {
                    alert('wrong password / username')
                }*/
            });
    }
    

    return (
        <div dir="rtl" className="ForgotPassword__Wrapper">   
           <form className="ForgotPasswordForm" onSubmit={HandlePassword}>

            <h2 className="ForgotPassword__Title"> שחזור סיסמה </h2>
            <div className="container">
            <input type="email" id="ForgotPassword__textInput" placeholder="דואר אלקטרוני" name="email" required />
            
            <button className="ForgotPassword__button--submit" type="submit">שחזר</button>
                 
            <Link to="/SignIn"><h3 id="ForgotPassword__button--alreadyHaveAccount">יש לך חשבון קיים?</h3></Link> 
                 
            </div>

            

        </form>

        </div>
    )
}

export default ForgotPassword;