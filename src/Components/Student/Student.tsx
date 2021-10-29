import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import SimpleModal from "../SimpleModal/SimpleModal";
import { message } from "antd";
import IUser from "../../Types/IUser";
import "./Student.scss";
import {
  EDIT_STUDENT_PAGE_ROUTE,
  GROUPS_PAGE_ROUTE,
  STUDENTS_PAGE_ROUTE,
} from "../../Constant/routes-constants";

const Student = ({ student }: { student: IUser }) => {
  const {
    userId,
    firstName,
    lastName,
    surName,
    groupId,
    birthDay,
    phoneNumber,
    email,
  } = student;
  const fullName = `${lastName} ${firstName} ${surName}`;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (): void => {
    setIsModalVisible(true);
  };

  const hideModal = (): void => {
    setIsModalVisible(false);
  };

  const handleCancelDeleting = (): void => {
    setIsModalVisible(false);
  };

  const handleConfirmDeleting = (): void => {
    setIsModalVisible(false);
    message.success("Студента успішно видалено");
  };

  return (
    <React.Fragment>
      <tr>
        <td>
          <Link to={`${STUDENTS_PAGE_ROUTE}/${userId}`}>{fullName}</Link>
        </td>
        <td>
          <Link to={`${GROUPS_PAGE_ROUTE}/${groupId}`}>{groupId}</Link>
        </td>
        <td>{birthDay}</td>
        <td>
          <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
        </td>
        <td>
          <a href={`mailto:${email}`}>{email}</a>
        </td>
        <td>Address</td>
        <td className="table-icon edit-icon">
          <Link to={EDIT_STUDENT_PAGE_ROUTE}>
            <EditFilled />
          </Link>
        </td>
        <td className="table-icon delete-icon" onClick={showModal}>
          <DeleteFilled />
        </td>
      </tr>
      <SimpleModal
        title="Видалити студента?"
        content={`Студент ${fullName} буде повністю видалений із системи.
                   Продовжити?`}
        isModalVisible={isModalVisible}
        hideModal={hideModal}
        handleCancel={handleCancelDeleting}
        handleConfirm={handleConfirmDeleting}
      />
    </React.Fragment>
  );
};

export default Student;
