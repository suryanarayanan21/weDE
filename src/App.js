import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import First from "./components/First/First";
import Room from "./components/Room/Room";
import UserHome from "./components/UserHome/UserHome";

const App = () => (
  <Router>
    <Route path="/" exact component={First} />
    <Route path="/room" exact component={Room} />
    <Route path="/test" exact component={UserHome} />
  </Router>
);

export default App;
