import React, { useEffect } from "react";
import InfoCard from "../../Components/InfoCard/InfoCard";
import "./MainPage.scss";
import {
  GROUPS_PAGE_ROUTE,
  STUDENTS_PAGE_ROUTE,
  TEACHERS_PAGE_ROUTE,
} from "../../Constant/routes-constants";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux-hooks";
import { getStudents } from "../../Redux/Actions/studentsActions";
import { getGroups } from "../../Redux/Actions/groupsActions";

const MainPage = () => {
  const dispatch = useTypedDispatch();
  const { students } = useTypedSelector((state) => state.studentsReducer);
  const { groups } = useTypedSelector((state) => state.groupsReducer);

  useEffect(() => {
    dispatch(getStudents());
    dispatch(getGroups());
  }, [dispatch]);

  return (
    <div className="main-page">
      <InfoCard
        title="Всього студентів:"
        content={`${students.length}`}
        linkTitle="Перейти"
        routeTo={STUDENTS_PAGE_ROUTE}
      />
      <InfoCard
        title="Всього викладачів:"
        content="0"
        linkTitle="Перейти"
        routeTo={TEACHERS_PAGE_ROUTE}
      />
      <InfoCard
        title="Всього груп:"
        content={`${groups.length}`}
        linkTitle="Перейти"
        routeTo={GROUPS_PAGE_ROUTE}
      />
    </div>
  );
};

export default MainPage;
