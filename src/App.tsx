import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { AuthPage, HomePage } from "./Pages";
import { MAIN_PAGE_ROUTE } from "./Constant/routes-constants";
import { AuthVerify } from "./Modules";

const App: React.FC = () => {
  const isAuth = localStorage.getItem("token");
  const history = useHistory();
  const logOut = () => {
    window.localStorage.token = "";
    history.push("/login");
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
          render={() => (isAuth ? <HomePage logOut={logOut} /> : <AuthPage />)}
        />
      </Switch>
      <AuthVerify logOut={logOut} />
    </>
  );
};

export default App;
