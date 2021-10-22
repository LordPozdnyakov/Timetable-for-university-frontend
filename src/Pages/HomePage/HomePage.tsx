import React from 'react';
import {Route, Switch } from 'react-router-dom';

import '../../App.scss';

import Breadcrumbs from '../../Components/Breadcrumbs/Breadcrumbs';
import HeaderContainerComponent from '../../Components/Header/HeaderContainerComponent';
import ProfileContainerComponent from '../../Components/Profile/ProfileContainerComponent';
import SidebarContainerComponent from '../../Components/Sidebar/SidebarContainerComponent';



import MainPage from '../MainPage/MainPage';
import StudentsPage from '../StudentsPage/StudentsPage';
import TeachersPage from '../TeachersPage/TeachersPage';


const HomePage = () => {
    return (
        <div className="wrapper">
            <HeaderContainerComponent/>
            <SidebarContainerComponent/>
            <div className="content">
                <Breadcrumbs/>
                <Switch>
                    <Route exact path='/' component={MainPage} />
                    <Route exact path="/profile" render={() => <ProfileContainerComponent/>}/>
                    <Route exact path='/students' component={StudentsPage} />
                    <Route exact path='/teachers' component={TeachersPage} />
                </Switch>
            </div>
        </div>
    );
};

export default HomePage;