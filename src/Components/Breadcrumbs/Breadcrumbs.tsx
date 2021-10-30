import React from "react";
import { Breadcrumb } from "antd";
import { HomeFilled, UserOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import IPathnamesProperties from "../../Types/IPathnamesProperties";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
  createPathnamesArray,
  checkIfPageIsProfile,
  createBreadcrumpsForUserName,
} from "../../Utils/helpers/breadcrumbs-helpers";
import "./Breadcrumbs.scss";
import { MAIN_PAGE_ROUTE } from "../../Constant/routes-constants";

const pathnamesProperties: IPathnamesProperties[] = [
  {
    path: "students",
    title: "Студенти",
    icon: <UserOutlined />,
  },
  {
    path: "teachers",
    title: "Викладачі",
    icon: <UserOutlined />,
  },
  {
    path: "add-student",
    title: "Додати студента",
    icon: null,
  },
  {
    path: "edit-student",
    title: "Редагувати студента",
    icon: null,
  },
];

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames: string[] = createPathnamesArray(location.pathname);
  const isProfile: boolean = checkIfPageIsProfile(location.pathname);
  const { selectedStudent } = useTypedSelector(
    (state) => state.studentsReducer
  );

  return (
    <Breadcrumb className="breadcrumbs">
      {pathnames.length > 0 ? (
        <Breadcrumb.Item href={MAIN_PAGE_ROUTE}>
          <HomeFilled />
          <span>Головна</span>
        </Breadcrumb.Item>
      ) : (
        <Breadcrumb.Item>
          <HomeFilled />
          <span>Головна</span>
        </Breadcrumb.Item>
      )}
      {pathnames.map((path: string, index: number) => {
        let pathProperty: IPathnamesProperties | undefined =
          pathnamesProperties.find(
            (pathProps: IPathnamesProperties) => path === pathProps.path
          );
        if (!pathProperty && index === pathnames.length - 1 && isProfile) {
          let fullName: string = "";
          if (pathnames[0] === "students") {
            if (selectedStudent) {
              const { lastName, firstName, surName } = selectedStudent;
              fullName = `${lastName} ${firstName} ${surName}`;
            }
          }
          pathProperty = createBreadcrumpsForUserName(path, fullName);
        }
        if (!pathProperty) return null;
        const { title, icon } = pathProperty;
        const isLastElem: boolean = index === pathnames.length - 1;
        const routeTo: string = `/${pathnames.slice(0, index + 1).join("/")}`;

        return isLastElem ? (
          <Breadcrumb.Item key={path}>
            {icon}
            <span>{title}</span>
          </Breadcrumb.Item>
        ) : (
          <Breadcrumb.Item key={path} href={routeTo}>
            {icon}
            <span>{title}</span>
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
