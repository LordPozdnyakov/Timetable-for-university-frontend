import { HomeFilled, UserOutlined } from "@ant-design/icons";
import {
  AddStudentPage,
  MainPage,
  StudentEditPage,
  StudentProfilePage,
  StudentsPage,
  TeachersPage,
} from "../Pages";
import React from "react";
import {
  ADD_STUDENT_PAGE_ROUTE,
  EDIT_STUDENT_PAGE_WITH_PARAMS_ROUTE,
  GROUPS_PAGE_ROUTE,
  MAIN_PAGE_ROUTE,
  STUDENT_PROFILE_PAGE_ROUTE,
  STUDENTS_PAGE_ROUTE,
  TEACHERS_PAGE_ROUTE,
  ADD_GROUP_PAGE_ROUTE,
  TEACHERS_PROFILE_PAGE_ROUTE,
  ADD_TEACHER_PAGE_ROUTE,
  EDIT_TEACHER_PAGE_WITH_PARAMS_ROUTE,
} from "../Constant/routes-constants";
import GroupsPage from "../Pages/GroupsPage/GroupsPage";
import AddGroupPage from "../Pages/AddGroupPage/AddGroupPage";
import TeacherPage from "../Pages/TeacherPage/TeacherPage";
import AddTeacherPage from "../Pages/AddTeacherPage/AddTeacherPage";
import TeacherEditPage from "../Pages/TeacherEditPage/TeacherEditPage";

export type RouteType = {
  fullPath: string;
  shortPath?: string;
  title?: string;
  component: React.FC;
  icon?: any;
};

const routes: RouteType[] = [
  {
    fullPath: MAIN_PAGE_ROUTE,
    shortPath: "/",
    title: "Головна",
    icon: <HomeFilled />,
    component: MainPage,
  },
  {
    fullPath: STUDENTS_PAGE_ROUTE,
    shortPath: "students",
    title: "Студенти",
    icon: <UserOutlined />,
    component: StudentsPage,
  },
  {
    fullPath: ADD_STUDENT_PAGE_ROUTE,
    shortPath: "add-student",
    title: "Додати студента",
    component: AddStudentPage,
  },
  {
    fullPath: EDIT_STUDENT_PAGE_WITH_PARAMS_ROUTE,
    shortPath: "edit-student",
    title: "Редагувати студента",
    component: StudentEditPage,
  },
  {
    fullPath: STUDENT_PROFILE_PAGE_ROUTE,
    component: StudentProfilePage,
  },
  {
    fullPath: TEACHERS_PAGE_ROUTE,
    shortPath: "teachers",
    title: "Викладачі",
    icon: <UserOutlined />,
    component: TeachersPage,
  },
  {
    fullPath: ADD_TEACHER_PAGE_ROUTE,
    shortPath: "add-teacher",
    title: "Додати викладача",
    component: AddTeacherPage,
  },
  {
    fullPath: EDIT_TEACHER_PAGE_WITH_PARAMS_ROUTE,
    shortPath: "edit-teacher",
    title: "Редагувати викладача",
    component: TeacherEditPage,
  },
  {
    fullPath: TEACHERS_PROFILE_PAGE_ROUTE,
    component: TeacherPage,
  },
  {
    fullPath: GROUPS_PAGE_ROUTE,
    shortPath: "groups",
    title: "Групи",
    component: GroupsPage,
  },
  {
    fullPath: ADD_GROUP_PAGE_ROUTE,
    shortPath: "add-group",
    title: "Додати групу",
    component: AddGroupPage,
  },
];

export default routes;
