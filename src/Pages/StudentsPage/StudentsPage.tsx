import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Student from "../../Components/Student/Student";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux-hooks";
import IUser from "../../Types/IUser";
import "./StudentsPage.scss";
import { getStudents } from "../../Redux/Actions/studentsActions";

const StudentsPage: React.FC = () => {
  const { students, loading, error } = useTypedSelector(
    (state) => state.studentsReducer
  );

  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(getStudents());
  }, []);

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
      <div className="students__header">
        <h5 className="page-title students__title">Всі студенти</h5>
        <Link to="/students/add-student">
          <Button
            className="add-btn"
            type="primary"
            shape="circle"
            icon={<PlusOutlined className="add-btn__inner" />}
          />
        </Link>
      </div>
      <div className="table-responsive">
        <table className="students__table">
          <tbody>
            <tr>
              <th>Ім’я</th>
              <th>Група</th>
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
