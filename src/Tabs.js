import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { NavItem, NavLink } from "react-bootstrap";

const Tabs = () => {
  const links = [
    {
      link: "/signup",
      name: "Sign up",
    },
    {
      link: "/faq",
      name: "Faq",
    },
    {
      link: "/catinfo",
      name: "Cat Information",
    },
  ];

  return (
    <Nav className="mr-auto">
      {links.map((key, index) => (
        <Link key={index} to={`${key.link}`}>
          <NavItem>
            <NavLink>
              {key.name}
              {console.log(key)}
            </NavLink>
          </NavItem>
        </Link>
      ))}
    </Nav>
  );
};

export default Tabs;
