import React from 'react';
import {Route, Switch } from 'react-router-dom';

import {AddStudentPage, MainPage, StudentEditPage, StudentsPage, TeachersPage, StudentProfilePage } from '..';
import { Breadcrumbs, HeaderContainerComponent, ProfileContainerComponent, SidebarContainerComponent } from '../../Components';

import '../../App.scss';


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
                    <Route exact path='/students/add-student' component={AddStudentPage} />
                    <Route exact path='/students/edit-student' component={StudentEditPage} />
                    <Route exact path='/students/:id' component={StudentProfilePage} />
                    <Route exact path='/teachers' component={TeachersPage} />
                </Switch>
            </div>
        </div>
    );
};

export default HomePage;