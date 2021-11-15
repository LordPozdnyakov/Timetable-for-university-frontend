import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import {
  EDIT_TEACHER_PAGE_ROUTE,
  TEACHERS_PAGE_ROUTE,
} from "../../Constant/routes-constants";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import SimpleModal from "../SimpleModal/SimpleModal";
import { useTypedDispatch } from "../../hooks/redux-hooks";
import { deleteTeacher } from "../../Redux/Actions/teachersActions";

type TeacherItemProps = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  patronymic: string;
  birthDay: string;
  phoneNumber: string;
  address: string;
};

const TeacherItem: FC<TeacherItemProps> = ({
  id,
  firstName,
  lastName,
  patronymic,
  birthDay,
  phoneNumber,
  email,
  address,
}) => {
  const fullName = `${lastName} ${firstName} ${patronymic}`;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useTypedDispatch();

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
    dispatch(deleteTeacher(id));
  };

  return (
    <React.Fragment>
      <tr>
        <td>
          <Link to={`${TEACHERS_PAGE_ROUTE}/${id}`}>{fullName}</Link>
        </td>
        <td>{birthDay}</td>
        <td>
          <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
        </td>
        <td>
          <a href={`mailto:${email}`}>{email}</a>
        </td>
        <td>{address}</td>
        <td className="table-icon edit-icon">
          <Link to={`${EDIT_TEACHER_PAGE_ROUTE}/${id}`}>
            <EditFilled />
          </Link>
        </td>
        <td className="table-icon delete-icon" onClick={showModal}>
          <DeleteFilled />
        </td>
      </tr>
      <SimpleModal
        title="Видалити викладача?"
        content={`Викладач ${fullName} буде повністю видалений із системи.
                   Продовжити?`}
        isModalVisible={isModalVisible}
        hideModal={hideModal}
        handleCancel={handleCancelDeleting}
        handleConfirm={handleConfirmDeleting}
      />
    </React.Fragment>
  );
};

export default TeacherItem;
