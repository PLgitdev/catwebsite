import React from "react";
import "./App.css";
import StepTwo from "./StepTwo";
import Homepage from "./Homepage.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./Signup.js";
import StepThree from "./StepThree";
import SignupFinish from "./SignupFinish";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Homepage} />
        <Route path="/signup" exact={true} component={Signup} />
        <Route path="/step-two" exact={true} component={StepTwo} />
        <Route path="/step-three" exact={true} component={StepThree} />
        <Route path="/sign-up-finish" exact={true} component={SignupFinish} />
      </Switch>
    </Router>
  );
};

export default App;
