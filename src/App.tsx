import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { AuthPage, HomePage } from "./Pages";

const App = (props: any) => {
  return (
    <>
      <Switch>
        <Route
          exact
          path={["/login", "/recovery", "/recovery/password"]}
          component={AuthPage}
        />
        <Route
          path="/"
          render={() =>
            props.isAuth ? <HomePage /> : <Redirect to="/login" />
          }
        />
      </Switch>
    </>
  );
};

export default App;
