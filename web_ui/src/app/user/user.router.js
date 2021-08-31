import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
const UserRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="*" exact component={LandingPage} />
    </Switch>
  );
};
export default UserRouter;
