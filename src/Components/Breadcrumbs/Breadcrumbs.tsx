import React from "react";
import { Breadcrumb } from "antd";
import { HomeFilled } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import { useTypedSelector } from "../../hooks/redux-hooks";
import {
  createPathnamesArray,
  checkIfPageIsProfile,
  createBreadcrumpsForUserName,
} from "../../Utils/helpers/breadcrumbs-helpers";
import "./Breadcrumbs.scss";
import { MAIN_PAGE_ROUTE } from "../../Constant/routes-constants";
import routes, { Route } from "../../Shared/route-config";

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
        let pathProperty: Route | undefined = routes.find(
          (pathProps: Route) => path === pathProps.shortPath
        );
        if (!pathProperty && index === pathnames.length - 1 && isProfile) {
          let fullName: string = "";
          if (pathnames[0] === "students") {
            if (selectedStudent) {
              const { lastName, firstName, patronymic } = selectedStudent;
              fullName = `${lastName} ${firstName} ${patronymic}`;
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
