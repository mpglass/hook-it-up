import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home"; 
import Staff from "./Pages/Staff";
import Students from "./Pages/Students";
import NotFound from "./Pages/NotFound"
import StaffDetails from "./Pages/StaffDetails";
import StudentDetails from "./Pages/StudentDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>

        <Route exact path="/Students">
          <Students />
        </Route>

        <Route exact path="/Students/:characterName">
          <StudentDetails />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/Staff">
          <Staff />
        </Route>

        <Route exact path="/Staff/:characterName">
          <StaffDetails />
        </Route>

        <Route exact path="*">
          <NotFound />
        </Route>

      </Switch>
    </BrowserRouter>
  );
};

export default App;
