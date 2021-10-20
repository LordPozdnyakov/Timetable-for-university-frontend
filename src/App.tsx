import React from 'react';
import { Route } from 'react-router-dom';

import HeaderContainerComponent from "./Components/Header/HeaderContainerComponent";
import SidebarContainerComponent from "./Components/Sidebar/SidebarContainerComponent";
import ProfileContainerComponent from './Components/Profile/ProfileContainerComponent';

import './App.scss';


const  App = () => {
  return (
    <div className="wrapper">
        <HeaderContainerComponent />
        <SidebarContainerComponent />
        <div className="content">
            <Route exact path="/profile" render={() => <ProfileContainerComponent />} />
        </div>
    </div>
  );
}

export default App;
