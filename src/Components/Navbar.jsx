import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav justify-content-center p-3 shadow-sm">
      
      <NavLink
        className="text-secondary p-2 mx-3"
        activeClassName="text-danger border-bottom border-top border-danger"
        exact
        to="/Staff"
      >
        Staff
      </NavLink>
      
      <NavLink
        className="text-secondary p-2 mx-3"
        activeClassName="text-danger border-bottom border-top border-danger"
        exact
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className="text-secondary p-2 mx-3"
        activeClassName="text-danger border-bottom border-top border-danger"
        exact
        to="/Students"
      >
        Students
      </NavLink>
    </nav>
  );
};

export default Navbar; 
