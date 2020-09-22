import React, { useState } from "react";
import { Link } from "react-router-dom";
import { input, label } from "./SignupStylesheet.css";
import RS from "./roundsquare1.png";

const StepThree = (props) => {
  const { history } = props;
  const { location } = history;
  const { state } = location;
  const [response, setResponse] = useState();
  const value = state;
  const url = "http://localhost:8080/api/user";
  const fullValue = JSON.stringify({
    ...value,
    //image: "image", //image,
  });

  const params = {
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
    mode: "cors",
    body: fullValue,
    method: "POST",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    (fullValue !== undefined) & (fullValue !== null)
      ? fetch(url, params)
          .then((res) => {
            setResponse(res);
          })
          .then(history.push("/sign-up-finish", fullValue))
          .catch((err) => {
            console.log(err);
          })
      : console.log("You have an error, value = undefined or null", fullValue);
  };

  return (
    <div className="background">
      <img className="img-three" src={RS} alt="rs" />
      <div className="form-container">
        <h1>Submit and Sign up!</h1>
        <form>
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

export default StepThree;
