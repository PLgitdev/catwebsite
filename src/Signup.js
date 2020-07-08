import React from 'react';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';
import CreateFormRows from './CreateFormRows.js';
import catOne from './catone.png';

const Signup = () => {

  const [validated, setValidated] = useState(false);


  const handleSubmit = (event) => {
   const form = event.currentTarget;
   if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
    setValidated(true);
  };
  


  return (
    <div style={{backgroundImage: `url(${catOne})` }}>
    <Form noValidate validated={validated} onSubmit={handleSubmit} style={{
    margin: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '50%',
        transform: 'translate(-50%, -50%)'
    }}>
      <CreateFormRows />
      <Button type="submit">Submit form</Button>
    </Form>
    </div>
  )
}

export default withRouter(Signup);
