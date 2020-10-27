import React from 'react'
import './SignIn.css'
import {Link ,useHistory} from "react-router-dom";

function SignIn(){
    const history=useHistory()

    function HandleSignIn(event){
        event.preventDefault();
        let {email,password}=event.target.elements
        email=email.value;
        password=password.value;


        fetch('/api/users/login', {
            method: "POST",
            body: JSON.stringify({email, password}),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if(data.success) {
                history.push('/')
            }
                else {
                    alert('wrong password / username')
                }
            });
    }
    

    
    return (
        <div dir="rtl" className="SignInForm__Wrapper">   
           <form className="SignInForm" onSubmit={HandleSignIn}>

            <h2 className="SignInForm__Title">ברוך הבא</h2>
            <div className="container">
            <br></br>
            <input type="email" id="SignInForm__textInput" placeholder="דואר אלקטרוני" name="email" required />
            
            <input type="password" id="SignInForm__passwordInput" placeholder="סיסמה" name="password" required/>
                
            <br></br>
            
             
            <button className="SignInForm__button--submit" type="submit">התחבר</button>
                 <br></br> 
                 <h3 >עדיין לא נרשמת?<Link to="/SignUp"> <b id="SignInForm__button--signUp">להרשמה</b></Link> </h3>
                 <Link to="/forgotPassword"><b id="SignInForm__button--forgotPassword">שכחתי סיסמה</b></Link> 
            </div>

            

        </form>

        </div>
    )
}

export default SignIn;