import React from 'react';
import { Route } from 'react-router-dom';

import './App.scss';


import HeaderContainerComponent from "./Components/Header/HeaderContainerComponent";
import SidebarContainerComponent from "./Components/Sidebar/SidebarContainerComponent";

const  App = () => {
  return (
    <div className="wrapper">
        <HeaderContainerComponent />
        <SidebarContainerComponent />
        <div className="content">
            <Route exact path="/profile" />
        </div>
    </div>
  );
}

export default App;
