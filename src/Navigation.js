import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Tabs from "./Tabs.js";
import ProfDropdown from "./ProfDropdown.js";

const Navigation = () => {
  return (
    <Navbar fill bg="light">
      <Navbar.Brand> roundsquare </Navbar.Brand>
      {
        // user signed in ? prof dropdown : tabs
      }
      <Tabs />
      <ProfDropdown />
    </Navbar>
  );
};
export default Navigation;
