import React from "react";
import Nav from "react-bootstrap/Nav";

const Tabs = () => {
  const links = ["link1", "link2", "link3"];

  return (
    <Nav className="mr-auto">
      {links.map((link) => (
        <Nav.Item key={link.toString}>
          <Nav.Link>{link}</Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};
export default Tabs;
