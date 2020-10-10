import React from 'react';
import './SignUp.css'
import {Link} from 'react-router-dom';

function SignUp (){

    return (
        <div className="SignUpForm__Wrapper">
        <form className="SignUpForm">

         <h2 className="SignUpForm__Title">Register </h2>
         <div className="container">
         <br></br>
         <input type="text" id="SignUpForm__textInput" placeholder="Username" name="name" required />
         <input type="text" id="SignUpForm__textInput" placeholder="LastName" name="Lastname" required />
         
         <input type="email" id="SignUpForm__textInput" placeholder="email" name="email" required />
         
         <input type="password" id="SignUpForm__passwordInput" placeholder="Enter Password" name="password" required />
         <br></br>
         
          
         <button className="SignUpForm__button--register" type="submit">Register </button>
              <br></br> 
              <Link to="/SignIn"><h3 id="SignUpForm__button--alreadyHaveAccount">Already have an account?</h3></Link> 
               
         </div>

         

     </form>

     </div>

    );
}


export default SignUp;