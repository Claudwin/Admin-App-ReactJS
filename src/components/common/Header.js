import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStlye = { color: "#F15B2A" };

  return (
    <nav>
      <NavLink to="/" activeStyle={activeStlye} exact>
        {" "}
        Home
      </NavLink>
      {" | "}
      <NavLink to="/courses" activeStyle={activeStlye}>
        Courses
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStlye}>
        About
      </NavLink>
    </nav>
  );
};

export default Header;
