import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from './../components/Login/Login';
import DashBoard from './../components/DashBoard/DashBoard';

function AppRoot() {
  const mediaMatch = window.matchMedia("(min-width: 1024px)");

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={DashBoard} />
      </Switch>
    </div>
  );
}

export default AppRoot;