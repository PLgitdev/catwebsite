import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import background from "./assets/background3.png";
import {} from "./SignupStylesheet.css";
export const SignupFinish = (props) => {
  const style = {
    width: "100%",
    height: "800px",
  };

  return (
    <div>
      <img src={background} style={style} alt="background"></img>
      <div className="form-container">
        <h1>Thank you {`${props.history.location.state.username}`} </h1>
        <Link to={`/`}>
          <button className="btn-two">Exit</button>
        </Link>
      </div>
    </div>
  );
};

export default SignupFinish;
