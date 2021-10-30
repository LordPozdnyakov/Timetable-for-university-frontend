import React from "react";
import InfoCard from "../../Components/InfoCard/InfoCard";
import "./MainPage.scss";
import {
  STUDENTS_PAGE_ROUTE,
  TEACHERS_PAGE_ROUTE,
} from "../../Constant/routes-constants";

const MainPage = () => {
  return (
    <div className="main-page">
      <InfoCard
        title="Всього студентів:"
        content="2547"
        linkTitle="Перейти"
        routeTo={STUDENTS_PAGE_ROUTE}
      />
      <InfoCard
        title="Всього викладачів:"
        content="34"
        linkTitle="Перейти"
        routeTo={TEACHERS_PAGE_ROUTE}
      />
    </div>
  );
};

export default MainPage;
