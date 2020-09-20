import React from "react";
import { useState } from "react";

//step two email verification
export const StepTwo = (props) => {
  console.log(props);
  const { history } = props;
  const eRegEx = /^([\\w\\d]){1,30}(?=.[@])[\\w\\d]{2,30}(?=.[.])(?=[\\w]){3,}$/;
  const { location } = history;
  const { state } = location;
  const value = state;
  const [email, setEmail] = useState("");
  const [emailC, setEmailC] = useState("");
  const [errorE, setErrorE] = useState("");
  const [errorEC, setErrorEC] = useState("");
  const red = { border: "2px solid red" };
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
    (value !== undefined) & (value !== null) & !errorE & !errorEC
      ? history.push("/step-three", emailV)
      : console.log("You have an error, value = undefined or null", emailV);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        console.log(value);
        !value.match(eRegEx) ? setErrorE(true) : setErrorE(false);
        break;
      case "emailC":
        setEmailC(value);
        !value.match(eRegEx) ? setErrorEC(true) : setErrorEC(false);
        break;
      default:
        console.log("name error ");
        break;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          style={errorE ? red : null}
          value={email}
          onChange={(e) => handleChange(e)}
        />
        <input
          name="emailC"
          style={errorEC ? red : null}
          value={emailC}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default StepTwo;
//create step three which will send the fetch
