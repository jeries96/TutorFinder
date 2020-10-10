import React from 'react'
import './SignIn.css'
import {Link} from "react-router-dom";

function SignIn(){


    
    return (
        <div className="SignInForm__Wrapper">   
           <form className="SignInForm">

            <h2 className="SignInForm__Title">Welcome Back</h2>
            <div className="container">
            <br></br>
            <input type="text" id="SignInForm__textInput" placeholder="Enter Username" name="name" required />
            
            <input type="password" id="SignInForm__passwordInput" placeholder="Enter Password" name="password" required />
            <br></br>
            
             
            <button className="SignInForm__button--submit" type="submit">Login</button>
                 <br></br> 
                 <h3 >Dont have an account?<Link> <b id="SignInForm__button--signUp">Sign Up</b></Link> </h3>
                 <Link><b id="SignInForm__button--forgotPassword">Forgot password?</b></Link> 
            </div>

            

        </form>

        </div>
    )
}

export default SignIn;