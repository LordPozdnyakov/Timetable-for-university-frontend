import React from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { AuthPage, HomePage } from "./Pages";
import { MAIN_PAGE_ROUTE } from "./Constant/routes-constants";
import { AuthVerify } from "./Modules";

const App: React.FC = () => {
  let isAuth = localStorage.getItem("token");
  const history = useHistory();
  console.log(history);
  const logOut = () => {
    history.push("/login");
    window.localStorage.clear();
    isAuth = localStorage.getItem("token");
  };
  return (
    <>
      <Switch>
        <Route
          exact
          path={["/login", "/recovery", "/recovery/password", "/registration"]}
          render={() => (!isAuth ? <AuthPage /> : <Redirect to="/" />)}
        />
        <Route
          path={MAIN_PAGE_ROUTE}
          render={() =>
            isAuth ? <HomePage logOut={logOut} /> : <Redirect to="/login" />
          }
        />
      </Switch>
      <AuthVerify logOut={logOut} />
    </>
  );
};

export default App;
