import React from "react";
import Navbar from "./components/Nav/Nav";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
    </Router>
  );
};

export default App;
