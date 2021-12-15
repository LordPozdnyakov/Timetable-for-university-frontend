import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ADD_TEACHER_PAGE_ROUTE } from "../../Constant/routes-constants";
import { Button, Pagination } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux-hooks";
import { getTeachers } from "../../Redux/Actions/teachersActions";
import IUser from "../../Types/IUser";
import TeacherItem from "../../Components/TeacherItem/TeacherItem";
import { usePrivilage } from "../../hooks/usePrivilage";
import { paginationPageSize, usePagination } from "../../hooks/usePagination";

const TeachersPage: React.FC = () => {
  const { teachers, loading, error } = useTypedSelector(
    (state) => state.teachersReducer
  );

  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(getTeachers());
  }, [dispatch]);

  const { isTeacherPrivilage, isStudentPrivilage, isGuestPrivilage } =
    usePrivilage();
  const { changePage, lastPageIndex, firstPageIndex } = usePagination();

  if (loading) {
    return <div>Завантаження...</div>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  if (teachers.length < 1) {
    return <div>Викладачі відсутні</div>;
  }

  return (
    <div>
      <div className="page__header">
        <h5 className="page__title page__title--no-mb">Всі викладачі</h5>
        {!isStudentPrivilage && !isGuestPrivilage && !isTeacherPrivilage && (
          <Link to={ADD_TEACHER_PAGE_ROUTE}>
            <Button
              className="add-btn"
              type="primary"
              shape="circle"
              icon={<PlusOutlined className="add-btn__inner" />}
            />
          </Link>
        )}
      </div>
      <div className="table-responsive">
        <table className="table">
          <tbody>
            <tr>
              <th>Ім’я</th>
              <th>Дата народження</th>
              <th>Номер телефону</th>
              <th>E-mail</th>
              <th>Місце проживання</th>
            </tr>
            {teachers &&
              teachers.length > 0 &&
              teachers
                .slice(firstPageIndex, lastPageIndex)
                .map((teacher: IUser) => {
                  return <TeacherItem key={teacher.id} {...teacher} />;
                })}
            <Pagination
              className="pagination"
              defaultCurrent={1}
              total={teachers.length}
              defaultPageSize={paginationPageSize}
              onChange={changePage}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeachersPage;
