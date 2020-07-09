import React from "react";
import "./App.css";
import Homepage from "./Homepage.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./Signup.js";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Homepage} />
        <Route path="/signup" exact={true} component={Signup} />
      </Switch>
    </Router>
  );
};

export default App;
