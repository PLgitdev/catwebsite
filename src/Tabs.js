import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { NavItem } from "react-bootstrap";

const Tabs = () => {
  const links = [
    {
      link: "/signup",
      name: "Sign up",
    },
    {
      link: "/cantinformation",
    },
    {
      link: "/faqc",
    },
  ];

  return (
    <Nav className="mr-auto">
      {links.map((key, index) => (
        <Link key={index} to={`${key.link}`}>
          <NavItem>
            {key.name}
            {console.log(key)}
          </NavItem>
        </Link>
      ))}
    </Nav>
  );
};

export default Tabs;
