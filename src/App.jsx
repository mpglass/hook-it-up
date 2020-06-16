import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from ".Pages/Home"; 
import Characters from "./Pages/Characters";
import Staff from "./Pages/Staff";
import Students from "./Pages/Studnets";
import NotFound from "./Pages/NotFound"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/Characters">
          <Characters />
        </Route>

        <Route exact path="/Students">
          <Students />
        </Route>

        <Route exact path="/Staff">
          <Staff />
        </Route>

        <Route exact path="*">
          <NotFound />
        </Route>

      </Switch>
    </BrowserRouter>
  );
};

export default App;
