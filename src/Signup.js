import React from "react";
import { useState } from "react";
import { input, label } from "./SignupStylesheet.css";
import RS from "./roundsquare3.png";
import { Link } from "react-router-dom";

export const Signup = (props) => {
  const { history } = props;
  const uRegEx = /^(?=[a-zA-Z0-9._]).{2,20}$/;
  const pRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%]).{8,}$/;
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [passC, setPassC] = useState("");
  const [errorU, setErrorU] = useState();
  const [errorP, setErrorP] = useState();
  const [errorPC, setErrorPC] = useState();
  const red = { border: "2px solid red" };
  const usernameV = {
    username: username,
    password: pass,
    passwordConfirmation: passC,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    //if (errorU) {e.}
    if (
      (usernameV !== undefined) &
      (usernameV !== null) &
      !errorU &
      !errorP &
      !errorPC &
      (usernameV.passwordConfirmation === usernameV.password)
    ) {
      history.push("/step-two", usernameV);
    } else {
      console.log(
        "You have an error, usernameV = undefined or null",
        usernameV
      );
      alert("you have an error in your input");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "username":
        console.log(value);
        setUsername(value);
        if (!value.match(uRegEx)) {
          setErrorU(true);
          console.log("there is an error in your username");
          console.log(errorU);
        } else {
          setErrorU(false);
          console.log(errorU);
        }
        break;
      case "pass":
        console.log(value);
        setPass(value);
        if (!value.match(pRegEx)) {
          setErrorP(true);
          console.log("there is an error in your password", errorP);
        } else {
          setErrorP(false);
        }
        break;
      case "passC":
        console.log(value);
        setPassC(value);
        if (!value.match(pRegEx)) {
          setErrorPC(true);
          console.log("there is an error in your username", errorPC);
        } else {
          setErrorPC(false);
        }
        break;
      default:
        console.log("name error");
        break;
    }
    /*if (errorP) {
    }
    if (consoPC) {
    }
    */
  };

  return (
    //  ? push to a page through route that says you have already signed up :
    // make the color change validation
    <div className="background">
      <img className="img" src={RS} alt="rs" />
      <div className="form-container">
        <h1>Signup</h1>
        <form>
          <label className="rows"> Username </label>
          <input
            type="text"
            name="username"
            style={errorU ? red : null}
            value={username}
            onChange={(e) => handleChange(e)}
          />
          <label className="rows"> Password </label>
          <input
            type="password"
            style={errorP ? red : null}
            name="pass"
            value={pass}
            onChange={(e) => handleChange(e)}
          />
          <label className="rows"> Password Confirmation</label>
          <input
            type="password"
            style={errorPC ? red : null}
            name="passC"
            value={passC}
            onChange={(e) => handleChange(e)}
          />
          <input
            className="btn"
            type="submit"
            value="Submit"
            onClick={(e) => handleSubmit(e)}
          />
          <Link to={`/`}>
            <button className="btn-two">Exit</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
