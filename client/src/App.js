import React from "react";
import Navbar from "./components/Nav/Nav";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={LoginScreen} />
      <Route path="/register" component={RegisterScreen} />
    </Router>
  );
};

export default App;
