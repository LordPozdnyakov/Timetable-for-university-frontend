import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  LoginFormComponent,
  RecoveryFormComponent,
  RecoveryPasswordComponent,
} from "../../Modules";

import "./AuthStyles.scss";

const AuthPage = () => {
  return (
    <Switch>
      <Route exact path="/login" component={LoginFormComponent} />
      <Route exact path="/recovery" component={RecoveryFormComponent} />
      <Route
        exact
        path="/recovery/password"
        component={RecoveryPasswordComponent}
      />
    </Switch>
  );
};

export default AuthPage;
