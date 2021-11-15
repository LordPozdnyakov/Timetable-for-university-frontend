import React from "react";
import { Route, Switch } from "react-router-dom";

import {
  AddStudentPage,
  MainPage,
  StudentEditPage,
  StudentsPage,
  TeachersPage,
  StudentProfilePage,
} from "..";
import {
  Breadcrumbs,
  HeaderContainerComponent,
  SidebarContainerComponent,
} from "../../Components";

import "../../App.scss";
import {
  ADD_GROUP_PAGE_ROUTE,
  ADD_STUDENT_PAGE_ROUTE,
  EDIT_GROUP_PAGE_WITH_PARAMS_ROUTE,
  EDIT_STUDENT_PAGE_WITH_PARAMS_ROUTE,
  GROUP_PAGE_ROUTE,
  GROUPS_PAGE_ROUTE,
  MAIN_PAGE_ROUTE,
  STUDENT_PROFILE_PAGE_ROUTE,
  STUDENTS_PAGE_ROUTE,
  TEACHERS_PAGE_ROUTE,
} from "../../Constant/routes-constants";
import GroupsPage from "../GroupsPage/GroupsPage";
import GroupPage from "../GroupPage/GroupPage";
import AddGroupPage from "../AddGroupPage/AddGroupPage";
import EditGroupPage from "../EditGroupPage/EditGroupPage";

interface homeProps {
  logOut: () => void;
}

const HomePage: React.FC<homeProps> = ({ logOut }) => {
  return (
    <div className="wrapper">
      <HeaderContainerComponent logOut={logOut} />
      <SidebarContainerComponent />
      <div className="content">
        <Breadcrumbs />
        <Switch>
          <Route exact path={MAIN_PAGE_ROUTE} component={MainPage} />
          <Route exact path={STUDENTS_PAGE_ROUTE} component={StudentsPage} />
          <Route
            exact
            path={ADD_STUDENT_PAGE_ROUTE}
            component={AddStudentPage}
          />
          <Route
            exact
            path={EDIT_STUDENT_PAGE_WITH_PARAMS_ROUTE}
            component={StudentEditPage}
          />
          <Route
            exact
            path={STUDENT_PROFILE_PAGE_ROUTE}
            component={StudentProfilePage}
          />
          <Route exact path={TEACHERS_PAGE_ROUTE} component={TeachersPage} />
          <Route exact path={GROUPS_PAGE_ROUTE} component={GroupsPage} />
          <Route exact path={ADD_GROUP_PAGE_ROUTE} component={AddGroupPage} />
          <Route
            exact
            path={EDIT_GROUP_PAGE_WITH_PARAMS_ROUTE}
            component={EditGroupPage}
          />
          <Route exact path={GROUP_PAGE_ROUTE} component={GroupPage} />
        </Switch>
      </div>
    </div>
  );
};

export default HomePage;
