import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  LoginFormComponent,
  RecoveryFormContainerComponent,
  RecoveryPasswordComponent,
} from "../../Modules";

import "./LoginFormStyles.scss";

const AuthPage = () => {
  return (
    <Switch>
      <Route exact path="/login" component={LoginFormComponent} />
      <Route
        exact
        path="/recovery"
        component={RecoveryFormContainerComponent}
      />
      <Route
        exact
        path="/recovery/password"
        component={RecoveryPasswordComponent}
      />
    </Switch>
  );
};

export default AuthPage;
