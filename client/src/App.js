import React from "react";
import Navbar from "./components/Nav/Nav";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Route path="/login" component={LoginScreen} />
    </Router>
  );
};

export default App;
