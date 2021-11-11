import React, { useEffect } from "react";
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
  DownloadStudentsComponent,
  HeaderContainerComponent,
  SidebarContainerComponent,
} from "../../Components";

import "../../App.scss";
import {
  ADD_STUDENT_PAGE_ROUTE,
  EDIT_STUDENT_PAGE_WITH_PARAMS_ROUTE,
  MAIN_PAGE_ROUTE,
  STUDENT_PROFILE_PAGE_ROUTE,
  STUDENTS_PAGE_ROUTE,
  TEACHERS_PAGE_ROUTE,
} from "../../Constant/routes-constants";
import routes, { RouteType } from "../../Shared/route-config";
import { Spin } from "antd";

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

        <DownloadStudentsComponent />
      </div>
    </div>
  );
};

export default HomePage;
