import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { AuthPage, HomePage } from "./Pages";
import { MAIN_PAGE_ROUTE } from "./Constant/routes-constants";

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
          path={MAIN_PAGE_ROUTE}
          render={() =>
            props.isAuth ? <HomePage /> : <Redirect to="/login" />
          }
        />
      </Switch>
    </>
  );
};

export default App;
