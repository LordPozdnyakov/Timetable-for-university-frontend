import React, { useEffect } from "react";
import { Descriptions } from "antd";
import { getStudentsByGroup } from "../../Redux/Actions/studentsActions";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux-hooks";
import IUser from "../../Types/IUser";
import Student from "../../Components/Student/Student";
import { getGroupById } from "../../Redux/Actions/groupsActions";
import { useParams } from "react-router-dom";

const GroupPage = () => {
  const {
    students,
    loading: studentsLoading,
    error: studentsError,
  } = useTypedSelector((state) => state.studentsReducer);

  const { selectedGroup, error, loading } = useTypedSelector(
    (state) => state.groupsReducer
  );

  const dispatch = useTypedDispatch();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    dispatch(getGroupById(+id));
  }, [dispatch, id]);

  useEffect(() => {
    if (!selectedGroup) return;
    dispatch(getStudentsByGroup(selectedGroup.id));
  }, [dispatch, selectedGroup]);

  if (loading) {
    return <div>Завантаження...</div>;
  }

  if (error || !selectedGroup) {
    return <h3>{error}</h3>;
  }

  const { shortName, fullName, studentCount, course, year, educationForm } =
    selectedGroup;

  return (
    <div>
      <h5 className="page__title">{shortName}</h5>
      <Descriptions bordered layout="vertical">
        <Descriptions.Item label="Група" span={1}>
          {shortName}
        </Descriptions.Item>
        <Descriptions.Item label="Кількість студентів" span={1}>
          {studentCount}
        </Descriptions.Item>
        <Descriptions.Item label="Форма навчання" span={1}>
          {educationForm}
        </Descriptions.Item>
        <Descriptions.Item label="Повна назва" span={1}>
          {fullName}
        </Descriptions.Item>
        <Descriptions.Item label="Курс" span={1}>
          {course}
        </Descriptions.Item>
        <Descriptions.Item label="Рік" span={1}>
          {year}
        </Descriptions.Item>
      </Descriptions>
      <div className="page__subtitle">Студенти</div>
      {studentsLoading ? (
        <div>Завантаження...</div>
      ) : studentsError ? (
        <div>{studentsError}</div>
      ) : students.length === 0 ? (
        <div>Студенти відсутні</div>
      ) : (
        <div className="table-responsive">
          <table className="table">
            <tbody>
              {students.map((student: IUser) => {
                return <Student student={student} key={student.id} />;
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default GroupPage;
