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
import { getTeachers } from "../../Redux/Actions/teachersActions";
import { getUsers } from "../../Redux/Actions/usersActions";
import { usePrivilage } from "../../hooks/usePrivilage";

const MainPage = () => {
  const dispatch = useTypedDispatch();
  const { students } = useTypedSelector((state) => state.studentsReducer);
  const { groups } = useTypedSelector((state) => state.groupsReducer);
  const { teachers } = useTypedSelector((state) => state.teachersReducer);
  const { users } = useTypedSelector((state) => state.usersReducer);

  useEffect(() => {
    dispatch(getStudents());
    dispatch(getGroups());
    dispatch(getTeachers());
    dispatch(getUsers());
  }, [dispatch]);

  const { isAdminPrivilage } = usePrivilage();

  return (
    <div className="main-page">
      {isAdminPrivilage ? (
        <InfoCard
          title="Всього студентів:"
          content={`${students.length}`}
          linkTitle="Перейти"
          routeTo={STUDENTS_PAGE_ROUTE}
        />
      ) : (
        <InfoCard
          title="Всього студентів:"
          content={`${students.length}`}
          linkTitle=""
          routeTo={STUDENTS_PAGE_ROUTE}
        />
      )}
      {isAdminPrivilage ? (
        <InfoCard
          title="Всього викладачів:"
          content={`${teachers.length}`}
          linkTitle="Перейти"
          routeTo={TEACHERS_PAGE_ROUTE}
        />
      ) : (
        <InfoCard
          title="Всього викладачів:"
          content={`${teachers.length}`}
          linkTitle=""
          routeTo={TEACHERS_PAGE_ROUTE}
        />
      )}
      {isAdminPrivilage ? (
        <InfoCard
          title="Всього груп:"
          content={`${groups.length}`}
          linkTitle="Перейти"
          routeTo={GROUPS_PAGE_ROUTE}
        />
      ) : (
        <InfoCard
          title="Всього груп:"
          content={`${groups.length}`}
          linkTitle=""
          routeTo={GROUPS_PAGE_ROUTE}
        />
      )}
    </div>
  );
};

export default MainPage;
