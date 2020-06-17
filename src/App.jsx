import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home"; 
import Staffs from "./Pages/Staff";
import StaffDetails from "./Pages/StaffDetails";
// import Students from "./Pages/Students";
// import StudentDetails from "./Pages/StudentDetails";
import NotFound from "./Pages/NotFound"


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/Staff">
          <Staffs />
        </Route>

        <Route exact path="/Staff/StaffDetails/:staffName">
          <StaffDetails />
        </Route>

        {/* <Route exact path="/Students">
          <Students />
        </Route>

        <Route exact path="/Students/:Name">
          <StudentDetails />
        </Route> */}

        <Route path="*">
          <NotFound />
        </Route>

      </Switch>
    </BrowserRouter>
  );
};

export default App;
