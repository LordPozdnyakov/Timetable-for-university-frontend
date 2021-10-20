import React from 'react';
import { Route } from 'react-router-dom';

import HeaderContainerComponent from "./Components/Header/HeaderContainerComponent";
import SidebarContainerComponent from "./Components/Sidebar/SidebarContainerComponent";
import ProfileContainerComponent from './Components/Profile/ProfileContainerComponent';

import './App.scss';
import MainPage from "./Pages/MainPage/MainPage";
import StudentsPage from "./Pages/StudentsPage/StudentsPage";
import TeachersPage from "./Pages/TeachersPage/TeachersPage";


const  App = () => {
  return (
    <div className="wrapper">
        <HeaderContainerComponent />
        <SidebarContainerComponent />
        <div className="content">
            <Route exact path="/profile" render={() => <ProfileContainerComponent />} />

          <Route path='/' component={MainPage} exact/>
          <Route path='/students' component={StudentsPage} exact/>
          <Route path='/teachers' component={TeachersPage} exact/>
        </div>
    </div>
  );
}

export default App;
