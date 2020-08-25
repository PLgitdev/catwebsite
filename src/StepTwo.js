import React from "react";
import { useState } from "react";

//step two email verification
export const StepTwo = (props) => {
  console.log(props);
  const { history } = props;
  const { location } = history;
  const { state } = location;
  const value = state;
  const [email, setEmail] = useState("");
  const [emailC, setEmailC] = useState("");

  //state from the sign in prop needs to be added to email prop
  const emailV = {
    ...value,
    email: email,
    emailConfirmation: emailC,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //  console.log(e);
    //  console.log(value);
    //  console.log(props);
    console.log("Post to database, create user", emailV);
    value !== undefined || value !== null
      ? history.push("/step-three", emailV)
      : console.log("You have an error, value = undefined or null", emailV);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        console.log(value);
        break;
      case "emailC":
        setEmailC(value);
        console.log(value);
        break;
      default:
        console.log("you have ");
        break;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="email" value={email} onChange={(e) => handleChange(e)} />
        <input name="emailC" value={emailC} onChange={(e) => handleChange(e)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default StepTwo;
//create step three which will send the fetch
