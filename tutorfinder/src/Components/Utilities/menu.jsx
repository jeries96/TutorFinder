import React, { useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import Cookies from "js-cookie";
import {Link, useHistory} from 'react-router-dom';





const Menu = (props) => {
  const history=useHistory()
const {user} =props
const handleLogOut = () => {
  Cookies.remove("loginToken")
  window.location.reload(false)
}
  // useEffect(() => {
  //   const loginToken =  Cookies.get('loginToken')
  //   console.log(loginToken)
  //   const decodedToken = jwt.verify(loginToken, secret);
  //   const username = decodedToken.name
  const friendOptions = [
      {
        key: user,
        text: user,
        value: user
      },
      {
        key: "edit ",
        text: "Edit Profile",
        value: "EDIT", 
      },
      {
        key: "Log Out ",
        text: "LOGOUT",
        value: "LOGOUT",
        onClick: handleLogOut  
      }
    ];
// }, [])

return (
  <span>
    <Dropdown
      inline
      options={friendOptions}
      defaultValue={friendOptions[0].value}
    />
  </span>
)};

export default Menu;