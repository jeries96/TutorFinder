import React ,{useState} from 'react';
import './EditProfile.css'
import {Link, useHistory} from 'react-router-dom';


// Components : 
import Select from 'react-select';

const serverSignUp={firstName:null,  
                    email:null,
                    password:null }

const passwordMatch={password:null , repeatPassword:null}

function EditProfile (){
  const history=useHistory()

      function handleEditProfile (event){
          event.preventDefault();
          const {userName,email,password}=event.target.elements;
          serverSignUp.firstName=userName.value;
         // serverSignUp.lastName=lastName.value;
          serverSignUp.email=email.value;
          // if(phone.value!==""){
          //   serverSignUp.phoneNumber=phone.value;
          // }
          // if(area.value!==""){
          //   serverSignUp.location=area.value;
          // }
          // if(education.value!==""){
          //   serverSignUp.education=education.value;
          // }
          serverSignUp.password=password.value;
          
        console.log(serverSignUp)
          
          fetch('/api/users/editUser', {
            method: "POST",
            body: JSON.stringify({serverSignUp}),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
              if(data.success===true) {
              history.push('/SignIn')
          }else {
        }
    });
    
  }
      
     

    return (
        <div dir="rtl" className="editprofile__Wrapper">
       
        <div className="wrapper fadeInDown">
          <div id="formContent">

        <form className="editprofile" onSubmit={handleEditProfile}>

         <h2 className="editprofile__Title">עריכת פרופיל  </h2>
         <div className="container">
        
         <div className="editprofile__personalInput">
         <div className="editprofile__inputs">
         <input type="text" className="editprofile__textInput" placeholder="שם פרטי" name="userName" required />
         </div>
         
          <div className="editprofile__inputs">
         <input type="text" className="editprofile__textInput" placeholder="שם משפחה" name="lastName" required />
         </div> 
         </div>
         
         <div className="editprofile__personalInput">
         <div className="editprofile__inputs">
         <input type="email" className="editprofile__textInput" placeholder="דואר אלקטרוני" name="email" required />
         </div>
        
         {/* <div className="SignUpForm__inputs">
         <h4> מספר פלפון </h4>
         <input type="tel"  className="SignUpForm__textInput" name="phone" maxlength={10} pattern="[0-9]{3}[0-9]{3}[0-9]{4}" placeholder="מספר פלאפון"  />
         </div> */}
         </div>

         <div className="editprofile__personalInput">
         <div className="editprofile__inputs">
         </div>

       </div>
        
         
         <button className="editprofile__button--register" type="submit">שמור  </button>
                             
         </div>

         

     </form>

     </div>
     </div>
     </div>

    );
}


export default EditProfile;