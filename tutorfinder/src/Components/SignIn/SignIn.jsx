import React from 'react'
import './SignIn.css'
function SignIn(){


    
    return (
        <div className="SignInForm__Wrapper">   
           <form className="SignInForm">

            <h2 className="SignInForm__Title">Login</h2>
            <div className="container">
            <b>Username</b>
            <br></br>
            <input type="text" id="SignInForm__textInput" placeholder="Enter Username" name="name" required />
            <br></br>
            <b>Password</b>
            <br></br>
            <input type="password" id="SignInForm__passwordInput" placeholder="Enter Password" name="password" required />
            <br></br>
            <span className="psw">Forgot password?</span> 
            <br></br>  
            <button type="submit">Login</button>
           
                <h3>Dont have an account? register</h3>
            
            </div>

            

        </form>

        </div>
    )
}

export default SignIn;