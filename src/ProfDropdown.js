import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Lambda from './Lambda-letter-lowercase-symbol.svg'

const ProfDropdown = () => {

  const profileLinks = ["title1","title2","title3"]
  const lambda = <img 
                  height="20" width="20" 
                  alt="lambda" 
                  src={ Lambda }
                 />

  return (
    <Nav className="justify-content-end"> 
      <DropdownButton
        alignRight 
        title= { lambda }
          >
        {
          profileLinks.map( (title) => 
            <Dropdown.Item> 
              { title } 
            </Dropdown.Item>
          )
        }
      </DropdownButton>
    </Nav>
  )
}
export default ProfDropdown;
