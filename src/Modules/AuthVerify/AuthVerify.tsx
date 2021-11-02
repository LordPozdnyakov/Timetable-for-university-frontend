import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface propsType extends RouteComponentProps<any> {
  logOut: () => void;
}

const AuthVerify = (props: propsType) => {
  const parseJwt = (token: string) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  };
  props.history.listen(() => {
    const token = window.localStorage["token"];
    if (token) {
      const decodedJWT = parseJwt(token);
      if (decodedJWT.exp * 1000 < Date.now()) {
        props.logOut();
      }
    }
  });

  return <></>;
};

export default withRouter(AuthVerify);
