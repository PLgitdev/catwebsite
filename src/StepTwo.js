import React from "react";
import { useState } from "react";
import { input, label } from "./SignupStylesheet.css";
import { Link } from "react-router-dom";
import RS from "./roundsquare2.png";

//step two email verification
export const StepTwo = (props) => {
  console.log(props);
  const { history } = props;
  const eRegEx = /^(.+)@(.+){2,}\.(.+){2,}$/;
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
      : alert("You have an error in your input");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        console.log(value);
        !value.match(eRegEx) ? setErrorE(true) : setErrorE(false);
        break;
      default:
        console.log("name error ");
        break;
    }
  };

  return (
    <div className="background">
      <img className="img-two" src={RS} alt="rs" />
      <div className="form-container">
        <h1>Enter Your Email</h1>
        <form onSubmit={handleSubmit}>
          <label> Email</label>
          <input
            type="text"
            name="email"
            style={errorE ? red : null}
            value={email}
            onChange={(e) => handleChange(e)}
          />
          <button className="btn" type="submit">
            Submit
          </button>
          <Link to={`/`}>
            <button className="btn-two">Exit</button>
          </Link>
        </form>
      </div>
    </div>
  );
};
export default StepTwo;
//create step three which will send the fetch
