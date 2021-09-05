import React from "react";
import { Dropdown } from "semantic-ui-react";

const friendOptions = [
  {
    key: "Jenny Hess",
    text: "Jenny Hess",
    value: "Jenny Hess",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/small/jenny.jpg"
    }
  },
  {
    key: "edit ",
    text: "Edit Profile",
    value: "EDIT"
  },
  {
    key: "Log Out ",
    text: "LOGOUT",
    value: "LOGOUT"
  }
];

const Menu = () => (
  <span>
    <Dropdown
      inline
      options={friendOptions}
      defaultValue={friendOptions[0].value}
    />
  </span>
);

export default Menu;