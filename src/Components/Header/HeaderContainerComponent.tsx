import React from "react";

import HeaderComponent from "./HeaderComponent";

interface HeaderContainer {
  logOut: () => void;
}

const HeaderContainerComponent: React.FC<HeaderContainer> = ({ logOut }) => {
  return <HeaderComponent logOut={logOut} />;
};

export default HeaderContainerComponent;
