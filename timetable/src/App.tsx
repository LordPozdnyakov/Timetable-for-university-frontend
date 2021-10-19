import React from 'react';
import './App.scss';
import HeaderContainerComponent from "./Components/Header/HeaderContainerComponent";
import SidebarContainerComponent from "./Components/Sidebar/SidebarContainerComponent";

const  App = () => {
  return (
    <div className="wrapper">
        <HeaderContainerComponent />
        <div>
            <SidebarContainerComponent />
            <div className="content">

            </div>
        </div>
    </div>
  );
}

export default App;
