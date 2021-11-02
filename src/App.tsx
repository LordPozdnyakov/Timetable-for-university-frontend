import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AuthPage, HomePage } from "./Pages";
import { MAIN_PAGE_ROUTE } from "./Constant/routes-constants";
import { AuthVerify } from "./Modules";

const App: React.FC = () => {
  const isAuth = localStorage.getItem("token");
  const logOut = () => {
    window.localStorage.token = "";
    <Redirect to="/login" />;
  };
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
          render={() => (isAuth ? <HomePage /> : <Redirect to="/login" />)}
        />
      </Switch>
      <AuthVerify logOut={logOut} />
    </>
  );
};

export default App;
