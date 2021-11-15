import React, { useEffect } from "react";
import { Descriptions } from "antd";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux-hooks";
import { useParams } from "react-router-dom";
import { getTeacherById } from "../../Redux/Actions/teachersActions";

const TeacherPage = () => {
  const { selectedTeacher, error, loading } = useTypedSelector(
    (state) => state.teachersReducer
  );

  const dispatch = useTypedDispatch();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    dispatch(getTeacherById(+id));
  }, [dispatch, id]);

  if (loading) {
    return <div>Завантаження...</div>;
  }

  if (error || !selectedTeacher) {
    return <h3>{error}</h3>;
  }

  const {
    firstName,
    lastName,
    patronymic,
    birthDay,
    phoneNumber,
    email,
    address,
  } = selectedTeacher;
  const fullName = `${lastName} ${firstName} ${patronymic}`;

  return (
    <div>
      <Descriptions bordered layout="vertical">
        <Descriptions.Item label="Прізвище, ім’я, по-батькові" span={3}>
          <h5 className="page__title mb0">{fullName}</h5>
        </Descriptions.Item>
        <Descriptions.Item label="Дата народження" span={1}>
          {birthDay}
        </Descriptions.Item>
        <Descriptions.Item label="Номер телефону" span={1}>
          <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
        </Descriptions.Item>
        <Descriptions.Item label="E-mail" span={1}>
          <a href={`mailto:${email}`}>{email}</a>
        </Descriptions.Item>
        <Descriptions.Item label="Адреса" span={3}>
          {address}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default TeacherPage;
