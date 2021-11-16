import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Student from "../../Components/Student/Student";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux-hooks";
import IUser from "../../Types/IUser";
import {
  getSortedStudents,
  getStudents,
} from "../../Redux/Actions/studentsActions";
import { ADD_STUDENT_PAGE_ROUTE } from "../../Constant/routes-constants";
import { DownloadStudentsComponent } from "../../Components";

const StudentsPage: React.FC = () => {
  const { students, loading, error } = useTypedSelector(
    (state) => state.studentsReducer
  );

  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(getStudents());
  }, [dispatch]);

  const [sortOrder, setSortOrder] = useState("desc");

  const handleSortByGroup = () => {
    sortOrder === "asc" ? setSortOrder("desc") : setSortOrder("asc");
    dispatch(getSortedStudents("groupName", sortOrder));
  };

  if (loading) {
    return <div>Завантаження...</div>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  if (students.length < 1) {
    return <div>Студенти відсутні</div>;
  }

  return (
    <div className="students">
      <div className="page__header">
        <h5 className="page__title page__title--no-mb">Всі студенти</h5>
        <Link to={ADD_STUDENT_PAGE_ROUTE}>
          <Button
            className="add-btn"
            type="primary"
            shape="circle"
            icon={<PlusOutlined className="add-btn__inner" />}
          />
        </Link>
        <DownloadStudentsComponent />
      </div>
      <div className="table-responsive">
        <table className="table">
          <tbody>
            <tr>
              <th>Ім’я</th>
              <th className="table__th-btn" onClick={handleSortByGroup}>
                Група ↑↓
              </th>
              <th>Дата народження</th>
              <th>Номер телефону</th>
              <th>E-mail</th>
              <th>Місце проживання</th>
              <th></th>
              <th></th>
            </tr>
            {students.map((student: IUser) => {
              return <Student student={student} key={student.id} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsPage;
