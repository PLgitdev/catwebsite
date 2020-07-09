import React from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Col from "react-bootstrap/Col";

const CreateFormRows = () => {
  let [formState, setFormState] = useState({
    first: {
      value: "",
      label: "First Name",
    },
    last: {
      value: "",
      label: "Last Name",
    },
    username: {
      value: "",
      label: "Username",
    },
    password: {
      value: "",
      label: "Password",
    },
    passwordConfirmation: {
      value: "",
      label: "Password Confirmation",
    },
    city: {
      value: "",
      label: "City",
    },
    state: {
      value: "",
      label: "State",
    },
    zip: {
      value: "",
      label: "Zip",
    },
    email: {
      value: "",
      label: "Email",
    },
  });
  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    formState = { ...formState };
    formState[name].value = value;
    setFormState(formState);
    console.log(formState);
  };

  const rows = [];

  for (let [attribute, value] of Object.entries(formState)) {
    rows.push(
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>{value.label}</Form.Label>
          <Form.Control
            onChange={handleChange}
            name={attribute}
            id={attribute}
            defaultValue={value.value}
            required
            type="text"
          />
        </Form.Group>
      </Form.Row>
    );
  }
  return <div>{rows}</div>;
};
export default CreateFormRows;
