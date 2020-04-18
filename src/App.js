import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import First from "./components/First/First";
import Room from "./components/Room/Room";
import UserHome from "./components/UserHome/UserHome";
import AddProject from "./components/ProjectButtons/AddProject";

const App = () => (
  <Router>
    <Route path="/" exact component={First} />
    <Route path="/room" exact component={Room} />
    <Route path="/test" exact component={AddProject} />
  </Router>
);

export default App;
